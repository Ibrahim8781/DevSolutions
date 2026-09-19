"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  phase: number;
}

export default function ServicesAmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Tuned down node density: sits quietly behind content and imagery
    let nodeCount = 40;
    if (width < 768) {
      nodeCount = 16;
    } else if (width < 1024) {
      nodeCount = 26;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 0.9 + 1.2, // 1.2px - 2.1px (delicate)
        baseAlpha: Math.random() * 0.08 + 0.12, // soft resting alpha ~0.12 - 0.20
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Subtle pointer tracking without aggressive glow expansion
    let mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
      glowRadius: 130, // Tuned down from 270px
    };

    let idleTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.active = false;
      }, 3000);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Read active theme tokens (quiet, subdued at-rest visibility)
    const getThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return {
        isLight,
        restLine: isLight ? "rgba(95, 95, 110, 0.08)" : "rgba(145, 145, 165, 0.10)",
        restNode: isLight ? "rgba(80, 80, 95, 0.16)" : "rgba(195, 195, 215, 0.18)",
        primaryRGB: isLight ? "224, 83, 10" : "255, 106, 26",
      };
    };

    // Static render for prefers-reduced-motion
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      const { restLine, restNode } = getThemeColors();
      const connectionDist = width < 768 ? 100 : 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = restLine;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = restNode;
        ctx.fill();
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", handleResize);
        clearTimeout(idleTimer);
      };
    }

    // Animation render loop
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();
    const connectionDist = width < 768 ? 110 : 155;

    const render = (time: number) => {
      if (!isTabVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.08;
        mouse.y += (-9999 - mouse.y) * 0.08;
      }

      const { restLine, restNode, primaryRGB } = getThemeColors();

      // Gentle drift
      nodes.forEach((node) => {
        const driftX = Math.sin(time * 0.0004 + node.phase) * 0.15;
        const driftY = Math.cos(time * 0.0004 + node.phase) * 0.15;

        node.x += (node.vx + driftX) * (delta * 60);
        node.y += (node.vy + driftY) * (delta * 60);

        if (node.x < -20) node.x = width + 20;
        else if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        else if (node.y > height + 20) node.y = -20;
      });

      // Very soft, quiet cursor halo (low opacity)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.glowRadius
        );
        glow.addColorStop(0, `rgba(${primaryRGB}, 0.05)`);
        glow.addColorStop(0.5, `rgba(${primaryRGB}, 0.015)`);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);

            let strokeStyle = restLine;
            let lineWidth = 0.9;

            if (mouse.active && distToMouse < mouse.glowRadius) {
              const mouseProximity = 1 - distToMouse / mouse.glowRadius;
              const alpha = Math.min(0.35, 0.10 + mouseProximity * 0.25);
              strokeStyle = `rgba(${primaryRGB}, ${alpha.toFixed(2)})`;
              lineWidth = 0.9 + mouseProximity * 0.5;
            }

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const distToMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const breath = Math.sin(time * 0.001 + node.phase) * 0.03;

        let fillStyle = restNode;
        let radius = node.radius;

        if (mouse.active && distToMouse < mouse.glowRadius) {
          const mouseProximity = 1 - distToMouse / mouse.glowRadius;
          const alpha = Math.min(0.45, node.baseAlpha + breath + mouseProximity * 0.25);
          fillStyle = `rgba(${primaryRGB}, ${alpha.toFixed(2)})`;
          radius = node.radius + mouseProximity * 0.5;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
