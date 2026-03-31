import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "storage", "uploads", "2026", "03");

const banners = [
  {
    filename: "django-series-banner-2026.png",
    title: "Django",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#0C4B33", "#44B78B"],
    icon: "Dj",
  },
  {
    filename: "vault-series-banner-2026.png",
    title: "HashiCorp Vault",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#1F2124", "#FFCF25"],
    icon: "HV",
  },
  {
    filename: "flutter-series-banner-2026.png",
    title: "Flutter and Dart",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#0553B1", "#54C5F8"],
    icon: "Fl",
  },
  {
    filename: "golang-series-banner-2026.png",
    title: "Golang",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#00ADD8", "#5DC9E2"],
    icon: "Go",
  },
  {
    filename: "laravel-series-banner-2026.png",
    title: "Laravel",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#EB4432", "#FF6F61"],
    icon: "Lv",
  },
  {
    filename: "react-nextjs-series-banner-2026.png",
    title: "React and Next.js",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#0A1628", "#61DAFB"],
    icon: "Rx",
  },
  {
    filename: "rust-series-banner-2026.png",
    title: "Rust",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#1A1A2E", "#CE422B"],
    icon: "Rs",
  },
  {
    filename: "python-fastapi-series-banner-2026.png",
    title: "Python and FastAPI",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#009688", "#3776AB"],
    icon: "Py",
  },
  {
    filename: "nodejs-core-series-banner-2026.png",
    title: "Node.js Core",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#2E3440", "#68A063"],
    icon: "Nd",
  },
  {
    filename: "vuejs-nuxt-series-banner-2026.png",
    title: "Vue.js and Nuxt",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#1A1A2E", "#42B883"],
    icon: "Vu",
  },
  {
    filename: "nestjs-series-banner-2026.png",
    title: "NestJS",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#1A1A2E", "#E0234E"],
    icon: "Ns",
  },
  {
    filename: "hl7-fhir-series-banner.png",
    title: "HL7 FHIR",
    subtitle: "Chuan Du Lieu Y Te",
    colors: ["#1B365D", "#E87722"],
    icon: "HL",
  },
  {
    filename: "enterprise-ai-chatbot-platform-banner.png",
    title: "Enterprise AI Chatbot",
    subtitle: "Kien Truc Platform",
    colors: ["#1A1A2E", "#7C3AED"],
    icon: "AI",
  },
  {
    filename: "fashion-pod-series-banner.png",
    title: "Fashion Design",
    subtitle: "Print on Demand System",
    colors: ["#831843", "#EC4899"],
    icon: "FD",
  },
  {
    filename: "perftest-pentest-series-banner-2026.png",
    title: "Performance and Pentest",
    subtitle: "Chuan Doanh Nghiep",
    colors: ["#1A1A2E", "#EF4444"],
    icon: "PT",
  },
  {
    filename: "python-series-banner-2026.png",
    title: "Python",
    subtitle: "Tu Co Ban Den Nang Cao",
    colors: ["#306998", "#FFD43B"],
    icon: "Py",
  },
  {
    filename: "ohdsi-omop-cdm-series-banner.png",
    title: "OHDSI &amp; OMOP CDM",
    subtitle: "Phan Tich Du Lieu Y Te Toan Dien",
    colors: ["#1B365D", "#2E86AB"],
    icon: "OH",
  },
  // ─── Architecture series missing banners ───
  {
    filename: "data-platform-analytics-series-banner-2026.png",
    title: "Data Platform &amp; Analytics",
    subtitle: "Kien Truc He Thong",
    colors: ["#1E3A5F", "#4FC3F7"],
    icon: "DP",
  },
  {
    filename: "edtech-lms-platform-series-banner-2026.png",
    title: "EdTech &amp; LMS Platform",
    subtitle: "Kien Truc He Thong",
    colors: ["#1A237E", "#7C4DFF"],
    icon: "LM",
  },
  {
    filename: "event-driven-microservices-series-banner-2026.png",
    title: "Event-Driven Microservices",
    subtitle: "Kien Truc Chuyen Sau",
    colors: ["#1B5E20", "#66BB6A"],
    icon: "ED",
  },
  {
    filename: "fintech-payment-platform-series-banner-2026.png",
    title: "FinTech &amp; Payment",
    subtitle: "Kien Truc Platform",
    colors: ["#0D47A1", "#42A5F5"],
    icon: "FT",
  },
  {
    filename: "multi-tenant-saas-series-banner-2026.png",
    title: "Multi-tenant SaaS",
    subtitle: "Kien Truc Platform",
    colors: ["#4A148C", "#CE93D8"],
    icon: "MT",
  },
  {
    filename: "platform-engineering-series-banner-2026.png",
    title: "Platform Engineering",
    subtitle: "Internal Developer Portal",
    colors: ["#263238", "#78909C"],
    icon: "PE",
  },
  {
    filename: "realtime-iot-platform-series-banner-2026.png",
    title: "Real-time &amp; IoT",
    subtitle: "Kien Truc Platform",
    colors: ["#BF360C", "#FF7043"],
    icon: "RT",
  },
  // ─── Other missing banners ───
  {
    filename: "cloud-native-microservices-series-banner-2026.png",
    title: "Cloud Native Microservices",
    subtitle: "Architecture",
    colors: ["#0D1B2A", "#1B98E0"],
    icon: "CN",
  },
  {
    filename: "vibe-coding-github-copilot-banner.png",
    title: "Vibe Coding",
    subtitle: "voi GitHub Copilot",
    colors: ["#24292E", "#6F42C1"],
    icon: "VC",
  },
];

function generateSVG({ title, subtitle, colors, icon }) {
  const [color1, color2] = colors;
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />
  
  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="200" fill="white" opacity="0.05" />
  <circle cx="1100" cy="530" r="250" fill="white" opacity="0.05" />
  <circle cx="900" cy="80" r="120" fill="white" opacity="0.03" />
  <circle cx="200" cy="500" r="150" fill="white" opacity="0.04" />
  
  <!-- Grid pattern -->
  <g opacity="0.06">
    ${Array.from({ length: 12 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="white" stroke-width="1"/>`).join("\n    ")}
    ${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="1200" y2="${i * 100}" stroke="white" stroke-width="1"/>`).join("\n    ")}
  </g>
  
  <!-- Diagonal decorative lines -->
  <line x1="0" y1="630" x2="400" y2="0" stroke="white" opacity="0.04" stroke-width="2" />
  <line x1="800" y1="630" x2="1200" y2="0" stroke="white" opacity="0.04" stroke-width="2" />
  
  <!-- Content card -->
  <rect x="80" y="160" width="1040" height="310" rx="24" fill="black" opacity="0.25" filter="url(#shadow)" />
  <rect x="80" y="160" width="1040" height="310" rx="24" fill="white" opacity="0.08" />
  
  <!-- Icon -->
  <rect x="530" y="200" width="140" height="70" rx="16" fill="white" opacity="0.15" />
  <text x="600" y="252" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="900" fill="white" opacity="0.9">${icon}</text>
  
  <!-- Title -->
  <text x="600" y="340" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="56" font-weight="900" fill="white" letter-spacing="-1">${title}</text>
  
  <!-- Subtitle -->
  <text x="600" y="400" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="26" fill="white" opacity="0.85" font-weight="500" letter-spacing="2">${subtitle.toUpperCase()}</text>
  
  <!-- Brand -->
  <text x="600" y="560" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" fill="white" opacity="0.5" font-weight="600" letter-spacing="3">XDEV.ASIA</text>
  
  <!-- Top accent line -->
  <rect x="450" y="140" width="300" height="4" rx="2" fill="white" opacity="0.6" />
</svg>`;
}

async function generateBanner(banner) {
  const svg = generateSVG(banner);
  const outputPath = path.join(outputDir, banner.filename);

  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outputPath);

  console.log(`✓ ${banner.filename}`);
}

async function main() {
  console.log(`Generating ${banners.length} banners to ${outputDir}\n`);

  for (const banner of banners) {
    await generateBanner(banner);
  }

  console.log(`\nDone! Generated ${banners.length} banners.`);
}

main().catch(console.error);
