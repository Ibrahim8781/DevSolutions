"use client";

import { useEffect, useRef } from "react";

// Fixed, full-viewport constellation background: faint stars, glowing cyan
// nodes linked into clusters near the edges, and slowly turning orbit rings.
// The centre is kept clear for content. Renders a single static frame when
// the visitor prefers reduced motion, and pauses while the tab is hidden.

type Node = { x: number; y: number; r: number; glow: boolean; ring: boolean; phase: number };
type Cluster = { nodes: Node[]; links: [number, number][] };
type Orbit = { cx: number; cy: number; rx: number; ry: number; rot: number; speed: number; dashed: boolean };
type Star = { x: number; y: number; r: number; a: number; phase: number };

const CYAN = "94, 211, 218";
const LINE = "148, 170, 200";

// Seeded random so the layout is identical on every load and resize.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

// Cluster anchors as fractions of the viewport, hugging the corners.
const ANCHORS = [
  { x: 0.08, y: 0.1, spread: 0.16 },
  { x: 0.86, y: 0.18, spread: 0.2 },
  { x: 0.1, y: 0.86, spread: 0.14 },
  { x: 0.9, y: 0.82, spread: 0.16 },
];

function build(w: number, h: number) {
  const rand = rng(7);
  const scale = Math.min(w, h);
  const mobile = w < 768;

  const stars: Star[] = Array.from({ length: Math.round((w * h) / (mobile ? 9000 : 7000)) }, () => ({
    x: rand() * w,
    y: rand() * h,
    r: 0.3 + rand() * 0.8,
    a: 0.12 + rand() * 0.35,
    phase: rand() * Math.PI * 2,
  }));

  const clusters: Cluster[] = ANCHORS.map((anchor) => {
    const count = mobile ? 5 : 8;
    const nodes: Node[] = Array.from({ length: count }, (_, i) => {
      const angle = rand() * Math.PI * 2;
      const dist = (0.15 + rand() * 0.85) * anchor.spread * scale;
      return {
        x: anchor.x * w + Math.cos(angle) * dist,
        y: anchor.y * h + Math.sin(angle) * dist * 0.8,
        r: 0.8 + rand() * 1.2,
        glow: i < 2 || rand() > 0.75,
        ring: rand() > 0.8,
        phase: rand() * Math.PI * 2,
      };
    });
    // Chain nodes to their nearest unlinked neighbour, plus a couple of extra links.
    const links: [number, number][] = [];
    for (let i = 1; i < nodes.length; i++) {
      let best = 0;
      let bestDist = Infinity;
      for (let j = 0; j < i; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < bestDist) {
          bestDist = d;
          best = j;
        }
      }
      links.push([i, best]);
    }
    links.push([0, nodes.length - 1]);
    return { nodes, links };
  });

  const orbits: Orbit[] = [
    { cx: 0.86 * w, cy: 0.24 * h, rx: 0.2 * w, ry: 0.13 * h, rot: -0.18, speed: 0.012, dashed: false },
    { cx: 0.12 * w, cy: 0.08 * h, rx: 0.15 * w, ry: 0.2 * h, rot: 0.5, speed: -0.008, dashed: false },
    { cx: 0.08 * w, cy: 0.8 * h, rx: 0.12 * w, ry: 0.025 * h, rot: -0.04, speed: 0.006, dashed: true },
  ];

  return { stars, clusters, orbits };
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let scene = build(1, 1);
    let frame = 0;
    let last = 0;

    const resize = () => {
      // Ignore small height changes from mobile browser toolbars showing/hiding.
      if (w === window.innerWidth && Math.abs(h - window.innerHeight) < 120) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene = build(w, h);
      draw(0);
    };

    const draw = (t: number) => {
      const s = t / 1000;
      ctx.clearRect(0, 0, w, h);

      for (const star of scene.stars) {
        const a = star.a * (0.75 + 0.25 * Math.sin(s * 0.8 + star.phase));
        ctx.fillStyle = `rgba(200, 215, 235, ${a})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const orbit of scene.orbits) {
        const rot = orbit.rot + s * orbit.speed;
        ctx.save();
        ctx.translate(orbit.cx, orbit.cy);
        ctx.rotate(rot);
        ctx.strokeStyle = `rgba(${LINE}, ${orbit.dashed ? 0.16 : 0.1})`;
        ctx.lineWidth = 1;
        ctx.setLineDash(orbit.dashed ? [10, 8] : []);
        ctx.beginPath();
        ctx.ellipse(0, 0, orbit.rx, orbit.ry, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        // A small body travelling along the ring
        const p = s * 0.05 + orbit.rot;
        const bx = Math.cos(p) * orbit.rx;
        const by = Math.sin(p) * orbit.ry;
        ctx.fillStyle = `rgba(${CYAN}, 0.5)`;
        ctx.beginPath();
        ctx.arc(bx, by, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (const cluster of scene.clusters) {
        const pos = cluster.nodes.map((n) => ({
          x: n.x + Math.sin(s * 0.15 + n.phase) * 6,
          y: n.y + Math.cos(s * 0.12 + n.phase) * 6,
        }));

        ctx.lineWidth = 0.8;
        for (const [i, j] of cluster.links) {
          ctx.strokeStyle = `rgba(${LINE}, 0.16)`;
          ctx.beginPath();
          ctx.moveTo(pos[i].x, pos[i].y);
          ctx.lineTo(pos[j].x, pos[j].y);
          ctx.stroke();
        }

        cluster.nodes.forEach((node, i) => {
          const { x, y } = pos[i];
          if (node.glow) {
            const pulse = 0.7 + 0.3 * Math.sin(s * 1.2 + node.phase);
            const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
            g.addColorStop(0, `rgba(${CYAN}, ${0.45 * pulse})`);
            g.addColorStop(1, `rgba(${CYAN}, 0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(x, y, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(${CYAN}, 0.95)`;
          } else {
            ctx.fillStyle = `rgba(${LINE}, 0.55)`;
          }
          ctx.beginPath();
          ctx.arc(x, y, node.glow ? node.r + 0.6 : node.r, 0, Math.PI * 2);
          ctx.fill();

          if (node.ring) {
            ctx.strokeStyle = `rgba(${LINE}, 0.35)`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.moveTo(x - 10, y);
            ctx.lineTo(x - 7, y);
            ctx.moveTo(x + 7, y);
            ctx.lineTo(x + 10, y);
            ctx.stroke();
          }
        });
      }
    };

    // ~30fps is plenty for slow drift and halves the CPU cost.
    const loop = (t: number) => {
      frame = requestAnimationFrame(loop);
      if (t - last < 33) return;
      last = t;
      draw(t);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !reduceMotion) frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#0E1626_0%,transparent_65%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
