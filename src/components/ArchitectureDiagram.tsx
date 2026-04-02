"use client";

import { useEffect, useRef } from "react";

interface Node {
    id: string;
    label: string;
    x: number; // 0–1 normalized
    y: number;
    w: number;
    h: number;
    color: string;
    glowColor: string;
    group: "client" | "gateway" | "service" | "data";
}

interface Edge {
    from: string;
    to: string;
    color: string;
}

interface Particle {
    edge: number;
    t: number;
    speed: number;
    size: number;
    color: string;
}

const NODES: Node[] = [
    // Client tier
    { id: "web", label: "Web App", x: 0.08, y: 0.15, w: 84, h: 52, color: "#1e3a5f", glowColor: "#3b82f6", group: "client" },
    { id: "mobile", label: "Mobile", x: 0.08, y: 0.55, w: 84, h: 52, color: "#1e3a5f", glowColor: "#3b82f6", group: "client" },

    // Gateway
    { id: "gateway", label: "API Gateway", x: 0.32, y: 0.32, w: 92, h: 52, color: "#2d1b4e", glowColor: "#8b5cf6", group: "gateway" },
    { id: "auth", label: "Auth / IAM", x: 0.32, y: 0.68, w: 88, h: 52, color: "#2d1b4e", glowColor: "#a78bfa", group: "gateway" },

    // Services
    { id: "user-svc", label: "User Svc", x: 0.56, y: 0.10, w: 82, h: 52, color: "#1a3340", glowColor: "#06b6d4", group: "service" },
    { id: "order-svc", label: "Order Svc", x: 0.56, y: 0.40, w: 82, h: 52, color: "#1a3340", glowColor: "#06b6d4", group: "service" },
    { id: "ai-svc", label: "AI Engine", x: 0.56, y: 0.70, w: 82, h: 52, color: "#1a3340", glowColor: "#14b8a6", group: "service" },

    // Data
    { id: "postgres", label: "PostgreSQL", x: 0.82, y: 0.12, w: 86, h: 52, color: "#1c2333", glowColor: "#22d3ee", group: "data" },
    { id: "redis", label: "Redis", x: 0.82, y: 0.42, w: 76, h: 52, color: "#1c2333", glowColor: "#f97316", group: "data" },
    { id: "kafka", label: "Kafka", x: 0.82, y: 0.72, w: 76, h: 52, color: "#1c2333", glowColor: "#a3e635", group: "data" },
];

// ── Cyber icon drawing functions ──
// Each draws a neon wireframe icon centered at (cx, cy) with given size and color.

function drawCyberGlobe(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Outer circle
    ctx.beginPath();
    ctx.arc(cx, cy, s, 0, Math.PI * 2);
    ctx.stroke();
    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(cx - s, cy);
    ctx.lineTo(cx + s, cy);
    ctx.stroke();
    // Vertical ellipse
    ctx.beginPath();
    ctx.ellipse(cx, cy, s * 0.45, s, 0, 0, Math.PI * 2);
    ctx.stroke();
    // Top/bottom arcs (latitude lines)
    ctx.beginPath();
    ctx.ellipse(cx, cy - s * 0.45, s * 0.85, s * 0.2, 0, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx, cy + s * 0.45, s * 0.85, s * 0.2, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
}

function drawCyberPhone(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    const w = s * 0.7, h = s * 1.4;
    const r = 2;
    const x = cx - w, y = cy - h;
    // Phone body
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.lineTo(x + w * 2 - r, y);
    ctx.quadraticCurveTo(x + w * 2, y, x + w * 2, y + r);
    ctx.lineTo(x + w * 2, y + h * 2 - r);
    ctx.quadraticCurveTo(x + w * 2, y + h * 2, x + w * 2 - r, y + h * 2);
    ctx.lineTo(x + r, y + h * 2);
    ctx.quadraticCurveTo(x, y + h * 2, x, y + h * 2 - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.stroke();
    // Screen line
    ctx.beginPath();
    ctx.moveTo(x + 2, y + h * 0.3);
    ctx.lineTo(x + w * 2 - 2, y + h * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + 2, y + h * 1.7);
    ctx.lineTo(x + w * 2 - 2, y + h * 1.7);
    ctx.stroke();
    // Signal dot
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, y + h * 0.15, 1, 0, Math.PI * 2);
    ctx.fill();
}

function drawCyberRouter(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Center hexagon
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = cx + s * 0.6 * Math.cos(a);
        const py = cy + s * 0.6 * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    // Arrows radiating out
    const dirs = [0, Math.PI * 0.66, -Math.PI * 0.66];
    for (const a of dirs) {
        const ex = cx + s * Math.cos(a);
        const ey = cy + s * Math.sin(a);
        ctx.beginPath();
        ctx.moveTo(cx + s * 0.55 * Math.cos(a), cy + s * 0.55 * Math.sin(a));
        ctx.lineTo(ex, ey);
        ctx.stroke();
        // Arrow tips
        const tipLen = s * 0.25;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex - tipLen * Math.cos(a - 0.4), ey - tipLen * Math.sin(a - 0.4));
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex - tipLen * Math.cos(a + 0.4), ey - tipLen * Math.sin(a + 0.4));
        ctx.stroke();
    }
}

function drawCyberShield(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Shield shape
    ctx.beginPath();
    ctx.moveTo(cx, cy - s);
    ctx.lineTo(cx + s * 0.85, cy - s * 0.55);
    ctx.lineTo(cx + s * 0.7, cy + s * 0.4);
    ctx.lineTo(cx, cy + s);
    ctx.lineTo(cx - s * 0.7, cy + s * 0.4);
    ctx.lineTo(cx - s * 0.85, cy - s * 0.55);
    ctx.closePath();
    ctx.stroke();
    // Keyhole
    ctx.beginPath();
    ctx.arc(cx, cy - s * 0.15, s * 0.2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.08, cy + s * 0.05);
    ctx.lineTo(cx, cy + s * 0.45);
    ctx.lineTo(cx + s * 0.08, cy + s * 0.05);
    ctx.stroke();
}

function drawCyberUser(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Head
    ctx.beginPath();
    ctx.arc(cx, cy - s * 0.4, s * 0.38, 0, Math.PI * 2);
    ctx.stroke();
    // Body arc
    ctx.beginPath();
    ctx.ellipse(cx, cy + s * 0.9, s * 0.65, s * 0.55, 0, Math.PI + 0.3, -0.3);
    ctx.stroke();
    // Scan line (cyber effect)
    ctx.strokeStyle = color + "60";
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.5, cy - s * 0.15);
    ctx.lineTo(cx + s * 0.5, cy - s * 0.15);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = color;
}

function drawCyberCube(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    const d = s * 0.7;
    const off = s * 0.35;
    // Front face
    ctx.strokeRect(cx - d, cy - d + off, d * 2, d * 2);
    // Back face offset
    ctx.strokeRect(cx - d + off, cy - d, d * 2, d * 2);
    // Connect corners
    ctx.beginPath();
    ctx.moveTo(cx - d, cy - d + off); ctx.lineTo(cx - d + off, cy - d);
    ctx.moveTo(cx + d, cy - d + off); ctx.lineTo(cx + d + off, cy - d);
    ctx.moveTo(cx - d, cy + d + off); ctx.lineTo(cx - d + off, cy + d);
    ctx.moveTo(cx + d, cy + d + off); ctx.lineTo(cx + d + off, cy + d);
    ctx.stroke();
}

function drawCyberBrain(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string, time: number) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Brain outline (two hemispheres)
    ctx.beginPath();
    ctx.arc(cx - s * 0.2, cy, s * 0.65, Math.PI * 0.5, Math.PI * 1.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx + s * 0.2, cy, s * 0.65, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.stroke();
    // Center divider
    ctx.beginPath();
    ctx.moveTo(cx, cy - s * 0.65);
    ctx.lineTo(cx, cy + s * 0.65);
    ctx.stroke();
    // 3 circuit nodes inside, pulsing
    const pulse = 0.5 + 0.5 * Math.sin(time * 0.004);
    ctx.fillStyle = color;
    const nodes: [number, number][] = [
        [cx - s * 0.25, cy - s * 0.15],
        [cx + s * 0.25, cy],
        [cx - s * 0.1, cy + s * 0.25],
    ];
    for (const [nx, ny] of nodes) {
        ctx.beginPath();
        ctx.arc(nx, ny, 1.5 + pulse, 0, Math.PI * 2);
        ctx.fill();
    }
    // Connect circuit nodes
    ctx.strokeStyle = color + "80";
    ctx.beginPath();
    ctx.moveTo(nodes[0][0], nodes[0][1]);
    ctx.lineTo(nodes[1][0], nodes[1][1]);
    ctx.lineTo(nodes[2][0], nodes[2][1]);
    ctx.stroke();
    ctx.strokeStyle = color;
}

function drawCyberDB(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    const w = s * 0.85, h = s * 0.85;
    // Top ellipse
    ctx.beginPath();
    ctx.ellipse(cx, cy - h, w, s * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    // Sides
    ctx.beginPath();
    ctx.moveTo(cx - w, cy - h);
    ctx.lineTo(cx - w, cy + h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + w, cy - h);
    ctx.lineTo(cx + w, cy + h);
    ctx.stroke();
    // Bottom ellipse
    ctx.beginPath();
    ctx.ellipse(cx, cy + h, w, s * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    // Middle shelf
    ctx.beginPath();
    ctx.ellipse(cx, cy, w, s * 0.25, 0, 0, Math.PI);
    ctx.stroke();
}

function drawCyberBolt(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color + "30";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.15, cy - s);
    ctx.lineTo(cx - s * 0.5, cy + s * 0.05);
    ctx.lineTo(cx + s * 0.05, cy + s * 0.05);
    ctx.lineTo(cx - s * 0.15, cy + s);
    ctx.lineTo(cx + s * 0.5, cy - s * 0.05);
    ctx.lineTo(cx - s * 0.05, cy - s * 0.05);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawCyberStream(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, color: string, time: number) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    // Three flowing wave lines (step by 3px instead of 1px)
    for (let i = -1; i <= 1; i++) {
        const yOff = i * s * 0.45;
        const phase = time * 0.003 + i * 0.8;
        ctx.beginPath();
        for (let x = -s; x <= s; x += 3) {
            const y = cy + yOff + Math.sin((x / s) * Math.PI * 2 + phase) * s * 0.18;
            x === -s ? ctx.moveTo(cx + x, y) : ctx.lineTo(cx + x, y);
        }
        ctx.stroke();
    }
    // Arrow tip at end
    ctx.beginPath();
    ctx.moveTo(cx + s, cy - s * 0.25);
    ctx.lineTo(cx + s * 1.15, cy);
    ctx.lineTo(cx + s, cy + s * 0.25);
    ctx.stroke();
}

function drawCyberIcon(ctx: CanvasRenderingContext2D, nodeId: string, cx: number, cy: number, s: number, color: string, time: number) {
    switch (nodeId) {
        case "web": drawCyberGlobe(ctx, cx, cy, s, color); break;
        case "mobile": drawCyberPhone(ctx, cx, cy, s, color); break;
        case "gateway": drawCyberRouter(ctx, cx, cy, s, color); break;
        case "auth": drawCyberShield(ctx, cx, cy, s, color); break;
        case "user-svc": drawCyberUser(ctx, cx, cy, s, color); break;
        case "order-svc": drawCyberCube(ctx, cx, cy, s, color); break;
        case "ai-svc": drawCyberBrain(ctx, cx, cy, s * 1.05, color, time); break;
        case "postgres": drawCyberDB(ctx, cx, cy, s, color); break;
        case "redis": drawCyberBolt(ctx, cx, cy, s, color); break;
        case "kafka": drawCyberStream(ctx, cx, cy, s, color, time); break;
    }
}

const EDGES: Edge[] = [
    { from: "web", to: "gateway", color: "#3b82f6" },
    { from: "mobile", to: "gateway", color: "#3b82f6" },
    { from: "gateway", to: "auth", color: "#8b5cf6" },
    { from: "gateway", to: "user-svc", color: "#8b5cf6" },
    { from: "gateway", to: "order-svc", color: "#8b5cf6" },
    { from: "gateway", to: "ai-svc", color: "#8b5cf6" },
    { from: "user-svc", to: "postgres", color: "#06b6d4" },
    { from: "order-svc", to: "redis", color: "#f97316" },
    { from: "order-svc", to: "kafka", color: "#a3e635" },
    { from: "ai-svc", to: "kafka", color: "#14b8a6" },
    { from: "ai-svc", to: "redis", color: "#14b8a6" },
    { from: "auth", to: "redis", color: "#a78bfa" },
];

// Pre-build node lookup for O(1) access
const NODE_MAP = new Map(NODES.map(n => [n.id, n]));

// Pre-build edge node pairs
const EDGE_PAIRS = EDGES.map(e => ({
    ...e,
    fromNode: NODE_MAP.get(e.from)!,
    toNode: NODE_MAP.get(e.to)!,
}));

// Pre-build adjacency: which edges connect to which node
const NODE_EDGES = new Map<string, number[]>();
for (const n of NODES) NODE_EDGES.set(n.id, []);
for (let i = 0; i < EDGES.length; i++) {
    NODE_EDGES.get(EDGES[i].from)!.push(i);
    NODE_EDGES.get(EDGES[i].to)!.push(i);
}

export default function ArchitectureDiagram({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosRef = useRef({ x: 0.5, y: 0.5 });
    const mouseCanvasRef = useRef({ x: 0, y: 0 }); // pixel coords on canvas
    const hoveredNodeRef = useRef<string | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animRef = useRef<number>(0);
    // Cache node centers after resize
    const nodeCentersRef = useRef<Map<string, [number, number]>>(new Map());

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let w = 0, h = 0;
        const dpr = Math.min(window.devicePixelRatio, 2);

        function computeNodeCenters() {
            const m = nodeCentersRef.current;
            m.clear();
            for (const n of NODES) {
                m.set(n.id, [n.x * w + n.w / 2, n.y * h + n.h / 2]);
            }
        }

        function resize() {
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w * dpr;
            canvas!.height = h * dpr;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
            computeNodeCenters();
        }

        function initParticles() {
            particlesRef.current = [];
            for (let i = 0; i < EDGES.length; i++) {
                // 2 particles per edge (reduced from 2-3)
                for (let j = 0; j < 2; j++) {
                    particlesRef.current.push({
                        edge: i,
                        t: Math.random(),
                        speed: 0.003 + Math.random() * 0.003,
                        size: 1.5 + Math.random() * 1,
                        color: EDGES[i].color,
                    });
                }
            }
        }

        function getEdgePoint(edgeIdx: number, t: number): [number, number] {
            const ep = EDGE_PAIRS[edgeIdx];
            const c = nodeCentersRef.current;
            const [x1, y1] = c.get(ep.from)!;
            const [x2, y2] = c.get(ep.to)!;
            const cx2 = (x1 + x2) / 2 + (y2 - y1) * 0.15;
            const cy2 = (y1 + y2) / 2 + (x1 - x2) * 0.1;
            const u = 1 - t;
            return [
                u * u * x1 + 2 * u * t * cx2 + t * t * x2,
                u * u * y1 + 2 * u * t * cy2 + t * t * y2,
            ];
        }

        function hitTestNodes(canvasX: number, canvasY: number): string | null {
            // Account for parallax offset
            const mx = mousePosRef.current.x;
            const my = mousePosRef.current.y;
            const px = (mx - 0.5) * 8;
            const py = (my - 0.5) * 6;
            const testX = canvasX - px;
            const testY = canvasY - py;
            for (const n of NODES) {
                const nx = n.x * w;
                const ny = n.y * h;
                if (testX >= nx && testX <= nx + n.w && testY >= ny && testY <= ny + n.h) {
                    return n.id;
                }
            }
            return null;
        }

        function draw(time: number) {
            ctx!.clearRect(0, 0, w, h);
            const mx = mousePosRef.current.x;
            const my = mousePosRef.current.y;
            const hovered = hoveredNodeRef.current;
            // Connected nodes for hover highlight
            const connectedNodes = new Set<string>();
            const connectedEdges = new Set<number>();
            if (hovered) {
                connectedNodes.add(hovered);
                const edgeIdxs = NODE_EDGES.get(hovered)!;
                for (const ei of edgeIdxs) {
                    connectedEdges.add(ei);
                    connectedNodes.add(EDGES[ei].from);
                    connectedNodes.add(EDGES[ei].to);
                }
            }

            const px = (mx - 0.5) * 8;
            const py = (my - 0.5) * 6;

            ctx!.save();
            ctx!.translate(px, py);

            const c = nodeCentersRef.current;

            // ── Edges ──
            const dashOffset = -(time * 0.02) % 20;
            for (let i = 0; i < EDGE_PAIRS.length; i++) {
                const ep = EDGE_PAIRS[i];
                const [x1, y1] = c.get(ep.from)!;
                const [x2, y2] = c.get(ep.to)!;
                const cx2 = (x1 + x2) / 2 + (y2 - y1) * 0.15;
                const cy2 = (y1 + y2) / 2 + (x1 - x2) * 0.1;

                const isHighlighted = hovered && connectedEdges.has(i);
                const isDimmed = hovered && !connectedEdges.has(i);

                ctx!.beginPath();
                ctx!.moveTo(x1, y1);
                ctx!.quadraticCurveTo(cx2, cy2, x2, y2);
                ctx!.strokeStyle = isDimmed ? ep.color + "10" : isHighlighted ? ep.color + "80" : ep.color + "30";
                ctx!.lineWidth = isHighlighted ? 1.5 : 1;
                ctx!.setLineDash([4, 6]);
                ctx!.lineDashOffset = dashOffset;
                ctx!.stroke();
                ctx!.setLineDash([]);
            }

            // ── Flow particles (no gradient — use solid dots + slightly bigger halo) ──
            for (const p of particlesRef.current) {
                p.t += p.speed;
                if (p.t > 1) p.t -= 1;
                const [fp_x, fp_y] = getEdgePoint(p.edge, p.t);

                const isDimmed = hovered && !connectedEdges.has(p.edge);

                // Halo (simple filled circle with low opacity, no gradient)
                ctx!.beginPath();
                ctx!.arc(fp_x, fp_y, p.size * 3, 0, Math.PI * 2);
                ctx!.fillStyle = isDimmed ? p.color + "08" : p.color + "25";
                ctx!.fill();

                // Core dot
                ctx!.beginPath();
                ctx!.arc(fp_x, fp_y, p.size, 0, Math.PI * 2);
                ctx!.fillStyle = isDimmed ? p.color + "40" : p.color + "cc";
                ctx!.fill();
            }

            // ── Nodes ──
            const pulse = 0.5 + 0.5 * Math.sin(time * 0.002);

            for (const node of NODES) {
                const nx = node.x * w;
                const ny = node.y * h;
                const [centerX, centerY] = c.get(node.id)!;
                const isHovered = hovered === node.id;
                const isConnected = hovered ? connectedNodes.has(node.id) : true;
                const isDimmed = hovered && !isConnected;
                const nodeAlpha = isDimmed ? "40" : "e0";

                // Glow behind node (only for hovered/connected, skip for dimmed)
                if (!isDimmed) {
                    const glowRadius = Math.max(node.w, node.h) * (isHovered ? 1.2 : 0.7);
                    const glowAlpha = isHovered
                        ? Math.round(50 + pulse * 25).toString(16).padStart(2, "0")
                        : Math.round(15 + pulse * 10).toString(16).padStart(2, "0");
                    const glow = ctx!.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
                    glow.addColorStop(0, node.glowColor + glowAlpha);
                    glow.addColorStop(1, node.glowColor + "00");
                    ctx!.fillStyle = glow;
                    ctx!.fillRect(centerX - glowRadius, centerY - glowRadius, glowRadius * 2, glowRadius * 2);
                }

                // Scale up hovered node slightly
                const scale = isHovered ? 1.08 : 1;
                const nw = node.w * scale;
                const nh = node.h * scale;
                const nnx = centerX - nw / 2;
                const nny = centerY - nh / 2;

                // Node box
                ctx!.beginPath();
                const r = 6;
                ctx!.moveTo(nnx + r, nny);
                ctx!.lineTo(nnx + nw - r, nny);
                ctx!.quadraticCurveTo(nnx + nw, nny, nnx + nw, nny + r);
                ctx!.lineTo(nnx + nw, nny + nh - r);
                ctx!.quadraticCurveTo(nnx + nw, nny + nh, nnx + nw - r, nny + nh);
                ctx!.lineTo(nnx + r, nny + nh);
                ctx!.quadraticCurveTo(nnx, nny + nh, nnx, nny + nh - r);
                ctx!.lineTo(nnx, nny + r);
                ctx!.quadraticCurveTo(nnx, nny, nnx + r, nny);
                ctx!.closePath();
                ctx!.fillStyle = node.color + nodeAlpha;
                ctx!.fill();
                ctx!.strokeStyle = node.glowColor + (isHovered ? "90" : isDimmed ? "15" : "40");
                ctx!.lineWidth = isHovered ? 1.5 : 1;
                ctx!.stroke();

                // Cyber icon (no shadowBlur — just draw)
                const iconSize = 7 * scale;
                const iconY = centerY - 7 * scale;
                const iconColor = isDimmed ? node.glowColor + "50" : node.glowColor;
                drawCyberIcon(ctx!, node.id, centerX, iconY, iconSize, iconColor, time);

                // Label
                ctx!.font = `${10 * scale}px 'JetBrains Mono','Fira Code','SF Mono',monospace`;
                ctx!.fillStyle = isDimmed ? "#c8d6e540" : isHovered ? "#ffffff" : "#c8d6e5";
                ctx!.textAlign = "center";
                ctx!.textBaseline = "top";
                ctx!.fillText(node.label, centerX, centerY + 6 * scale, nw - 8);
            }

            // ── Group labels ──
            ctx!.font = "bold 8px 'JetBrains Mono','Fira Code',monospace";
            ctx!.textAlign = "center";
            ctx!.fillStyle = "#475569";
            ctx!.fillText("CLIENTS", 0.08 * w + 42, 0.03 * h);
            ctx!.fillStyle = "#6b21a8";
            ctx!.fillText("GATEWAY", 0.32 * w + 46, 0.03 * h);
            ctx!.fillStyle = "#0e7490";
            ctx!.fillText("SERVICES", 0.56 * w + 41, 0.03 * h);
            ctx!.fillStyle = "#475569";
            ctx!.fillText("DATA LAYER", 0.82 * w + 38, 0.03 * h);

            ctx!.restore();
            animRef.current = requestAnimationFrame(draw);
        }

        const onMove = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            const rx = (e.clientX - rect.left) / rect.width;
            const ry = (e.clientY - rect.top) / rect.height;
            mousePosRef.current = { x: rx, y: ry };
            // Hit test for hover (in CSS pixels)
            mouseCanvasRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            const hit = hitTestNodes(mouseCanvasRef.current.x, mouseCanvasRef.current.y);
            hoveredNodeRef.current = hit;
            canvas!.style.cursor = hit ? "pointer" : "";
        };

        const onLeave = () => {
            hoveredNodeRef.current = null;
            canvas!.style.cursor = "";
        };

        resize();
        initParticles();
        animRef.current = requestAnimationFrame(draw);

        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", onMove, { passive: true });
        canvas.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full ${className}`}
            aria-hidden="true"
        />
    );
}
