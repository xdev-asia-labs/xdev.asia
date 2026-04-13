"use client";

import type { GraphData, GraphEdge } from "@/lib/graph";
import { useCallback, useEffect, useRef, useState } from "react";

/* ─── Types ─── */
interface SimNode {
  id: string;
  label: string;
  type: "category" | "tag";
  slug: string;
  weight: number;
  color: string;
  href: string;
  icon: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface FlowParticle {
  edgeIdx: number;
  t: number;
  speed: number;
  size: number;
}

interface Props {
  data: GraphData;
  className?: string;
}

/* ─── Cyber icon draw functions ─── */

function drawIconBrain(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string, t: number) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.arc(cx - s * 0.18, cy, s * 0.55, Math.PI * 0.5, Math.PI * 1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + s * 0.18, cy, s * 0.55, -Math.PI * 0.5, Math.PI * 0.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy - s * 0.55);
  ctx.lineTo(cx, cy + s * 0.55);
  ctx.stroke();
  const pulse = 0.5 + 0.5 * Math.sin(t * 3);
  ctx.fillStyle = color;
  const dots: [number, number][] = [[cx - s * 0.2, cy - s * 0.15], [cx + s * 0.2, cy + s * 0.05], [cx, cy + s * 0.25]];
  for (const [dx, dy] of dots) {
    ctx.beginPath();
    ctx.arc(dx, dy, 1.2 + pulse * 0.8, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawIconCode(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.15, cy - s * 0.5);
  ctx.lineTo(cx - s * 0.55, cy);
  ctx.lineTo(cx - s * 0.15, cy + s * 0.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.15, cy - s * 0.5);
  ctx.lineTo(cx + s * 0.55, cy);
  ctx.lineTo(cx + s * 0.15, cy + s * 0.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.08, cy - s * 0.35);
  ctx.lineTo(cx - s * 0.08, cy + s * 0.35);
  ctx.stroke();
}

function drawIconCloud(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.arc(cx - s * 0.2, cy + s * 0.05, s * 0.35, Math.PI * 0.7, Math.PI * 1.9);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + s * 0.15, cy - s * 0.05, s * 0.4, Math.PI * 0.9, Math.PI * 2.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + s * 0.35, cy + s * 0.15, s * 0.25, -Math.PI * 0.3, Math.PI * 0.8);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.5, cy + s * 0.35);
  ctx.lineTo(cx + s * 0.5, cy + s * 0.35);
  ctx.stroke();
}

function drawIconGear(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string, t: number) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  const rotation = t * 0.5;
  const teeth = 6;
  const outerR = s * 0.6;
  const innerR = s * 0.42;
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a1 = rotation + (Math.PI * 2 * i) / teeth;
    const a2 = a1 + Math.PI / teeth * 0.5;
    const a3 = a1 + Math.PI / teeth;
    const a4 = a1 + Math.PI / teeth * 1.5;
    ctx.lineTo(cx + Math.cos(a1) * outerR, cy + Math.sin(a1) * outerR);
    ctx.lineTo(cx + Math.cos(a2) * outerR, cy + Math.sin(a2) * outerR);
    ctx.lineTo(cx + Math.cos(a3) * innerR, cy + Math.sin(a3) * innerR);
    ctx.lineTo(cx + Math.cos(a4) * innerR, cy + Math.sin(a4) * innerR);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, s * 0.15, 0, Math.PI * 2);
  ctx.stroke();
}

function drawIconDatabase(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  const bw = s * 0.5, bh = s * 0.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy - bh, bw, s * 0.22, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - bw, cy - bh);
  ctx.lineTo(cx - bw, cy + bh);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + bw, cy - bh);
  ctx.lineTo(cx + bw, cy + bh);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx, cy + bh, bw, s * 0.22, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx, cy, bw, s * 0.18, 0, 0, Math.PI);
  ctx.stroke();
}

function drawIconShield(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(cx, cy - s * 0.6);
  ctx.lineTo(cx + s * 0.5, cy - s * 0.35);
  ctx.lineTo(cx + s * 0.4, cy + s * 0.25);
  ctx.lineTo(cx, cy + s * 0.6);
  ctx.lineTo(cx - s * 0.4, cy + s * 0.25);
  ctx.lineTo(cx - s * 0.5, cy - s * 0.35);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.15, cy);
  ctx.lineTo(cx - s * 0.02, cy + s * 0.15);
  ctx.lineTo(cx + s * 0.18, cy - s * 0.12);
  ctx.stroke();
}

function drawIconTerminal(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  const bw = s * 0.6, bh = s * 0.45;
  ctx.strokeRect(cx - bw, cy - bh, bw * 2, bh * 2);
  ctx.beginPath();
  ctx.moveTo(cx - bw * 0.55, cy - bh * 0.2);
  ctx.lineTo(cx - bw * 0.2, cy + bh * 0.1);
  ctx.lineTo(cx - bw * 0.55, cy + bh * 0.4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy + bh * 0.4);
  ctx.lineTo(cx + bw * 0.4, cy + bh * 0.4);
  ctx.stroke();
}

function drawIconArch(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  const r = s * 0.2;
  const pts: [number, number][] = [
    [cx, cy - s * 0.45],
    [cx - s * 0.4, cy + s * 0.3],
    [cx + s * 0.4, cy + s * 0.3],
  ];
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1] + r);
  ctx.lineTo(pts[1][0], pts[1][1] - r);
  ctx.moveTo(pts[0][0], pts[0][1] + r);
  ctx.lineTo(pts[2][0], pts[2][1] - r);
  ctx.moveTo(pts[1][0] + r, pts[1][1]);
  ctx.lineTo(pts[2][0] - r, pts[2][1]);
  ctx.stroke();
  for (const [px, py] of pts) {
    ctx.strokeRect(px - r, py - r, r * 2, r * 2);
  }
}

function drawIconExam(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  const pw = s * 0.5, ph = s * 0.55;
  ctx.beginPath();
  ctx.moveTo(cx - pw, cy - ph);
  ctx.lineTo(cx + pw * 0.5, cy - ph);
  ctx.lineTo(cx + pw, cy - ph + pw * 0.5);
  ctx.lineTo(cx + pw, cy + ph);
  ctx.lineTo(cx - pw, cy + ph);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + pw * 0.5, cy - ph);
  ctx.lineTo(cx + pw * 0.5, cy - ph + pw * 0.5);
  ctx.lineTo(cx + pw, cy - ph + pw * 0.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - pw * 0.6, cy - ph * 0.2);
  ctx.lineTo(cx + pw * 0.6, cy - ph * 0.2);
  ctx.moveTo(cx - pw * 0.6, cy + ph * 0.1);
  ctx.lineTo(cx + pw * 0.3, cy + ph * 0.1);
  ctx.stroke();
}

function drawCategoryIcon(ctx: CanvasRenderingContext2D, icon: string, cx: number, cy: number, s: number, color: string, t: number) {
  switch (icon) {
    case "brain": drawIconBrain(ctx, cx, cy, s, color, t); break;
    case "code": drawIconCode(ctx, cx, cy, s, color); break;
    case "cloud": drawIconCloud(ctx, cx, cy, s, color); break;
    case "gear": drawIconGear(ctx, cx, cy, s, color, t); break;
    case "database": drawIconDatabase(ctx, cx, cy, s, color); break;
    case "shield": drawIconShield(ctx, cx, cy, s, color); break;
    case "terminal": drawIconTerminal(ctx, cx, cy, s, color); break;
    case "arch": drawIconArch(ctx, cx, cy, s, color); break;
    case "exam": drawIconExam(ctx, cx, cy, s, color); break;
    default: drawIconCode(ctx, cx, cy, s, color); break;
  }
}

/* ─── Hexagon path ─── */
function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const px = cx + r * Math.cos(a);
    const py = cy + r * Math.sin(a);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/* ─── Background ─── */
function drawBackground(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  // Subtle grid
  ctx.strokeStyle = "rgba(99, 102, 241, 0.04)";
  ctx.lineWidth = 0.5;
  const gs = 40;
  for (let x = 0; x < w; x += gs) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += gs) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Ambient glow orbs
  const orbs = [
    { x: w * 0.2, y: h * 0.3, r: 120, c: "99, 102, 241" },
    { x: w * 0.75, y: h * 0.6, r: 100, c: "6, 182, 212" },
    { x: w * 0.5, y: h * 0.15, r: 80, c: "139, 92, 246" },
  ];
  for (const o of orbs) {
    const p = 1 + Math.sin(t * 0.5 + o.x * 0.01) * 0.15;
    const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * p);
    g.addColorStop(0, `rgba(${o.c}, 0.06)`);
    g.addColorStop(1, `rgba(${o.c}, 0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r * p, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ─── Component ─── */
export default function KnowledgeGraph({ data, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<SimNode[]>([]);
  const edgesRef = useRef<GraphEdge[]>([]);
  const particlesRef = useRef<FlowParticle[]>([]);
  const [hovered, setHovered] = useState<SimNode | null>(null);
  const hoveredRef = useRef<SimNode | null>(null);
  const rafRef = useRef<number>(0);
  const stepsRef = useRef(0);

  const initSim = useCallback(
    (w: number, h: number) => {
      const cx = w / 2;
      const cy = h / 2;
      const cats = data.nodes.filter((n) => n.type === "category");
      const tags = data.nodes.filter((n) => n.type === "tag");
      const catAngleStep = (2 * Math.PI) / Math.max(cats.length, 1);
      const catRadius = Math.min(w, h) * 0.38;
      const maxW = Math.max(...data.nodes.map((n) => n.weight), 1);
      const simNodes: SimNode[] = [];

      cats.forEach((cat, i) => {
        const a = catAngleStep * i - Math.PI / 2;
        const r = 22 + (cat.weight / maxW) * 14;
        simNodes.push({ ...cat, x: cx + Math.cos(a) * catRadius, y: cy + Math.sin(a) * catRadius, vx: 0, vy: 0, radius: r });
      });

      const catPos = new Map(simNodes.map((n) => [n.id, { x: n.x, y: n.y }]));
      tags.forEach((tag) => {
        const conns = data.edges.filter((e) => e.source === tag.id || e.target === tag.id)
          .map((e) => (e.source === tag.id ? e.target : e.source));
        let tx = cx, ty = cy, cnt = 0;
        for (const cid of conns) { const p = catPos.get(cid); if (p) { tx += p.x; ty += p.y; cnt++; } }
        if (cnt > 0) { tx /= (cnt + 1); ty /= (cnt + 1); }
        const r = 3 + (tag.weight / maxW) * 7;
        const sp = 70 + Math.random() * 70;
        const a = Math.random() * Math.PI * 2;
        simNodes.push({ ...tag, x: tx + Math.cos(a) * sp, y: ty + Math.sin(a) * sp, vx: 0, vy: 0, radius: r });
      });

      nodesRef.current = simNodes;
      edgesRef.current = data.edges;
      stepsRef.current = 0;

      // Flow particles
      const particles: FlowParticle[] = [];
      for (let i = 0; i < data.edges.length; i++) {
        const cnt = Math.min(Math.ceil(data.edges[i].weight * 0.5), 3);
        for (let j = 0; j < cnt; j++) {
          particles.push({ edgeIdx: i, t: Math.random(), speed: 0.002 + Math.random() * 0.003, size: 1 + Math.random() * 1.5 });
        }
      }
      particlesRef.current = particles;
    },
    [data]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = container!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    initSim(w, h);

    function tick() {
      const nodes = nodesRef.current;
      if (!nodes.length) return;
      const cx = w / 2, cy = h / 2;
      stepsRef.current++;
      const damp = stepsRef.current > 200 ? 0.98 : 0.88;

      for (const n of nodes) { n.vx += (cx - n.x) * 0.00015; n.vy += (cy - n.y) * 0.00015; }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          let dx = b.x - a.x, dy = b.y - a.y;
          let d = Math.sqrt(dx * dx + dy * dy) || 1;
          const min = a.radius + b.radius + 18;
          if (d < min) d = min;
          const str = a.type === "category" && b.type === "category" ? 1800 : 500;
          const f = str / (d * d);
          const fx = (dx / d) * f, fy = (dy / d) * f;
          a.vx -= fx; a.vy -= fy; b.vx += fx; b.vy += fy;
        }
      }

      const nm = new Map(nodes.map((n) => [n.id, n]));
      for (const e of edgesRef.current) {
        const a = nm.get(e.source), b = nm.get(e.target);
        if (!a || !b) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const tgt = 120 + (a.radius + b.radius);
        const f = (d - tgt) * 0.003;
        const fx = (dx / d) * f, fy = (dy / d) * f;
        a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
      }

      for (const n of nodes) {
        n.vx *= damp; n.vy *= damp; n.x += n.vx; n.y += n.vy;
        const pad = n.radius + 10;
        n.x = Math.max(pad, Math.min(w - pad, n.x));
        n.y = Math.max(pad, Math.min(h - pad, n.y));
      }

      for (const p of particlesRef.current) { p.t += p.speed; if (p.t > 1) p.t -= 1; }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;
      const edges = edgesRef.current;
      const hov = hoveredRef.current;
      const t = time * 0.001;

      drawBackground(ctx!, w, h, t);

      const nm = new Map(nodes.map((n) => [n.id, n]));

      const hlIds = new Set<string>();
      if (hov) {
        hlIds.add(hov.id);
        for (const e of edges) {
          if (e.source === hov.id) hlIds.add(e.target);
          if (e.target === hov.id) hlIds.add(e.source);
        }
      }

      // ─── Edges (curved) ───
      for (const edge of edges) {
        const a = nm.get(edge.source), b = nm.get(edge.target);
        if (!a || !b) continue;
        const isHl = hov ? (hlIds.has(edge.source) && hlIds.has(edge.target)) : false;
        const alpha = isHl ? 0.6 : hov ? 0.04 : 0.12;
        const lw = isHl ? 1.8 : Math.min(0.5 + edge.weight * 0.15, 1.2);
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const dx = b.x - a.x, dy = b.y - a.y;
        const cpx = mx + (-dy * 0.08), cpy = my + (dx * 0.08);

        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.quadraticCurveTo(cpx, cpy, b.x, b.y);

        if (isHl) {
          const g = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
          g.addColorStop(0, a.color + "99");
          g.addColorStop(1, b.color + "99");
          ctx!.strokeStyle = g;
        } else {
          ctx!.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
        }
        ctx!.lineWidth = lw;
        ctx!.stroke();
      }

      // ─── Flow particles ───
      if (!hov) {
        for (const p of particlesRef.current) {
          const edge = edges[p.edgeIdx];
          if (!edge) continue;
          const a = nm.get(edge.source), b = nm.get(edge.target);
          if (!a || !b) continue;
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          const dx = b.x - a.x, dy = b.y - a.y;
          const cpx = mx + (-dy * 0.08), cpy = my + (dx * 0.08);
          const tt = p.t;
          const px = (1 - tt) * (1 - tt) * a.x + 2 * (1 - tt) * tt * cpx + tt * tt * b.x;
          const py = (1 - tt) * (1 - tt) * a.y + 2 * (1 - tt) * tt * cpy + tt * tt * b.y;

          const g = ctx!.createRadialGradient(px, py, 0, px, py, p.size * 3);
          g.addColorStop(0, a.color + "80");
          g.addColorStop(1, a.color + "00");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(px, py, p.size * 3, 0, Math.PI * 2);
          ctx!.fill();

          ctx!.fillStyle = a.color + "cc";
          ctx!.beginPath();
          ctx!.arc(px, py, p.size, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // ─── Tag nodes ───
      for (const node of nodes) {
        if (node.type !== "tag") continue;
        const isHl = !hov || hlIds.has(node.id);
        const r = node.radius;
        const isMe = hov && node.id === hov.id;

        if (isHl && hov && !isMe) {
          const g = ctx!.createRadialGradient(node.x, node.y, r * 0.5, node.x, node.y, r * 3);
          g.addColorStop(0, node.color + "30");
          g.addColorStop(1, node.color + "00");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, r * 3, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.beginPath();
        ctx!.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = isHl ? node.color + "55" : node.color + "18";
        ctx!.fill();
        if (isHl) {
          ctx!.strokeStyle = node.color + (isMe ? "ff" : "88");
          ctx!.lineWidth = isMe ? 1.5 : 0.8;
          ctx!.stroke();
        }

        ctx!.beginPath();
        ctx!.arc(node.x, node.y, Math.max(r * 0.45, 1.5), 0, Math.PI * 2);
        ctx!.fillStyle = isHl ? node.color + "dd" : node.color + "44";
        ctx!.fill();

        // Tag label on hover
        if (isMe) {
          ctx!.font = "600 10px system-ui, -apple-system, sans-serif";
          ctx!.textAlign = "center";
          ctx!.textBaseline = "top";
          const text = node.label;
          const tm = ctx!.measureText(text);
          const bw = tm.width + 10, bh = 18;
          const ly = node.y + r + 6;
          ctx!.fillStyle = "rgba(15, 23, 42, 0.85)";
          ctx!.beginPath();
          ctx!.roundRect(node.x - bw / 2, ly - 2, bw, bh, 4);
          ctx!.fill();
          ctx!.strokeStyle = node.color + "44";
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
          ctx!.fillStyle = node.color;
          ctx!.fillText(text, node.x, ly + 1.5);
        }
      }

      // ─── Category nodes (hexagon + icon) ───
      for (const node of nodes) {
        if (node.type !== "category") continue;
        const isHl = !hov || hlIds.has(node.id);
        const r = node.radius;
        const isMe = hov && node.id === hov.id;

        // Outer glow
        if (isHl) {
          const pulse = 1 + Math.sin(t * 1.2 + node.x * 0.01) * 0.12;
          const gr = r * 2.8 * pulse;
          const g = ctx!.createRadialGradient(node.x, node.y, r * 0.5, node.x, node.y, gr);
          g.addColorStop(0, node.color + (isMe ? "35" : "18"));
          g.addColorStop(0.6, node.color + "08");
          g.addColorStop(1, node.color + "00");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, gr, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Hexagon fill
        hexPath(ctx!, node.x, node.y, r);
        ctx!.fillStyle = isHl ? (isMe ? node.color + "30" : node.color + "18") : node.color + "08";
        ctx!.fill();

        // Hexagon border
        hexPath(ctx!, node.x, node.y, r);
        ctx!.strokeStyle = isHl ? node.color + (isMe ? "cc" : "66") : node.color + "22";
        ctx!.lineWidth = isMe ? 2 : 1.2;
        ctx!.stroke();

        // Icon
        if (isHl) {
          ctx!.globalAlpha = isMe ? 1 : 0.7;
          drawCategoryIcon(ctx!, node.icon, node.x, node.y, r * 0.55, node.color, t);
          ctx!.globalAlpha = 1;
        }

        // Label
        if (isHl) {
          ctx!.font = isMe
            ? "bold 12px system-ui, -apple-system, sans-serif"
            : "600 10px system-ui, -apple-system, sans-serif";
          ctx!.textAlign = "center";
          ctx!.textBaseline = "top";
          const text = node.label;
          const ly = node.y + r + 6;
          ctx!.fillStyle = "rgba(15, 23, 42, 0.8)";
          const tm = ctx!.measureText(text);
          const bw = tm.width + 12;
          ctx!.beginPath();
          ctx!.roundRect(node.x - bw / 2, ly - 2, bw, 18, 4);
          ctx!.fill();
          ctx!.fillStyle = isMe ? "#f1f5f9" : node.color;
          ctx!.fillText(text, node.x, ly + 1);
        }
      }
    }

    function animate(time: number) {
      tick();
      draw(time);
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    function getNodeAt(mx: number, my: number): SimNode | null {
      for (const n of nodesRef.current) {
        if (n.type !== "category") continue;
        const dx = mx - n.x, dy = my - n.y;
        if (dx * dx + dy * dy < (n.radius + 6) * (n.radius + 6)) return n;
      }
      for (const n of nodesRef.current) {
        if (n.type !== "tag") continue;
        const dx = mx - n.x, dy = my - n.y;
        const hr = Math.max(n.radius + 4, 10);
        if (dx * dx + dy * dy < hr * hr) return n;
      }
      return null;
    }

    function onMM(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const node = getNodeAt(e.clientX - rect.left, e.clientY - rect.top);
      hoveredRef.current = node;
      setHovered(node);
      canvas!.style.cursor = node ? "pointer" : "default";
    }
    function onClk(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const node = getNodeAt(e.clientX - rect.left, e.clientY - rect.top);
      if (node) window.location.href = node.href;
    }
    function onML() { hoveredRef.current = null; setHovered(null); canvas!.style.cursor = "default"; }
    function onTS(e: TouchEvent) {
      const rect = canvas!.getBoundingClientRect();
      const tc = e.touches[0];
      const node = getNodeAt(tc.clientX - rect.left, tc.clientY - rect.top);
      if (node) { e.preventDefault(); hoveredRef.current = node; setHovered(node); }
    }
    function onTE() {
      if (hoveredRef.current) { window.location.href = hoveredRef.current.href; hoveredRef.current = null; setHovered(null); }
    }

    canvas.addEventListener("mousemove", onMM);
    canvas.addEventListener("click", onClk);
    canvas.addEventListener("mouseleave", onML);
    canvas.addEventListener("touchstart", onTS, { passive: false });
    canvas.addEventListener("touchend", onTE);
    const onRs = () => { resize(); initSim(w, h); };
    window.addEventListener("resize", onRs);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMM);
      canvas.removeEventListener("click", onClk);
      canvas.removeEventListener("mouseleave", onML);
      canvas.removeEventListener("touchstart", onTS);
      canvas.removeEventListener("touchend", onTE);
      window.removeEventListener("resize", onRs);
    };
  }, [data, initSim]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      {hovered && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: hovered.color, boxShadow: `0 0 8px ${hovered.color}66` }}
            />
            <span className="font-semibold text-sm text-white whitespace-nowrap">
              {hovered.label}
            </span>
            <span className="text-xs text-slate-400 whitespace-nowrap">
              {hovered.type === "category" ? `${hovered.weight} nội dung` : `${hovered.weight} liên kết`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}