import { IconPlug } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MCP Server — xDev Knowledge Base | xDev.asia",
    description:
        "Kết nối AI với toàn bộ kiến thức xDev.asia qua Model Context Protocol (MCP). 16 tools, 62 series, 1231 lessons — sẵn sàng cho Claude, Cursor, VS Code Copilot.",
    keywords: ["MCP", "Model Context Protocol", "AI", "Claude", "xDev", "knowledge base"],
};

const knowledgeTools = [
    { name: "search_xdev_knowledge", desc: "Tìm kiếm toàn bộ knowledge base — series, blog", icon: "🔍" },
    { name: "list_series", desc: "Liệt kê 62 series, lọc theo 4 categories", icon: "📚" },
    { name: "list_lessons", desc: "Xem danh sách bài học trong bất kỳ series nào", icon: "📄" },
    { name: "read_series", desc: "Đọc overview & mục lục series", icon: "📖" },
    { name: "read_lesson", desc: "Đọc nội dung chi tiết từng bài học", icon: "📝" },
    { name: "list_blog_posts", desc: "Duyệt blog posts theo 8 chủ đề", icon: "✍️" },
    { name: "read_content", desc: "Đọc bất kỳ file markdown nào", icon: "📂" },
    { name: "xdev_stats", desc: "Thống kê tổng quan nội dung", icon: "📊" },
];

const securityTools = [
    { name: "hipaa_compliance_check", desc: "Kiểm tra HIPAA Technical Safeguards compliance", icon: "✅" },
    { name: "generate_security_config", desc: "Sinh config bảo mật cho PostgreSQL, Keycloak, K8s, Nginx", icon: "⚙️" },
    { name: "threat_model_stride", desc: "Phân tích 6 loại STRIDE threats", icon: "🎯" },
    { name: "calculate_dread_score", desc: "Tính điểm DREAD đánh giá mức độ nghiêm trọng", icon: "📐" },
    { name: "classify_phi_data", desc: "Phân loại PHI/ePHI/PII theo 18 HIPAA identifiers", icon: "🏷️" },
    { name: "generate_rls_policy", desc: "Sinh PostgreSQL Row-Level Security policies", icon: "🔒" },
    { name: "security_audit_checklist", desc: "Tạo checklist kiểm tra bảo mật hệ thống", icon: "📋" },
];

/* Inline SVG icons for MCP clients — no broken external images */
function ClaudeIcon() {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M16.009 8.864L11.747 19.5h-1.905L5.547 8.864h2.11l3.036 7.98 3.139-7.98h2.177z" fill="currentColor" />
            <path d="M18.453 8.864L14.191 19.5h-1.905l-.746-1.95 3.09-8.686h3.823z" fill="currentColor" opacity={0.5} />
        </svg>
    );
}
function VSCodeIcon() {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M17.583 3.006L13.5 6.5 8.458 2.87 2 5.8v12.4l6.458 2.93L13.5 17.5l4.083 3.494L22 18.6V5.4l-4.417-2.394zM8.5 15.35V8.65L13.5 12l-5 3.35zM17.5 18l-3-2.5V8.5l3-2.5v12z" fill="#007ACC" />
        </svg>
    );
}
function CursorIcon() {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <rect x={3} y={3} width={18} height={18} rx={4} fill="currentColor" />
            <path d="M8 8l8 4-8 4V8z" fill="var(--color-zinc-50, white)" />
        </svg>
    );
}
function WindsurfIcon() {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M4 18c2-4 4.5-6 8-6s6 2 8 6" stroke="#09B6A2" strokeWidth={2} strokeLinecap="round" />
            <path d="M4 13c2-4 4.5-6 8-6s6 2 8 6" stroke="#09B6A2" strokeWidth={2} strokeLinecap="round" opacity={0.6} />
            <path d="M4 8c2-4 4.5-6 8-6s6 2 8 6" stroke="#09B6A2" strokeWidth={2} strokeLinecap="round" opacity={0.3} />
        </svg>
    );
}

const clients = [
    { name: "Claude Desktop", icon: <ClaudeIcon />, setup: "claude_desktop_config.json" },
    { name: "VS Code Copilot", icon: <VSCodeIcon />, setup: ".vscode/mcp.json" },
    { name: "Cursor", icon: <CursorIcon />, setup: ".cursor/mcp.json" },
    { name: "Windsurf", icon: <WindsurfIcon />, setup: "~/.codeium/windsurf/mcp_config.json" },
];

export default function MCPPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-zinc-900 via-indigo-950 to-zinc-900 text-white py-20 md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Model Context Protocol
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
                        <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            xDev Knowledge
                        </span>
                        <br />
                        MCP Server
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Biến AI assistant thành chuyên gia xDev —{" "}
                        <strong className="text-white">62 series, 1.231 bài học</strong> về AI, Architecture, DevSecOps và Lập trình, truy cập trực tiếp qua MCP.
                    </p>

                    {/* Install command */}
                    <div className="max-w-xl mx-auto mb-10">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-zinc-900 border border-zinc-700 rounded-xl p-4 font-mono text-sm">
                                <span className="text-zinc-500">$</span>{" "}
                                <span className="text-emerald-400">npx</span>{" "}
                                <span className="text-blue-300">@xdev-asia/xdev-knowledge-mcp</span>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-xs mt-2">
                            npm: <a href="https://www.npmjs.com/package/@xdev-asia/xdev-knowledge-mcp" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@xdev-asia/xdev-knowledge-mcp</a>{" "}
                            · GitHub: <a href="https://github.com/xdev-asia/xdev.asia/tree/main/mcp-server" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">xdev-asia/xdev.asia</a>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                        {[
                            { label: "Tools", value: "16", icon: "🔧" },
                            { label: "Series", value: "62", icon: "📚" },
                            { label: "Lessons", value: "1.231", icon: "📄" },
                            { label: "Categories", value: "4", icon: "📁" },
                        ].map((s) => (
                            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold">{s.value}</div>
                                <div className="text-xs text-zinc-400 mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Setup */}
            <section className="py-16 md:py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            Cài đặt trong <span className="gradient-text">30 giây</span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">Hoạt động với mọi MCP client phổ biến</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {clients.map((client) => (
                            <div key={client.name} className="group border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-zinc-700 dark:text-zinc-200">{client.icon}</span>
                                    <h3 className="font-semibold text-zinc-900 dark:text-white">{client.name}</h3>
                                </div>
                                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3 font-mono text-xs leading-relaxed overflow-x-auto">
                                    <div className="text-zinc-500">// {client.setup}</div>
                                    <div>{"{"}</div>
                                    <div className="pl-4"><span className="text-indigo-600 dark:text-indigo-400">{`"mcpServers"`}</span>: {"{"}</div>
                                    <div className="pl-8"><span className="text-indigo-600 dark:text-indigo-400">{`"xdev-knowledge"`}</span>: {"{"}</div>
                                    <div className="pl-12"><span className="text-emerald-600 dark:text-emerald-400">{`"command"`}</span>: <span className="text-amber-600 dark:text-amber-400">{`"npx"`}</span>,</div>
                                    <div className="pl-12"><span className="text-emerald-600 dark:text-emerald-400">{`"args"`}</span>: [<span className="text-amber-600 dark:text-amber-400">{`"@xdev-asia/xdev-knowledge-mcp"`}</span>]</div>
                                    <div className="pl-8">{"}"}</div>
                                    <div className="pl-4">{"}"}</div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How MCP Works — Architecture Flow */}
            <section className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            Cách MCP hoạt động
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">AI assistant giao tiếp với knowledge base qua Model Context Protocol</p>
                    </div>

                    {/* Flow Diagram */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            {/* User */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-3xl mb-2">👤</div>
                                <div className="font-semibold text-sm text-zinc-900 dark:text-white">Bạn</div>
                                <div className="text-xs text-zinc-500 mt-0.5">Hỏi bằng ngôn ngữ tự nhiên</div>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
                                    <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-600" />
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                            <div className="flex md:hidden items-center justify-center py-1">
                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" className="text-zinc-400 rotate-90"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>

                            {/* AI Client */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-3xl mb-2">🤖</div>
                                <div className="font-semibold text-sm text-zinc-900 dark:text-white">AI Client</div>
                                <div className="text-xs text-zinc-500 mt-0.5">Claude · Copilot · Cursor</div>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="flex items-center gap-1 text-emerald-500">
                                    <div className="w-4 h-px bg-emerald-400" />
                                    <div className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">MCP</div>
                                    <div className="w-4 h-px bg-emerald-400" />
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                            <div className="flex md:hidden items-center justify-center py-1">
                                <div className="flex flex-col items-center gap-1 text-emerald-500">
                                    <div className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">MCP Protocol</div>
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" className="rotate-90"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>

                            {/* MCP Server */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-2">
                                    <IconPlug size={28} />
                                </div>
                                <div className="font-semibold text-sm text-zinc-900 dark:text-white">xDev MCP Server</div>
                                <div className="text-xs text-zinc-500 mt-0.5">16 tools · 62 series</div>
                            </div>
                        </div>

                        {/* Content Sources (below the server) */}
                        <div className="mt-8 flex justify-center">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
                                {[
                                    { icon: "📚", label: "62 Series" },
                                    { icon: "📄", label: "1.231 Lessons" },
                                    { icon: "✍️", label: "15 Blog Posts" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                        <span>{item.icon}</span> {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Tools */}
            <section className="py-16 md:py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            📚 9 Knowledge Tools
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">Đọc, tìm kiếm, duyệt toàn bộ nội dung xDev.asia — ngay trong AI chat</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {knowledgeTools.map((tool) => (
                            <div key={tool.name} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">{tool.icon}</span>
                                    <div className="min-w-0">
                                        <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-white truncate">{tool.name}</div>
                                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{tool.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Tools */}
            <section className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            🔐 7 Security & Compliance Tools
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            Kiểm tra HIPAA, phân tích threats, sinh security config — tự động hóa bảo mật
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {securityTools.map((tool) => (
                            <div key={tool.name} className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">{tool.icon}</span>
                                    <div className="min-w-0">
                                        <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-white truncate">{tool.name}</div>
                                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{tool.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Coverage */}
            <section className="py-16 md:py-20 bg-white dark:bg-zinc-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            Bao phủ toàn bộ <span className="gradient-text">xDev.asia</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { cat: "🤖 AI & ML", count: "25 series · 321 lessons", topics: "Machine Learning, Deep Learning, LLM, RAG, Fine-tuning, MLOps, Computer Vision" },
                            { cat: "🏗️ Architecture", count: "15 series · 368 lessons", topics: "Microservices, System Design, PostgreSQL HA, Event-Driven, CQRS, API Gateway" },
                            { cat: "🔐 DevSecOps", count: "9 series · 266 lessons", topics: "HIPAA, Kubernetes Security, Docker, CI/CD, Infrastructure as Code" },
                            { cat: "💻 Lập trình", count: "13 series · 276 lessons", topics: "Spring Boot, Quarkus, Go, React, TypeScript, DSA, Clean Code" },
                        ].map((cat) => (
                            <div key={cat.cat} className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-zinc-200 dark:border-zinc-700">
                                <div className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">{cat.cat}</div>
                                <div className="text-sm font-semibold text-brand-600 mb-2">{cat.count}</div>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{cat.topics}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prompts */}
            <section className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
                            💬 Prompt Templates
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400">Prompt được thiết kế sẵn — chỉ cần chọn và chạy</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { name: "security_review", desc: "Review code cho healthcare security issues — kiểm tra SQL injection, XSS, HIPAA violations" },
                            { name: "hipaa_assessment", desc: "Đánh giá toàn diện HIPAA compliance cho hệ thống — checklist 45 CFR §164.312" },
                            { name: "threat_analysis", desc: "Phân tích STRIDE/DREAD threats cho microservices architecture" },
                            { name: "database_security_design", desc: "Thiết kế database security: RLS policies, encryption, audit logging" },
                        ].map((prompt) => (
                            <div key={prompt.name} className="flex gap-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4">
                                <span className="text-2xl shrink-0">💬</span>
                                <div>
                                    <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">{prompt.name}</div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{prompt.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-linear-to-br from-indigo-600 to-blue-700 text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                        <IconPlug size={28} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Thử ngay — miễn phí, mã nguồn mở</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Một dòng lệnh, AI của bạn sẽ hiểu Kubernetes, Machine Learning, HIPAA, System Design — và 1.231 bài học khác.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://www.npmjs.com/package/@xdev-asia/xdev-knowledge-mcp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
                        >
                            📦 npm package
                        </a>
                        <a
                            href="https://github.com/xdev-asia/xdev.asia/tree/main/mcp-server"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 font-semibold rounded-xl hover:bg-white/20 transition-colors"
                        >
                            GitHub Source
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
