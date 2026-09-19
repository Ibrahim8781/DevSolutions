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

export default function AmbientNetworkCanvas() {
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

    // Noticeably increased node density
    let nodeCount = 80;
    if (width < 768) {
      nodeCount = 28;
    } else if (width < 1024) {
      nodeCount = 50;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 1.4, // 1.4px - 2.6px (softer)
        baseAlpha: Math.random() * 0.15 + 0.28, // at-rest base alpha ~0.28 - 0.43 (softer)
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Cursor tracking state with tuned glow radius
    let mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
      glowRadius: 270, // Tuned from 320 to 270px
    };

    let idleTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.active = false;
      }, 3500);
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

    // Read active theme tokens (quieter, softer at-rest visibility)
    const getThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return {
        isLight,
        restLine: isLight ? "rgba(95, 95, 110, 0.20)" : "rgba(145, 145, 165, 0.22)",
        restNode: isLight ? "rgba(80, 80, 95, 0.36)" : "rgba(195, 195, 215, 0.42)",
        primaryRGB: isLight ? "224, 83, 10" : "255, 106, 26", // #E0530A or #FF6A1A
      };
    };

    // Static render for prefers-reduced-motion
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      const { restLine, restNode } = getThemeColors();
      const connectionDist = width < 768 ? 120 : 170;

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
            ctx.lineWidth = 1.2;
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

    // Interactive rendering loop
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
    const connectionDist = width < 768 ? 120 : 175;

    const render = (time: number) => {
      if (!isTabVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Lerp mouse towards target
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.08;
        mouse.y += (-9999 - mouse.y) * 0.08;
      }

      const { restLine, restNode, primaryRGB } = getThemeColors();

      // Update positions with subtle organic idle drift (sinusoidal + linear)
      nodes.forEach((node) => {
        const driftX = Math.sin(time * 0.0006 + node.phase) * 0.2;
        const driftY = Math.cos(time * 0.0006 + node.phase) * 0.2;

        node.x += (node.vx + driftX) * (delta * 60);
        node.y += (node.vy + driftY) * (delta * 60);

        if (node.x < -20) node.x = width + 20;
        else if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        else if (node.y > height + 20) node.y = -20;
      });

      // Cursor spotlight ambient aura (warm orange glow around pointer, softened)
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.glowRadius
        );
        glow.addColorStop(0, `rgba(${primaryRGB}, 0.12)`);
        glow.addColorStop(0.4, `rgba(${primaryRGB}, 0.04)`);
        glow.addColorStop(0.8, `rgba(${primaryRGB}, 0.01)`);
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
            let lineWidth = 1.0;

            if (mouse.active && distToMouse < mouse.glowRadius) {
              const mouseProximity = 1 - distToMouse / mouse.glowRadius;
              // Softer orange shift near cursor
              const alpha = Math.min(0.65, 0.22 + mouseProximity * 0.43);
              strokeStyle = `rgba(${primaryRGB}, ${alpha.toFixed(2)})`;
              lineWidth = 1.0 + mouseProximity * 0.8;
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

      // Draw nodes with breathing opacity and softer pointer reaction
      nodes.forEach((node) => {
        const distToMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const breath = Math.sin(time * 0.0012 + node.phase) * 0.05;

        let fillStyle = restNode;
        let radius = node.radius;

        if (mouse.active && distToMouse < mouse.glowRadius) {
          const mouseProximity = 1 - distToMouse / mouse.glowRadius;
          const alpha = Math.min(0.82, node.baseAlpha + breath + mouseProximity * 0.38);
          fillStyle = `rgba(${primaryRGB}, ${alpha.toFixed(2)})`;
          radius = node.radius + mouseProximity * 0.9;
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
