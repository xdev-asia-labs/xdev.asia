import KnowledgeGraph from "@/components/KnowledgeGraph";
import { buildKnowledgeGraph } from "@/lib/graph";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bản đồ tri thức",
  description:
    "Khám phá mối liên kết giữa các chủ đề lập trình, AI, DevOps, kiến trúc hệ thống và công nghệ tại xDev Asia.",
  openGraph: {
    title: "Bản đồ tri thức — xDev Asia",
    description:
      "Knowledge graph tương tác hiển thị mối liên kết giữa các chủ đề công nghệ.",
  },
};

export default function KnowledgeGraphPage() {
  const graphData = buildKnowledgeGraph();

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-64px)] bg-[#0a0e1a]">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.1),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(6,182,212,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-screen-2xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Trang chủ
          </Link>
          <span className="text-slate-700">/</span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
            <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2" />
              <circle cx="5" cy="6" r="1.5" />
              <circle cx="19" cy="6" r="1.5" />
              <circle cx="5" cy="18" r="1.5" />
              <circle cx="19" cy="18" r="1.5" />
              <line x1="12" y1="10" x2="5" y2="7.5" />
              <line x1="12" y1="10" x2="19" y2="7.5" />
              <line x1="12" y1="14" x2="5" y2="16.5" />
              <line x1="12" y1="14" x2="19" y2="16.5" />
            </svg>
            Knowledge Graph
          </div>
        </div>
        <div className="text-xs text-slate-500">
          <span className="hidden sm:inline">Click vào node để khám phá · </span>
          {graphData.nodes.length} chủ đề · {graphData.edges.length} liên kết
        </div>
      </div>

      {/* Full graph canvas */}
      <div className="relative z-10 flex-1 px-2 sm:px-4 pb-4">
        <div className="h-full rounded-2xl border border-white/6 bg-[#0d1117] overflow-hidden shadow-2xl shadow-black/40">
          <KnowledgeGraph data={graphData} className="h-full min-h-[calc(100vh-140px)]" />
        </div>
      </div>
    </div>
  );
}
