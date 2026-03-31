import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(
  __dirname,
  "..",
  "public",
  "storage",
  "uploads",
  "2026",
  "03"
);

// ─── Color palette ───
const COLORS = {
  navy: "#1B365D",
  blue: "#2E86AB",
  teal: "#0E9AA7",
  green: "#3DA35D",
  orange: "#E87722",
  red: "#E63946",
  purple: "#6C63FF",
  pink: "#F72585",
  dark: "#0F1923",
  white: "#FFFFFF",
  gray: "#94A3B8",
  lightBg: "#F1F5F9",
};

// ─── Helper: rounded rect ───
function roundedRect(x, y, w, h, r, fill, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" opacity="${opacity}" />`;
}

// ─── Helper: text element ───
function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function text(x, y, content, opts = {}) {
  const {
    size = 16,
    fill = COLORS.white,
    anchor = "middle",
    weight = "600",
    opacity = 1,
  } = opts;
  const safe = escapeXml(content);
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="system-ui, -apple-system, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" opacity="${opacity}">${safe}</text>`;
}

// ─── Helper: arrow line ───
function arrow(x1, y1, x2, y2, color = COLORS.white, opacity = 0.8) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5" opacity="${opacity}" marker-end="url(#arrowhead)" />`;
}

// ─── Helper: dashed line ───
function dashedLine(x1, y1, x2, y2, color = COLORS.gray) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6" />`;
}

// ─── Helper: icon box ───
function iconBox(x, y, w, h, label, color, textColor = COLORS.white) {
  return `
    ${roundedRect(x, y, w, h, 10, color)}
    ${text(x + w / 2, y + h / 2 + 6, label, { size: 14, fill: textColor, weight: "700" })}
  `;
}

// ─── Common SVG wrapper ───
function wrapSVG(content, title, subtitle, gradient = [COLORS.dark, COLORS.navy]) {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradient[0]}" />
      <stop offset="100%" style="stop-color:${gradient[1]}" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${COLORS.white}" opacity="0.8" />
    </marker>
    <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${COLORS.orange}" opacity="0.8" />
    </marker>
    <filter id="shadow">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-opacity="0.25"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <!-- Subtle grid -->
  <g opacity="0.04">
    ${Array.from({ length: 13 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="white" stroke-width="1"/>`).join("\n")}
    ${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="1200" y2="${i * 100}" stroke="white" stroke-width="1"/>`).join("\n")}
  </g>
  <!-- Decorative circles -->
  <circle cx="1100" cy="80" r="120" fill="white" opacity="0.03" />
  <circle cx="100" cy="550" r="150" fill="white" opacity="0.03" />
  <!-- Title bar -->
  ${roundedRect(40, 20, 1120, 56, 12, "white", 0.08)}
  ${text(600, 55, title, { size: 22, weight: "800", opacity: 0.95 })}
  <!-- Subtitle -->
  ${subtitle ? text(600, 610, subtitle, { size: 14, opacity: 0.4 }) : ""}
  <!-- Content area -->
  ${content}
</svg>`;
}

// ═══════════════════════════════════════════
// BÀI 1: OHDSI Ecosystem Overview
// ═══════════════════════════════════════════
function bai1() {
  const content = `
    <!-- Central hub -->
    ${roundedRect(460, 220, 280, 80, 16, COLORS.blue, 0.9)}
    ${text(600, 268, "OHDSI Ecosystem", { size: 24, weight: "800" })}
    
    <!-- OMOP CDM -->
    ${roundedRect(100, 110, 200, 60, 12, COLORS.teal)}
    ${text(200, 147, "OMOP CDM", { size: 18, weight: "700" })}
    ${arrow(300, 145, 458, 240)}
    
    <!-- Athena -->
    ${roundedRect(100, 220, 200, 60, 12, COLORS.green)}
    ${text(200, 257, "Athena", { size: 18, weight: "700" })}
    ${arrow(300, 250, 458, 260)}
    
    <!-- ATLAS -->
    ${roundedRect(100, 330, 200, 60, 12, COLORS.purple)}
    ${text(200, 367, "ATLAS", { size: 18, weight: "700" })}
    ${arrow(300, 360, 458, 280)}
    
    <!-- WebAPI -->
    ${roundedRect(100, 440, 200, 60, 12, "#4361EE")}
    ${text(200, 477, "WebAPI", { size: 18, weight: "700" })}
    ${arrow(300, 463, 458, 290)}
    
    <!-- Right side tools -->
    ${roundedRect(900, 110, 200, 60, 12, COLORS.orange)}
    ${text(1000, 147, "WhiteRabbit", { size: 18, weight: "700" })}
    ${arrow(898, 145, 742, 240)}
    
    ${roundedRect(900, 220, 200, 60, 12, "#F77F00")}
    ${text(1000, 257, "Usagi", { size: 18, weight: "700" })}
    ${arrow(898, 250, 742, 260)}
    
    ${roundedRect(900, 330, 200, 60, 12, COLORS.red)}
    ${text(1000, 367, "ACHILLES", { size: 18, weight: "700" })}
    ${arrow(898, 360, 742, 280)}
    
    ${roundedRect(900, 440, 200, 60, 12, COLORS.pink)}
    ${text(1000, 477, "HADES", { size: 18, weight: "700" })}
    ${arrow(898, 463, 742, 290)}
    
    <!-- Bottom: Network -->
    ${roundedRect(350, 380, 500, 55, 12, "white", 0.1)}
    ${text(600, 414, "Global Network — 800M+ Patient Records", { size: 16, opacity: 0.75 })}
    
    <!-- Labels -->
    ${text(200, 555, "Core Platform", { size: 14, opacity: 0.5 })}
    ${text(1000, 555, "Analysis Tools", { size: 14, opacity: 0.5 })}
  `;
  return wrapSVG(content, "Bai 1: OHDSI — Tong quan He sinh thai", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 2: OMOP CDM Structure
// ═══════════════════════════════════════════
function bai2() {
  const content = `
    <!-- Person (center) -->
    ${roundedRect(460, 95, 280, 65, 14, COLORS.blue)}
    ${text(600, 135, "PERSON", { size: 22, weight: "800" })}
    
    <!-- Visit -->
    ${roundedRect(460, 195, 280, 50, 12, COLORS.teal)}
    ${text(600, 226, "VISIT_OCCURRENCE", { size: 17, weight: "700" })}
    ${arrow(600, 160, 600, 193)}
    
    <!-- Clinical Domain boxes -->
    ${roundedRect(60, 310, 185, 50, 10, "#4361EE")}
    ${text(152, 341, "CONDITION", { size: 15, weight: "700" })}
    
    ${roundedRect(270, 310, 185, 50, 10, COLORS.green)}
    ${text(362, 341, "DRUG_EXPOSURE", { size: 15, weight: "700" })}
    
    ${roundedRect(480, 310, 185, 50, 10, COLORS.orange)}
    ${text(572, 341, "MEASUREMENT", { size: 15, weight: "700" })}
    
    ${roundedRect(690, 310, 185, 50, 10, COLORS.purple)}
    ${text(782, 341, "PROCEDURE", { size: 15, weight: "700" })}
    
    ${roundedRect(900, 310, 185, 50, 10, COLORS.red)}
    ${text(992, 341, "OBSERVATION", { size: 15, weight: "700" })}
    
    <!-- Arrows from visit -->
    ${arrow(500, 245, 152, 308)}
    ${arrow(540, 245, 362, 308)}
    ${arrow(600, 245, 572, 308)}
    ${arrow(660, 245, 782, 308)}
    ${arrow(700, 245, 992, 308)}
    
    <!-- Vocabularies -->
    ${roundedRect(60, 420, 520, 55, 12, "white", 0.1)}
    ${text(320, 453, "Standardized Vocabularies (CONCEPT, CONCEPT_RELATIONSHIP)", { size: 15, opacity: 0.75 })}
    
    <!-- Health System -->
    ${roundedRect(620, 420, 465, 55, 12, "white", 0.1)}
    ${text(852, 453, "Health System (LOCATION, CARE_SITE, PROVIDER)", { size: 15, opacity: 0.75 })}
    
    <!-- Domain labels -->
    ${text(600, 290, "Clinical Data Tables", { size: 14, fill: COLORS.gray, opacity: 0.6 })}
    ${text(320, 505, "Vocabulary Tables", { size: 14, fill: COLORS.gray, opacity: 0.6 })}
    ${text(852, 505, "System Tables", { size: 14, fill: COLORS.gray, opacity: 0.6 })}
    
    <!-- CDM version -->
    ${roundedRect(480, 535, 240, 35, 8, COLORS.teal, 0.3)}
    ${text(600, 558, "OMOP CDM v5.4", { size: 15, weight: "700", opacity: 0.9 })}
  `;
  return wrapSVG(content, "Bai 2: OMOP CDM — Cau truc &amp; Domain", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 3: Athena Vocabularies
// ═══════════════════════════════════════════
function bai3() {
  const content = `
    <!-- Athena central -->
    ${roundedRect(400, 100, 400, 70, 16, COLORS.green)}
    ${text(600, 143, "Athena Vocabularies", { size: 26, weight: "800" })}
    
    <!-- Source vocabs (left) -->
    ${roundedRect(60, 240, 160, 45, 10, "#E63946")}
    ${text(140, 268, "ICD-10", { size: 16, weight: "700" })}
    
    ${roundedRect(60, 310, 160, 45, 10, "#E63946")}
    ${text(140, 338, "ICD-9-CM", { size: 16, weight: "700" })}
    
    ${roundedRect(60, 380, 160, 45, 10, "#E63946")}
    ${text(140, 408, "Local Codes", { size: 16, weight: "700" })}
    
    ${text(140, 460, "Source Vocabularies", { size: 13, fill: COLORS.gray, opacity: 0.6 })}
    
    <!-- Mapping arrows -->
    ${arrow(222, 262, 398, 280)}
    ${arrow(222, 332, 398, 310)}
    ${arrow(222, 402, 398, 340)}
    
    <!-- Standard vocabs (center) -->
    ${roundedRect(400, 250, 200, 45, 10, COLORS.blue)}
    ${text(500, 278, "SNOMED CT", { size: 16, weight: "700" })}
    
    ${roundedRect(400, 310, 200, 45, 10, COLORS.blue)}
    ${text(500, 338, "RxNorm", { size: 16, weight: "700" })}
    
    ${roundedRect(400, 370, 200, 45, 10, COLORS.blue)}
    ${text(500, 398, "LOINC", { size: 16, weight: "700" })}
    
    ${text(500, 445, "Standard Concepts", { size: 13, fill: COLORS.gray, opacity: 0.6 })}
    
    <!-- Classification (right) -->
    ${arrow(602, 272, 728, 272)}
    ${arrow(602, 332, 728, 332)}
    ${arrow(602, 392, 728, 392)}
    
    ${roundedRect(730, 250, 200, 45, 10, COLORS.purple)}
    ${text(830, 278, "ATC", { size: 16, weight: "700" })}
    
    ${roundedRect(730, 310, 200, 45, 10, COLORS.purple)}
    ${text(830, 338, "MeSH", { size: 16, weight: "700" })}
    
    ${roundedRect(730, 370, 200, 45, 10, COLORS.purple)}
    ${text(830, 398, "OMOP Extension", { size: 16, weight: "700" })}
    
    ${text(830, 445, "Classification", { size: 13, fill: COLORS.gray, opacity: 0.6 })}
    
    <!-- Concept table -->
    ${roundedRect(250, 500, 700, 50, 12, "white", 0.1)}
    ${text(600, 531, "CONCEPT table: concept_id | concept_name | vocabulary_id | standard_concept", { size: 14, opacity: 0.7 })}
  `;
  return wrapSVG(content, "Bai 3: Athena — Standardized Vocabularies", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 4: WhiteRabbit &amp; Rabbit-in-a-Hat
// ═══════════════════════════════════════════
function bai4() {
  const content = `
    <!-- Source DB -->
    ${roundedRect(60, 160, 220, 280, 16, "#334155")}
    ${text(170, 200, "Source Database", { size: 18, weight: "700" })}
    ${roundedRect(80, 220, 180, 35, 8, COLORS.red, 0.8)}
    ${text(170, 243, "patients", { size: 14 })}
    ${roundedRect(80, 265, 180, 35, 8, COLORS.red, 0.8)}
    ${text(170, 288, "diagnoses", { size: 14 })}
    ${roundedRect(80, 310, 180, 35, 8, COLORS.red, 0.8)}
    ${text(170, 333, "prescriptions", { size: 14 })}
    ${roundedRect(80, 355, 180, 35, 8, COLORS.red, 0.8)}
    ${text(170, 378, "lab_results", { size: 14 })}
    
    <!-- WhiteRabbit -->
    ${roundedRect(380, 160, 240, 110, 14, COLORS.orange)}
    ${text(500, 200, "WhiteRabbit", { size: 22, weight: "800" })}
    ${text(500, 230, "Scan &amp; Profile", { size: 15, opacity: 0.8 })}
    ${text(500, 255, "Data Source", { size: 15, opacity: 0.8 })}
    ${arrow(282, 300, 378, 220)}
    
    <!-- Scan Report -->
    ${roundedRect(380, 310, 240, 60, 12, "white", 0.15)}
    ${text(500, 347, "Scan Report (.xlsx)", { size: 16, weight: "600" })}
    ${arrow(500, 272, 500, 308)}
    
    <!-- Rabbit-in-a-Hat -->
    ${roundedRect(380, 410, 240, 110, 14, "#F77F00")}
    ${text(500, 450, "Rabbit-in-a-Hat", { size: 22, weight: "800" })}
    ${text(500, 480, "Design ETL", { size: 15, opacity: 0.8 })}
    ${text(500, 505, "Mapping", { size: 15, opacity: 0.8 })}
    ${arrow(500, 372, 500, 408)}
    
    <!-- OMOP CDM Target -->
    ${roundedRect(720, 160, 220, 280, 16, COLORS.blue)}
    ${text(830, 200, "OMOP CDM", { size: 18, weight: "700" })}
    ${roundedRect(740, 220, 180, 35, 8, COLORS.teal, 0.8)}
    ${text(830, 243, "person", { size: 14 })}
    ${roundedRect(740, 265, 180, 35, 8, COLORS.teal, 0.8)}
    ${text(830, 288, "condition_occ", { size: 14 })}
    ${roundedRect(740, 310, 180, 35, 8, COLORS.teal, 0.8)}
    ${text(830, 333, "drug_exposure", { size: 14 })}
    ${roundedRect(740, 355, 180, 35, 8, COLORS.teal, 0.8)}
    ${text(830, 378, "measurement", { size: 14 })}
    
    <!-- ETL Spec output -->
    ${roundedRect(720, 440, 220, 55, 12, "white", 0.12)}
    ${text(830, 474, "ETL Specification", { size: 16, weight: "600" })}
    ${arrow(622, 465, 718, 465)}
    
    <!-- Mapping lines -->
    ${dashedLine(260, 237, 740, 237)}
    ${dashedLine(260, 282, 740, 282)}
    ${dashedLine(260, 327, 740, 327)}
    ${dashedLine(260, 372, 740, 372)}
  `;
  return wrapSVG(content, "Bai 4: WhiteRabbit &amp; Rabbit-in-a-Hat", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 5: Usagi Mapping
// ═══════════════════════════════════════════
function bai5() {
  const content = `
    <!-- Source codes -->
    ${roundedRect(60, 130, 300, 200, 14, "#334155")}
    ${text(210, 165, "Source Codes", { size: 20, weight: "700" })}
    ${roundedRect(80, 185, 260, 32, 8, COLORS.red, 0.7)}
    ${text(210, 206, '"Tieu duong type 2"', { size: 13 })}
    ${roundedRect(80, 225, 260, 32, 8, COLORS.red, 0.7)}
    ${text(210, 246, '"Metformin 500mg"', { size: 13 })}
    ${roundedRect(80, 265, 260, 32, 8, COLORS.red, 0.7)}
    ${text(210, 286, '"HbA1c"', { size: 13 })}
    
    <!-- Usagi -->
    ${roundedRect(440, 130, 320, 200, 16, COLORS.orange)}
    ${text(600, 170, "Usagi", { size: 28, weight: "800" })}
    ${text(600, 205, "Term Similarity", { size: 16, opacity: 0.8 })}
    ${text(600, 230, "Algorithm", { size: 16, opacity: 0.8 })}
    
    ${roundedRect(470, 255, 260, 30, 8, "white", 0.15)}
    ${text(600, 275, "Score: 0.92 — APPROVED", { size: 13, fill: COLORS.green })}
    ${roundedRect(470, 290, 260, 30, 8, "white", 0.15)}
    ${text(600, 310, "Score: 0.78 — REVIEW", { size: 13, fill: COLORS.orange })}
    
    ${arrow(362, 230, 438, 230)}
    
    <!-- Standard Concepts -->
    ${roundedRect(840, 130, 300, 200, 14, COLORS.blue)}
    ${text(990, 165, "Standard Concepts", { size: 20, weight: "700" })}
    ${roundedRect(860, 185, 260, 32, 8, COLORS.teal, 0.7)}
    ${text(990, 206, "201826 — Type 2 DM", { size: 13 })}
    ${roundedRect(860, 225, 260, 32, 8, COLORS.teal, 0.7)}
    ${text(990, 246, "1503297 — Metformin", { size: 13 })}
    ${roundedRect(860, 265, 260, 32, 8, COLORS.teal, 0.7)}
    ${text(990, 286, "3004410 — HbA1c", { size: 13 })}

    ${arrow(762, 230, 838, 230)}
    
    <!-- Workflow -->
    ${roundedRect(100, 400, 200, 50, 10, "#334155")}
    ${text(200, 431, "1. Import CSV", { size: 15, weight: "600" })}
    
    ${roundedRect(360, 400, 200, 50, 10, COLORS.orange, 0.8)}
    ${text(460, 431, "2. Auto-Map", { size: 15, weight: "600" })}
    
    ${roundedRect(620, 400, 200, 50, 10, COLORS.purple)}
    ${text(720, 431, "3. Review", { size: 15, weight: "600" })}
    
    ${roundedRect(880, 400, 220, 50, 10, COLORS.green)}
    ${text(990, 431, "4. Export Mapping", { size: 15, weight: "600" })}
    
    ${arrow(302, 425, 358, 425)}
    ${arrow(562, 425, 618, 425)}
    ${arrow(822, 425, 878, 425)}
    
    ${text(600, 520, "Mapping File → ETL Pipeline → OMOP CDM", { size: 16, opacity: 0.6 })}
  `;
  return wrapSVG(content, "Bai 5: Usagi — Mapping Source Codes to Standard Concepts", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 6: ETL Pipeline
// ═══════════════════════════════════════════
function bai6() {
  const content = `
    <!-- Source Systems -->
    ${roundedRect(60, 120, 200, 180, 14, "#334155")}
    ${text(160, 155, "Source Systems", { size: 17, weight: "700" })}
    ${iconBox(80, 170, 160, 35, "HIS / EMR", COLORS.red, COLORS.white)}
    ${iconBox(80, 215, 160, 35, "Lab System", "#E63946", COLORS.white)}
    ${iconBox(80, 260, 160, 35, "Pharmacy", "#DC2626", COLORS.white)}
    
    <!-- Extract -->
    ${roundedRect(320, 140, 160, 140, 12, COLORS.orange)}
    ${text(400, 175, "EXTRACT", { size: 18, weight: "800" })}
    ${text(400, 200, "Scan &amp;", { size: 14, opacity: 0.8 })}
    ${text(400, 220, "Profile", { size: 14, opacity: 0.8 })}
    ${text(400, 255, "WhiteRabbit", { size: 13, opacity: 0.6 })}
    ${arrow(262, 210, 318, 210)}
    
    <!-- Transform -->
    ${roundedRect(540, 140, 160, 140, 12, COLORS.purple)}
    ${text(620, 175, "TRANSFORM", { size: 18, weight: "800" })}
    ${text(620, 200, "Map &amp;", { size: 14, opacity: 0.8 })}
    ${text(620, 220, "Convert", { size: 14, opacity: 0.8 })}
    ${text(620, 255, "Usagi + Python", { size: 13, opacity: 0.6 })}
    ${arrow(482, 210, 538, 210)}
    
    <!-- Load -->
    ${roundedRect(760, 140, 160, 140, 12, COLORS.green)}
    ${text(840, 175, "LOAD", { size: 18, weight: "800" })}
    ${text(840, 200, "Insert to", { size: 14, opacity: 0.8 })}
    ${text(840, 220, "CDM tables", { size: 14, opacity: 0.8 })}
    ${text(840, 255, "PostgreSQL", { size: 13, opacity: 0.6 })}
    ${arrow(702, 210, 758, 210)}
    
    <!-- OMOP CDM DB -->
    ${roundedRect(980, 140, 160, 140, 12, COLORS.blue)}
    ${text(1060, 180, "OMOP", { size: 20, weight: "800" })}
    ${text(1060, 210, "CDM", { size: 20, weight: "800" })}
    ${text(1060, 245, "Database", { size: 14, opacity: 0.7 })}
    ${arrow(922, 210, 978, 210)}
    
    <!-- Validation -->
    ${roundedRect(320, 360, 800, 60, 12, "white", 0.08)}
    ${text(720, 396, "Validation: ACHILLES Heel + Data Quality Dashboard (1,500+ checks)", { size: 16, opacity: 0.7 })}
    ${arrow(1060, 282, 1060, 358)}
    
    <!-- Data flow labels -->
    ${roundedRect(320, 460, 250, 55, 10, "#334155")}
    ${text(445, 488, "Date / Unit Conversion", { size: 14 })}
    
    ${roundedRect(620, 460, 250, 55, 10, "#334155")}
    ${text(745, 488, "Code Mapping (ICD→SNOMED)", { size: 14 })}
    
    ${roundedRect(920, 460, 220, 55, 10, "#334155")}
    ${text(1030, 488, "Incremental Updates", { size: 14 })}
  `;
  return wrapSVG(content, "Bai 6: ETL Pipeline — Source to OMOP CDM", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 7: PostgreSQL CDM Setup
// ═══════════════════════════════════════════
function bai7() {
  const content = `
    <!-- PostgreSQL -->
    ${roundedRect(350, 100, 500, 80, 16, COLORS.blue)}
    ${text(600, 148, "PostgreSQL — OMOP CDM Database", { size: 24, weight: "800" })}
    
    <!-- Schemas -->
    ${roundedRect(80, 240, 300, 220, 14, "#334155")}
    ${text(230, 275, "Schema: cdm", { size: 18, weight: "700", fill: COLORS.teal })}
    ${iconBox(100, 295, 120, 32, "person", COLORS.teal)}
    ${iconBox(230, 295, 130, 32, "visit_occ", COLORS.teal)}
    ${iconBox(100, 335, 120, 32, "condition", "#2E86AB")}
    ${iconBox(230, 335, 130, 32, "drug_exp", "#2E86AB")}
    ${iconBox(100, 375, 120, 32, "measurement", "#0E9AA7")}
    ${iconBox(230, 375, 130, 32, "procedure", "#0E9AA7")}
    ${iconBox(100, 415, 260, 32, "concept / vocabulary", COLORS.green)}
    
    ${roundedRect(440, 240, 300, 220, 14, "#334155")}
    ${text(590, 275, "Schema: results", { size: 18, weight: "700", fill: COLORS.orange })}
    ${iconBox(460, 295, 260, 32, "achilles_results", COLORS.orange)}
    ${iconBox(460, 335, 260, 32, "achilles_results_dist", "#F77F00")}
    ${iconBox(460, 375, 260, 32, "cohort", COLORS.purple)}
    ${iconBox(460, 415, 260, 32, "cohort_inclusion", COLORS.purple)}
    
    ${roundedRect(800, 240, 300, 220, 14, "#334155")}
    ${text(950, 275, "Schema: ohdsi", { size: 18, weight: "700", fill: COLORS.red })}
    ${iconBox(820, 295, 260, 32, "WebAPI tables", COLORS.red)}
    ${iconBox(820, 335, 260, 32, "cohort_definition", "#E63946")}
    ${iconBox(820, 375, 260, 32, "source / source_daimon", "#DC2626")}
    ${iconBox(820, 415, 260, 32, "Flyway migrations", "#B91C1C")}
    
    <!-- Performance -->
    ${roundedRect(200, 510, 800, 55, 12, "white", 0.1)}
    ${text(600, 544, "Indexes + ANALYZE + shared_buffers=4GB + work_mem=256MB + parallel queries", { size: 15, opacity: 0.7 })}
  `;
  return wrapSVG(content, "Bai 7: OMOP CDM Database tren PostgreSQL", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 8: WebAPI Architecture
// ═══════════════════════════════════════════
function bai8() {
  const content = `
    <!-- Client -->
    ${roundedRect(80, 130, 200, 70, 14, COLORS.purple)}
    ${text(180, 173, "ATLAS (SPA)", { size: 20, weight: "700" })}
    
    <!-- WebAPI -->
    ${roundedRect(380, 100, 440, 350, 16, "#1E293B")}
    ${text(600, 140, "WebAPI (Spring Boot)", { size: 22, weight: "800", fill: COLORS.orange })}
    
    <!-- REST endpoints -->
    ${iconBox(400, 165, 190, 35, "GET /source", COLORS.teal)}
    ${iconBox(610, 165, 190, 35, "GET /vocabulary", COLORS.teal)}
    ${iconBox(400, 210, 190, 35, "/cohortdefinition", COLORS.blue)}
    ${iconBox(610, 210, 190, 35, "/ir (incidence)", COLORS.blue)}
    ${iconBox(400, 255, 190, 35, "/estimation", COLORS.purple)}
    ${iconBox(610, 255, 190, 35, "/prediction", COLORS.purple)}
    ${iconBox(400, 300, 190, 35, "/cohort-characterization", COLORS.green)}
    ${iconBox(610, 300, 190, 35, "/pathway-analysis", COLORS.green)}
    
    <!-- Security layer -->
    ${roundedRect(400, 355, 400, 35, 8, COLORS.red, 0.3)}
    ${text(600, 378, "Security: OAuth2 / LDAP / Basic Auth", { size: 14, opacity: 0.8 })}
    
    ${roundedRect(400, 400, 400, 35, 8, "white", 0.08)}
    ${text(600, 423, "Flyway Migrations + Spring Batch", { size: 14, opacity: 0.6 })}
    
    ${arrow(282, 165, 378, 165)}
    
    <!-- Database -->
    ${roundedRect(900, 130, 220, 160, 14, COLORS.blue)}
    ${text(1010, 170, "PostgreSQL", { size: 20, weight: "700" })}
    ${iconBox(920, 195, 180, 30, "CDM Schema", COLORS.teal)}
    ${iconBox(920, 235, 180, 30, "Results Schema", COLORS.green)}
    ${iconBox(920, 275, 180, 30, "WebAPI Schema", COLORS.orange)}
    ${arrow(822, 230, 898, 230)}
    
    <!-- HTTP flow -->
    ${text(180, 250, "HTTP/JSON", { size: 14, fill: COLORS.gray, opacity: 0.6 })}
    ${text(860, 200, "JDBC", { size: 14, fill: COLORS.gray, opacity: 0.6 })}
    
    <!-- Port -->
    ${roundedRect(80, 480, 200, 40, 10, "white", 0.08)}
    ${text(180, 505, "Port :443 (HTTPS)", { size: 14, opacity: 0.6 })}
    ${roundedRect(380, 480, 200, 40, 10, "white", 0.08)}
    ${text(480, 505, "Port :8080", { size: 14, opacity: 0.6 })}
    ${roundedRect(900, 480, 220, 40, 10, "white", 0.08)}
    ${text(1010, 505, "Port :5432", { size: 14, opacity: 0.6 })}
  `;
  return wrapSVG(content, "Bai 8: WebAPI — REST API Architecture", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 9: ATLAS Overview
// ═══════════════════════════════════════════
function bai9() {
  const content = `
    <!-- ATLAS browser window -->
    ${roundedRect(100, 95, 1000, 480, 16, "#1E293B")}
    <!-- Title bar -->
    ${roundedRect(100, 95, 1000, 45, 16, "#334155")}
    <circle cx="130" cy="117" r="7" fill="#EF4444" />
    <circle cx="152" cy="117" r="7" fill="#F59E0B" />
    <circle cx="174" cy="117" r="7" fill="#22C55E" />
    ${text(600, 123, "ATLAS — OHDSI Analytical Platform", { size: 16, weight: "700" })}
    
    <!-- Sidebar -->
    ${roundedRect(110, 150, 210, 410, 0, "#0F172A")}
    ${iconBox(120, 165, 190, 32, "Data Sources", COLORS.teal)}
    ${iconBox(120, 205, 190, 32, "Concept Sets", COLORS.blue)}
    ${iconBox(120, 245, 190, 32, "Cohort Definitions", COLORS.purple)}
    ${iconBox(120, 285, 190, 32, "Characterizations", COLORS.green)}
    ${iconBox(120, 325, 190, 32, "Incidence Rates", COLORS.orange)}
    ${iconBox(120, 365, 190, 32, "Estimation", "#E63946")}
    ${iconBox(120, 405, 190, 32, "Prediction", COLORS.pink)}
    ${iconBox(120, 445, 190, 32, "Pathways", "#4361EE")}
    ${iconBox(120, 485, 190, 32, "Profiles", "#6C63FF")}
    
    <!-- Main content area -->
    ${roundedRect(335, 155, 755, 400, 12, "#0F172A", 0.6)}
    ${text(712, 195, "Dashboard — Data Source Summary", { size: 20, weight: "700" })}
    
    <!-- Stats cards -->
    ${roundedRect(355, 215, 170, 75, 10, COLORS.teal, 0.2)}
    ${text(440, 248, "150,000", { size: 24, weight: "800", fill: COLORS.teal })}
    ${text(440, 275, "Persons", { size: 13, opacity: 0.6 })}
    
    ${roundedRect(545, 215, 170, 75, 10, COLORS.blue, 0.2)}
    ${text(630, 248, "2.5M", { size: 24, weight: "800", fill: COLORS.blue })}
    ${text(630, 275, "Visits", { size: 13, opacity: 0.6 })}
    
    ${roundedRect(735, 215, 170, 75, 10, COLORS.green, 0.2)}
    ${text(820, 248, "12.5M", { size: 24, weight: "800", fill: COLORS.green })}
    ${text(820, 275, "Records", { size: 13, opacity: 0.6 })}
    
    ${roundedRect(925, 215, 150, 75, 10, COLORS.orange, 0.2)}
    ${text(1000, 248, "10Y", { size: 24, weight: "800", fill: COLORS.orange })}
    ${text(1000, 275, "Span", { size: 13, opacity: 0.6 })}
    
    <!-- Chart placeholder -->
    ${roundedRect(355, 310, 360, 230, 10, "white", 0.05)}
    ${text(535, 345, "Age Distribution", { size: 15, weight: "600", opacity: 0.7 })}
    <!-- Bar chart mock -->
    ${roundedRect(385, 370, 30, 40, 4, COLORS.blue, 0.6)}
    ${roundedRect(425, 350, 30, 60, 4, COLORS.blue, 0.7)}
    ${roundedRect(465, 330, 30, 80, 4, COLORS.blue, 0.8)}
    ${roundedRect(505, 310, 30, 100, 4, COLORS.blue, 0.9)}
    ${roundedRect(545, 340, 30, 70, 4, COLORS.blue, 0.75)}
    ${roundedRect(585, 360, 30, 50, 4, COLORS.blue, 0.65)}
    ${roundedRect(625, 380, 30, 30, 4, COLORS.blue, 0.5)}
    ${roundedRect(665, 390, 30, 20, 4, COLORS.blue, 0.4)}
    
    ${roundedRect(735, 310, 340, 230, 10, "white", 0.05)}
    ${text(905, 345, "Condition Prevalence", { size: 15, weight: "600", opacity: 0.7 })}
    <!-- Horizontal bars -->
    ${roundedRect(755, 370, 200, 20, 4, COLORS.teal, 0.8)}
    ${text(765, 384, "HTN", { size: 11, anchor: "start" })}
    ${roundedRect(755, 400, 170, 20, 4, COLORS.green, 0.8)}
    ${text(765, 414, "DM", { size: 11, anchor: "start" })}
    ${roundedRect(755, 430, 140, 20, 4, COLORS.orange, 0.8)}
    ${text(765, 444, "HLP", { size: 11, anchor: "start" })}
    ${roundedRect(755, 460, 100, 20, 4, COLORS.purple, 0.8)}
    ${text(765, 474, "CKD", { size: 11, anchor: "start" })}
    ${roundedRect(755, 490, 70, 20, 4, COLORS.red, 0.8)}
    ${text(765, 504, "IHD", { size: 11, anchor: "start" })}
  `;
  return wrapSVG(content, "Bai 9: ATLAS — Giao dien Tong quan", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 10: Concept Sets &amp; Cohort Definitions
// ═══════════════════════════════════════════
function bai10() {
  const content = `
    <!-- Concept Set -->
    ${roundedRect(60, 110, 480, 220, 14, "#1E293B")}
    ${text(300, 145, "Concept Set: Type 2 DM", { size: 20, weight: "700", fill: COLORS.teal })}
    
    ${roundedRect(80, 165, 440, 35, 8, COLORS.teal, 0.3)}
    ${text(300, 188, "201826 — Type 2 DM  ☑ Descendants", { size: 14 })}
    ${roundedRect(80, 210, 440, 35, 8, COLORS.teal, 0.2)}
    ${text(300, 233, "443238 — DM type 2 with complications  ☑ Include", { size: 14 })}
    ${roundedRect(80, 255, 440, 35, 8, COLORS.red, 0.2)}
    ${text(300, 278, "201254 — Type 1 DM  ☒ Exclude", { size: 14, fill: "#F87171" })}
    ${text(300, 315, "→ Resolved: 148 concepts", { size: 14, fill: COLORS.green, opacity: 0.8 })}
    
    <!-- Arrow -->
    ${arrow(542, 220, 618, 220)}
    
    <!-- Cohort Definition -->
    ${roundedRect(620, 110, 520, 430, 14, "#1E293B")}
    ${text(880, 145, "Cohort Definition: New-Onset T2DM", { size: 20, weight: "700", fill: COLORS.blue })}
    
    <!-- Initial Event -->
    ${roundedRect(640, 170, 480, 55, 10, COLORS.blue, 0.4)}
    ${text(880, 195, "Initial Event:", { size: 16, weight: "700" })}
    ${text(880, 215, "First condition of T2DM concept set", { size: 13, opacity: 0.8 })}
    
    <!-- Inclusion Criteria -->
    ${roundedRect(640, 240, 480, 80, 10, COLORS.green, 0.3)}
    ${text(880, 265, "Inclusion Criteria:", { size: 16, weight: "700" })}
    ${text(880, 288, "1. Age >= 18 at index", { size: 13, opacity: 0.8 })}
    ${text(880, 308, "2. >= 365 days prior observation", { size: 13, opacity: 0.8 })}
    
    <!-- Cohort Exit -->
    ${roundedRect(640, 335, 480, 55, 10, COLORS.orange, 0.3)}
    ${text(880, 358, "Cohort Exit:", { size: 16, weight: "700" })}
    ${text(880, 378, "End of continuous observation", { size: 13, opacity: 0.8 })}
    
    <!-- Attrition -->
    ${roundedRect(640, 410, 480, 60, 10, "white", 0.08)}
    ${text(880, 435, "Attrition Report:", { size: 16, weight: "600" })}
    ${text(880, 458, "Initial: 12,000 → Criteria: 8,500 → Final: 4,200", { size: 13, fill: COLORS.gray })}
    
    <!-- Generate SQL -->
    ${roundedRect(640, 485, 230, 40, 10, COLORS.purple)}
    ${text(755, 510, "Generate SQL", { size: 15, weight: "700" })}
    ${roundedRect(890, 485, 230, 40, 10, COLORS.green)}
    ${text(1005, 510, "Execute (4,200)", { size: 15, weight: "700" })}
    
    <!-- Bottom flow -->
    ${text(300, 410, "Concept Sets feed", { size: 14, fill: COLORS.gray, opacity: 0.5 })}
    ${text(300, 430, "into Cohort Definitions", { size: 14, fill: COLORS.gray, opacity: 0.5 })}
  `;
  return wrapSVG(content, "Bai 10: ATLAS — Concept Sets &amp; Cohort Definitions", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 11: Characterization, IR & Pathways
// ═══════════════════════════════════════════
function bai11() {
  const content = `
    <!-- Three panels -->
    <!-- Characterization -->
    ${roundedRect(60, 110, 340, 230, 14, "#1E293B")}
    ${text(230, 145, "Characterization", { size: 20, weight: "700", fill: COLORS.teal })}
    ${roundedRect(80, 165, 300, 30, 6, COLORS.teal, 0.3)}
    ${text(230, 185, "Demographics, Conditions, Drugs", { size: 12 })}
    
    <!-- Mini bar chart -->
    ${text(120, 220, "HTN", { size: 12, anchor: "start" })}
    ${roundedRect(170, 207, 160, 16, 4, COLORS.teal, 0.8)}
    ${text(340, 220, "62.5%", { size: 11, anchor: "start" })}  
    ${text(120, 245, "HLP", { size: 12, anchor: "start" })}
    ${roundedRect(170, 232, 130, 16, 4, COLORS.blue, 0.8)}
    ${text(310, 245, "45.3%", { size: 11, anchor: "start" })}
    ${text(120, 270, "OBS", { size: 12, anchor: "start" })}
    ${roundedRect(170, 257, 85, 16, 4, COLORS.green, 0.8)}
    ${text(265, 270, "28.7%", { size: 11, anchor: "start" })}
    ${text(120, 295, "CKD", { size: 12, anchor: "start" })}
    ${roundedRect(170, 282, 40, 16, 4, COLORS.orange, 0.8)}
    ${text(220, 295, "12.1%", { size: 11, anchor: "start" })}
    ${text(230, 325, "SMD < 0.1 = balanced", { size: 12, fill: COLORS.green, opacity: 0.7 })}
    
    <!-- Incidence Rate -->
    ${roundedRect(430, 110, 340, 230, 14, "#1E293B")}
    ${text(600, 145, "Incidence Rate", { size: 20, weight: "700", fill: COLORS.orange })}
    ${roundedRect(450, 165, 300, 30, 6, COLORS.orange, 0.3)}
    ${text(600, 185, "Target Cohort → Outcome over Time", { size: 12 })}
    
    <!-- Rate display -->
    ${text(600, 235, "10.0", { size: 48, weight: "800", fill: COLORS.orange })}
    ${text(600, 260, "per 1,000 Person-Years", { size: 14, opacity: 0.7 })}
    ${text(600, 290, "95% CI: [8.3 — 11.9]", { size: 14, opacity: 0.6 })}
    ${text(490, 320, "18-44: 3.2", { size: 12, opacity: 0.5 })}
    ${text(600, 320, "45-64: 8.5", { size: 12, opacity: 0.5 })}
    ${text(710, 320, "65+: 18.7", { size: 12, opacity: 0.5 })}
    
    <!-- Pathways -->
    ${roundedRect(800, 110, 340, 230, 14, "#1E293B")}
    ${text(970, 145, "Treatment Pathways", { size: 20, weight: "700", fill: COLORS.purple })}
    
    <!-- Sunburst simplified -->
    ${roundedRect(820, 170, 300, 30, 6, COLORS.blue, 0.7)}
    ${text(970, 190, "Metformin (70%)", { size: 14, weight: "600" })}
    
    ${roundedRect(850, 210, 130, 25, 6, COLORS.green, 0.6)}
    ${text(915, 227, "Met only (35%)", { size: 11 })}
    ${roundedRect(990, 210, 120, 25, 6, COLORS.orange, 0.6)}
    ${text(1050, 227, "Met+SU (18%)", { size: 11 })}
    
    ${roundedRect(820, 250, 140, 25, 6, COLORS.purple, 0.5)}
    ${text(890, 267, "Sulfonylurea (15%)", { size: 11 })}
    
    ${roundedRect(820, 285, 140, 25, 6, COLORS.red, 0.5)}
    ${text(890, 302, "Insulin (10%)", { size: 11 })}
    
    ${roundedRect(820, 320, 140, 25, 6, COLORS.gray, 0.3)}
    ${text(890, 337, "Other (5%)", { size: 11 })}
    
    <!-- Bottom: Workflow -->
    ${roundedRect(100, 400, 200, 55, 12, COLORS.blue)}
    ${text(200, 420, "Define", { size: 16, weight: "700" })}
    ${text(200, 442, "Cohorts", { size: 14, opacity: 0.8 })}
    
    ${arrow(302, 427, 368, 427)}
    
    ${roundedRect(370, 400, 200, 55, 12, COLORS.teal)}
    ${text(470, 420, "Run", { size: 16, weight: "700" })}
    ${text(470, 442, "Analysis", { size: 14, opacity: 0.8 })}
    
    ${arrow(572, 427, 638, 427)}
    
    ${roundedRect(640, 400, 200, 55, 12, COLORS.green)}
    ${text(740, 420, "Review", { size: 16, weight: "700" })}
    ${text(740, 442, "Results", { size: 14, opacity: 0.8 })}

    ${arrow(842, 427, 908, 427)}

    ${roundedRect(910, 400, 200, 55, 12, COLORS.orange)}
    ${text(1010, 420, "Export", { size: 16, weight: "700" })}
    ${text(1010, 442, "&amp; Share", { size: 14, opacity: 0.8 })}
  `;
  return wrapSVG(content, "Bai 11: Characterization, Incidence Rates &amp; Pathways", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 12: Estimation &amp; Prediction
// ═══════════════════════════════════════════
function bai12() {
  const content = `
    <!-- Estimation -->
    ${roundedRect(60, 100, 530, 250, 14, "#1E293B")}
    ${text(325, 135, "Population-Level Estimation", { size: 22, weight: "700", fill: COLORS.blue })}
    
    <!-- T-C-O -->
    ${iconBox(80, 160, 150, 40, "Target: Metformin", COLORS.blue)}
    ${text(320, 185, "vs", { size: 16, opacity: 0.6 })}
    ${iconBox(350, 160, 150, 40, "Comp: SU", COLORS.red)}
    ${arrow(330, 200, 330, 215)}
    ${iconBox(180, 220, 300, 40, "Outcome: Acute MI", COLORS.orange)}
    
    <!-- PS + Result -->
    ${roundedRect(80, 280, 230, 55, 10, "white", 0.08)}
    ${text(195, 300, "Propensity Score", { size: 15, weight: "600" })}
    ${text(195, 320, "1:1 Matching", { size: 13, opacity: 0.6 })}
    
    ${roundedRect(330, 280, 240, 55, 10, COLORS.green, 0.3)}
    ${text(450, 300, "HR: 0.62 [0.39–0.98]", { size: 16, weight: "700", fill: COLORS.green })}
    ${text(450, 322, "Calibrated p = 0.041", { size: 13, opacity: 0.8 })}
    
    <!-- Prediction -->
    ${roundedRect(620, 100, 520, 250, 14, "#1E293B")}
    ${text(880, 135, "Patient-Level Prediction", { size: 22, weight: "700", fill: COLORS.purple })}
    
    <!-- Target Outcome -->
    ${iconBox(640, 160, 200, 40, "Target: New DM", COLORS.purple)}
    ${arrow(852, 180, 870, 180)}
    ${iconBox(880, 160, 240, 40, "Outcome: CKD (5yr)", COLORS.pink)}
    
    <!-- Models -->
    ${iconBox(640, 220, 150, 35, "LASSO", COLORS.teal)}
    ${iconBox(800, 220, 150, 35, "GBM", COLORS.green)}
    ${iconBox(960, 220, 160, 35, "Random Forest", COLORS.orange)}
    
    <!-- AUC result -->
    ${roundedRect(640, 275, 480, 55, 10, COLORS.purple, 0.2)}
    ${text(880, 298, "AUC: 0.82 | Calibration: Well-calibrated", { size: 16, weight: "600" })}
    ${text(880, 318, "Top predictors: Age, HTN, eGFR, Proteinuria", { size: 13, opacity: 0.7 })}
    
    <!-- Diagnostics bottom -->
    ${roundedRect(60, 400, 350, 140, 14, "white", 0.06)}
    ${text(235, 432, "Estimation Diagnostics", { size: 18, weight: "700", fill: COLORS.blue })}
    ${text(235, 460, "☑ PS Equipoise: PASS", { size: 14, fill: COLORS.green })}
    ${text(235, 482, "☑ Covariate Balance: PASS", { size: 14, fill: COLORS.green })}
    ${text(235, 504, "☑ Negative Controls: PASS", { size: 14, fill: COLORS.green })}
    ${text(235, 526, "☑ MDRR: 1.5", { size: 14, fill: COLORS.green })}
    
    ${roundedRect(440, 400, 350, 140, 14, "white", 0.06)}
    ${text(615, 432, "Prediction Diagnostics", { size: 18, weight: "700", fill: COLORS.purple })}
    ${text(615, 460, "☑ AUC > 0.70: PASS (0.82)", { size: 14, fill: COLORS.green })}
    ${text(615, 482, "☑ Calibration slope: 0.95", { size: 14, fill: COLORS.green })}
    ${text(615, 504, "☑ No overfitting", { size: 14, fill: COLORS.green })}
    ${text(615, 526, "☑ Events: 320 (sufficient)", { size: 14, fill: COLORS.green })}
    
    ${roundedRect(820, 400, 320, 140, 14, "white", 0.06)}
    ${text(980, 432, "R Study Package", { size: 18, weight: "700", fill: COLORS.orange })}
    ${text(980, 460, "ATLAS → Generate →", { size: 14, opacity: 0.7 })}
    ${text(980, 482, "CohortMethod (Estimation)", { size: 14, opacity: 0.7 })}
    ${text(980, 504, "PatientLevelPrediction", { size: 14, opacity: 0.7 })}
    ${text(980, 526, "→ Execute on any CDM site", { size: 14, fill: COLORS.teal })}
  `;
  return wrapSVG(content, "Bai 12: Estimation &amp; Prediction", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 13: ACHILLES
// ═══════════════════════════════════════════
function bai13() {
  const content = `
    <!-- ACHILLES flow -->
    ${roundedRect(80, 130, 200, 70, 12, COLORS.blue)}
    ${text(180, 173, "CDM Database", { size: 18, weight: "700" })}
    
    ${arrow(282, 165, 358, 165)}
    
    ${roundedRect(360, 110, 280, 110, 16, COLORS.teal)}
    ${text(500, 150, "ACHILLES", { size: 28, weight: "800" })}
    ${text(500, 180, "Data Characterization", { size: 15, opacity: 0.8 })}
    ${text(500, 200, "&amp; Profiling", { size: 15, opacity: 0.8 })}
    
    ${arrow(642, 165, 718, 165)}
    
    ${roundedRect(720, 130, 200, 70, 12, COLORS.green)}
    ${text(820, 160, "achilles_results", { size: 15, weight: "700" })}
    ${text(820, 183, "achilles_dist", { size: 15, weight: "700" })}
    
    ${arrow(920, 165, 968, 165)}
    
    ${roundedRect(970, 130, 170, 70, 12, COLORS.purple)}
    ${text(1055, 165, "ATLAS", { size: 20, weight: "700" })}
    ${text(1055, 188, "Data Sources", { size: 13, opacity: 0.7 })}
    
    <!-- Reports -->
    ${roundedRect(80, 270, 250, 200, 14, "#1E293B")}
    ${text(205, 305, "Demographics", { size: 18, weight: "700", fill: COLORS.teal })}
    <!-- Mini chart -->
    ${roundedRect(100, 320, 25, 80, 4, COLORS.blue, 0.5)}
    ${roundedRect(135, 340, 25, 60, 4, COLORS.blue, 0.6)}
    ${roundedRect(170, 310, 25, 90, 4, COLORS.blue, 0.8)}
    ${roundedRect(205, 325, 25, 75, 4, COLORS.blue, 0.7)}
    ${roundedRect(240, 350, 25, 50, 4, COLORS.blue, 0.5)}
    ${roundedRect(275, 370, 25, 30, 4, COLORS.blue, 0.4)}
    ${text(205, 445, "Age Distribution", { size: 13, opacity: 0.5 })}
    
    ${roundedRect(370, 270, 250, 200, 14, "#1E293B")}
    ${text(495, 305, "Conditions", { size: 18, weight: "700", fill: COLORS.orange })}
    ${roundedRect(390, 330, 190, 18, 4, COLORS.orange, 0.7)}
    ${text(400, 343, "HTN 30%", { size: 11, anchor: "start" })}
    ${roundedRect(390, 355, 160, 18, 4, COLORS.orange, 0.6)}
    ${text(400, 368, "DM 23%", { size: 11, anchor: "start" })}
    ${roundedRect(390, 380, 130, 18, 4, COLORS.orange, 0.5)}
    ${text(400, 393, "HLP 19%", { size: 11, anchor: "start" })}
    ${roundedRect(390, 405, 90, 18, 4, COLORS.orange, 0.4)}
    ${text(400, 418, "URI 17%", { size: 11, anchor: "start" })}
    ${text(495, 455, "Top Conditions", { size: 13, opacity: 0.5 })}
    
    ${roundedRect(660, 270, 250, 200, 14, "#1E293B")}
    ${text(785, 305, "Drugs", { size: 18, weight: "700", fill: COLORS.green })}
    ${roundedRect(680, 330, 170, 18, 4, COLORS.green, 0.7)}
    ${text(690, 343, "Metformin", { size: 11, anchor: "start" })}
    ${roundedRect(680, 355, 140, 18, 4, COLORS.green, 0.6)}
    ${text(690, 368, "Enalapril", { size: 11, anchor: "start" })}
    ${roundedRect(680, 380, 120, 18, 4, COLORS.green, 0.5)}
    ${text(690, 393, "Atorvastatin", { size: 11, anchor: "start" })}
    ${roundedRect(680, 405, 80, 18, 4, COLORS.green, 0.4)}
    ${text(690, 418, "Losartan", { size: 11, anchor: "start" })}
    ${text(785, 455, "Drug Classes", { size: 13, opacity: 0.5 })}
    
    <!-- ACHILLES Heel -->
    ${roundedRect(950, 270, 190, 200, 14, COLORS.red, 0.15)}
    ${text(1045, 305, "ACHILLES Heel", { size: 17, weight: "700", fill: COLORS.red })}
    ${text(1045, 340, "⚠ ERROR: 3", { size: 14, fill: "#F87171" })}
    ${text(1045, 365, "⚠ WARNING: 8", { size: 14, fill: COLORS.orange })}
    ${text(1045, 390, "ℹ NOTICE: 12", { size: 14, fill: COLORS.gray })}
    ${roundedRect(970, 420, 150, 35, 8, COLORS.red, 0.3)}
    ${text(1045, 442, "Fix before analysis", { size: 12 })}
  `;
  return wrapSVG(content, "Bai 13: ACHILLES — Data Characterization", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 14: DQD
// ═══════════════════════════════════════════
function bai14() {
  const content = `
    <!-- DQD Overview -->
    ${roundedRect(300, 100, 600, 80, 16, COLORS.orange)}
    ${text(600, 135, "Data Quality Dashboard", { size: 28, weight: "800" })}
    ${text(600, 165, "1,500+ Automated Quality Checks", { size: 16, opacity: 0.8 })}
    
    <!-- Three pillars -->
    ${roundedRect(60, 240, 340, 200, 14, "#1E293B")}
    ${text(230, 275, "Conformance", { size: 22, weight: "700", fill: COLORS.teal })}
    ${text(230, 305, "Value format &amp; range", { size: 14, opacity: 0.7 })}
    ${text(230, 330, "FK relationships", { size: 14, opacity: 0.7 })}
    ${text(230, 355, "Computation logic", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(420, 275, 110, 20, 6, COLORS.green, 0.5)}
    ${text(475, 289, "93.7%", { size: 13, weight: "700", fill: COLORS.green })}
    ${roundedRect(420, 300, 110, 20, 6, COLORS.green, 0.5)}
    ${text(475, 314, "PASS", { size: 13, weight: "700", fill: COLORS.green })}
    
    ${roundedRect(430, 240, 340, 200, 14, "#1E293B")}
    ${text(600, 275, "Completeness", { size: 22, weight: "700", fill: COLORS.blue })}
    ${text(600, 305, "Missing required data", { size: 14, opacity: 0.7 })}
    ${text(600, 330, "Expected record counts", { size: 14, opacity: 0.7 })}
    ${text(600, 355, "NULL values analysis", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(790, 275, 110, 20, 6, COLORS.orange, 0.5)}
    ${text(845, 289, "88.8%", { size: 13, weight: "700", fill: COLORS.orange })}
    ${roundedRect(790, 300, 110, 20, 6, COLORS.orange, 0.5)}
    ${text(845, 314, "REVIEW", { size: 13, weight: "700", fill: COLORS.orange })}
    
    ${roundedRect(800, 240, 340, 200, 14, "#1E293B")}
    ${text(970, 275, "Plausibility", { size: 22, weight: "700", fill: COLORS.purple })}
    ${text(970, 305, "Value ranges valid", { size: 14, opacity: 0.7 })}
    ${text(970, 330, "Temporal consistency", { size: 14, opacity: 0.7 })}
    ${text(970, 355, "Uniqueness checks", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(1010, 275, 110, 20, 6, COLORS.green, 0.5)}
    ${text(1065, 289, "91.6%", { size: 13, weight: "700", fill: COLORS.green })}
    
    <!-- Overall score -->
    ${roundedRect(350, 490, 500, 70, 14, "white", 0.1)}
    ${text(600, 520, "Overall: 89.8% PASS", { size: 28, weight: "800", fill: COLORS.green })}
    ${text(600, 545, "1,389 / 1,547 checks passed — Kahn Framework", { size: 14, opacity: 0.6 })}
  `;
  return wrapSVG(content, "Bai 14: Data Quality Dashboard (DQD)", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 15: HADES R Packages
// ═══════════════════════════════════════════
function bai15() {
  const content = `
    <!-- HADES central -->
    ${roundedRect(380, 95, 440, 65, 14, COLORS.purple)}
    ${text(600, 135, "HADES — R Package Ecosystem", { size: 24, weight: "800" })}
    
    <!-- Layer 1: Infrastructure -->
    ${text(600, 195, "Infrastructure", { size: 16, weight: "700", fill: COLORS.gray })}
    ${iconBox(140, 210, 190, 40, "DatabaseConnector", "#4361EE")}
    ${iconBox(350, 210, 160, 40, "SqlRender", "#4361EE")}
    ${iconBox(530, 210, 140, 40, "Eunomia", "#4361EE")}
    ${iconBox(690, 210, 180, 40, "ParallelLogger", "#4361EE")}
    ${iconBox(890, 210, 180, 40, "CirceR", "#4361EE")}
    
    <!-- Layer 2: Cohort -->
    ${text(600, 285, "Cohort Tools", { size: 16, weight: "700", fill: COLORS.gray })}
    ${iconBox(140, 300, 200, 40, "CohortGenerator", COLORS.teal)}
    ${iconBox(360, 300, 220, 40, "CohortDiagnostics", COLORS.teal)}
    ${iconBox(600, 300, 210, 40, "FeatureExtraction", COLORS.teal)}
    ${iconBox(830, 300, 230, 40, "Characterization", COLORS.teal)}
    
    <!-- Layer 3: Analytics -->
    ${text(600, 375, "Analytics", { size: 16, weight: "700", fill: COLORS.gray })}
    ${iconBox(100, 390, 200, 40, "CohortMethod", COLORS.blue)}
    ${iconBox(320, 390, 240, 40, "SelfControlledCase", COLORS.blue)}
    ${iconBox(580, 390, 230, 40, "EvidenceSynthesis", COLORS.blue)}
    ${iconBox(830, 390, 260, 40, "CausalImpact Analysis", COLORS.blue)}
    
    <!-- Layer 4: Prediction -->
    ${text(600, 465, "Prediction", { size: 16, weight: "700", fill: COLORS.gray })}
    ${iconBox(140, 480, 280, 40, "PatientLevelPrediction", COLORS.green)}
    ${iconBox(440, 480, 250, 40, "DeepPatientLevelPred", COLORS.green)}
    ${iconBox(710, 480, 260, 40, "EnsemblePatientLevel", COLORS.green)}
    
    <!-- Layer 5: Orchestration -->
    ${text(600, 555, "Orchestration", { size: 16, weight: "700", fill: COLORS.gray })}
    ${iconBox(200, 570, 200, 35, "Strategus", COLORS.orange)}
    ${iconBox(420, 570, 220, 35, "ResultModelManager", COLORS.orange)}
    ${iconBox(660, 570, 200, 35, "ShinyAppBuilder", COLORS.orange)}
  `;
  return wrapSVG(content, "Bai 15: HADES — R Packages", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 16: Docker &amp; Kubernetes
// ═══════════════════════════════════════════
function bai16() {
  const content = `
    <!-- Docker section -->
    ${roundedRect(60, 100, 530, 260, 14, "#1E293B")}
    ${text(325, 135, "Docker Compose Stack", { size: 22, weight: "700", fill: COLORS.blue })}
    
    ${iconBox(80, 160, 230, 50, "ohdsi-db (PostgreSQL)", COLORS.blue)}
    ${iconBox(80, 225, 230, 50, "ohdsi-webapi (Tomcat)", COLORS.teal)}
    ${iconBox(80, 290, 230, 50, "ohdsi-atlas (Nginx)", COLORS.green)}
    ${iconBox(340, 160, 230, 50, "ohdsi-r (HADES)", COLORS.purple)}
    ${iconBox(340, 225, 230, 50, "postgres-exporter", COLORS.orange)}
    ${iconBox(340, 290, 230, 50, "prometheus + grafana", COLORS.red)}
    
    <!-- K8s section -->
    ${roundedRect(620, 100, 520, 260, 14, "#1E293B")}
    ${text(880, 135, "Kubernetes Deployment", { size: 22, weight: "700", fill: COLORS.teal })}
    
    ${roundedRect(640, 160, 220, 55, 10, COLORS.blue, 0.4)}
    ${text(750, 183, "StatefulSet", { size: 16, weight: "700" })}
    ${text(750, 203, "PostgreSQL + PVC", { size: 12, opacity: 0.7 })}
    
    ${roundedRect(880, 160, 240, 55, 10, COLORS.teal, 0.4)}
    ${text(1000, 183, "Deployment (x2)", { size: 16, weight: "700" })}
    ${text(1000, 203, "WebAPI replicas", { size: 12, opacity: 0.7 })}
    
    ${roundedRect(640, 230, 220, 55, 10, COLORS.green, 0.4)}
    ${text(750, 253, "Deployment", { size: 16, weight: "700" })}
    ${text(750, 273, "ATLAS + ConfigMap", { size: 12, opacity: 0.7 })}
    
    ${roundedRect(880, 230, 240, 55, 10, COLORS.orange, 0.4)}
    ${text(1000, 253, "CronJob", { size: 16, weight: "700" })}
    ${text(1000, 273, "ACHILLES weekly", { size: 12, opacity: 0.7 })}
    
    ${roundedRect(640, 300, 480, 45, 10, COLORS.purple, 0.3)}
    ${text(880, 328, "Ingress (Nginx) — TLS/SSL + cert-manager", { size: 15, weight: "600" })}
    
    <!-- Bottom: Operations -->
    ${roundedRect(60, 415, 350, 140, 14, "white", 0.06)}
    ${text(235, 448, "Backup &amp; Restore", { size: 20, weight: "700", fill: COLORS.blue })}
    ${text(235, 478, "pg_dump (nightly cron)", { size: 14, opacity: 0.7 })}
    ${text(235, 500, "30-day retention policy", { size: 14, opacity: 0.7 })}
    ${text(235, 522, "Point-in-time recovery", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(440, 415, 350, 140, 14, "white", 0.06)}
    ${text(615, 448, "Monitoring", { size: 20, weight: "700", fill: COLORS.orange })}
    ${text(615, 478, "Prometheus + postgres_exporter", { size: 14, opacity: 0.7 })}
    ${text(615, 500, "Grafana dashboards", { size: 14, opacity: 0.7 })}
    ${text(615, 522, "Alert rules (disk, conn, query)", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(820, 415, 320, 140, 14, "white", 0.06)}
    ${text(980, 448, "Performance", { size: 20, weight: "700", fill: COLORS.green })}
    ${text(980, 478, "shared_buffers = 4GB", { size: 14, opacity: 0.7 })}
    ${text(980, 500, "Parallel queries (8 workers)", { size: 14, opacity: 0.7 })}
    ${text(980, 522, "CDM indexes + ANALYZE", { size: 14, opacity: 0.7 })}
  `;
  return wrapSVG(content, "Bai 16: OHDSI Stack — Docker &amp; Kubernetes", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// BÀI 17: Network Studies
// ═══════════════════════════════════════════
function bai17() {
  const content = `
    <!-- Study Lead -->
    ${roundedRect(400, 95, 400, 70, 14, COLORS.orange)}
    ${text(600, 125, "Study Lead", { size: 24, weight: "800" })}
    ${text(600, 150, "Protocol + R Study Package", { size: 15, opacity: 0.8 })}
    
    <!-- Distribution arrows -->
    ${arrow(450, 167, 180, 250)}
    ${arrow(600, 167, 600, 250)}
    ${arrow(750, 167, 1020, 250)}
    
    ${text(280, 215, "Code only", { size: 13, fill: COLORS.orange, opacity: 0.7 })}
    ${text(600, 215, "Code only", { size: 13, fill: COLORS.orange, opacity: 0.7 })}
    ${text(900, 215, "Code only", { size: 13, fill: COLORS.orange, opacity: 0.7 })}
    
    <!-- Sites -->
    ${roundedRect(60, 250, 280, 160, 14, COLORS.blue)}
    ${text(200, 285, "Site A (US)", { size: 20, weight: "700" })}
    ${iconBox(80, 300, 120, 35, "CDM", COLORS.teal)}
    ${iconBox(210, 300, 110, 35, "Run", COLORS.green)}
    ${roundedRect(80, 350, 240, 40, 8, "white", 0.1)}
    ${text(200, 375, "12,000 patients", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(400, 250, 400, 160, 14, COLORS.blue)}
    ${text(600, 285, "Site B (South Korea)", { size: 20, weight: "700" })}
    ${iconBox(420, 300, 120, 35, "CDM", COLORS.teal)}
    ${iconBox(670, 300, 110, 35, "Run", COLORS.green)}
    ${roundedRect(420, 350, 360, 40, 8, "white", 0.1)}
    ${text(600, 375, "5,200 patients", { size: 14, opacity: 0.7 })}
    
    ${roundedRect(860, 250, 280, 160, 14, COLORS.blue)}
    ${text(1000, 285, "Site C (Vietnam)", { size: 20, weight: "700" })}
    ${iconBox(880, 300, 120, 35, "CDM", COLORS.teal)}
    ${iconBox(1010, 300, 110, 35, "Run", COLORS.green)}
    ${roundedRect(880, 350, 240, 40, 8, "white", 0.1)}
    ${text(1000, 375, "3,800 patients", { size: 14, opacity: 0.7 })}
    
    <!-- Results back -->
    ${arrow(200, 412, 450, 470)}
    ${arrow(600, 412, 600, 470)}
    ${arrow(1000, 412, 750, 470)}
    
    ${text(290, 455, "Aggregate only", { size: 13, fill: COLORS.green, opacity: 0.7 })}
    ${text(600, 455, "Aggregate only", { size: 13, fill: COLORS.green, opacity: 0.7 })}
    ${text(880, 455, "Aggregate only", { size: 13, fill: COLORS.green, opacity: 0.7 })}
    
    <!-- Meta-analysis -->
    ${roundedRect(350, 470, 500, 70, 14, COLORS.green)}
    ${text(600, 500, "Meta-Analysis", { size: 24, weight: "800" })}
    ${text(600, 525, "Forest Plot + Heterogeneity (I² = 0%)", { size: 15, opacity: 0.8 })}
    
    <!-- Key principle -->
    ${roundedRect(250, 560, 700, 35, 10, COLORS.red, 0.2)}
    ${text(600, 582, "Patient data NEVER leaves the site — Only code &amp; aggregate results are shared", { size: 14, fill: "#F87171" })}
  `;
  return wrapSVG(content, "Bai 17: Network Studies — Nghien cuu Da trung tam", "OHDSI &amp; OMOP CDM Series • xdev.asia");
}

// ═══════════════════════════════════════════
// Main
// ═══════════════════════════════════════════
const diagrams = [
  { fn: bai1, filename: "ohdsi-bai-1-ecosystem-overview.png" },
  { fn: bai2, filename: "ohdsi-bai-2-omop-cdm-structure.png" },
  { fn: bai3, filename: "ohdsi-bai-3-athena-vocabularies.png" },
  { fn: bai4, filename: "ohdsi-bai-4-whiterabbit-rabbit-in-a-hat.png" },
  { fn: bai5, filename: "ohdsi-bai-5-usagi-mapping.png" },
  { fn: bai6, filename: "ohdsi-bai-6-etl-pipeline.png" },
  { fn: bai7, filename: "ohdsi-bai-7-postgresql-cdm-setup.png" },
  { fn: bai8, filename: "ohdsi-bai-8-webapi-architecture.png" },
  { fn: bai9, filename: "ohdsi-bai-9-atlas-overview.png" },
  { fn: bai10, filename: "ohdsi-bai-10-concept-sets-cohorts.png" },
  { fn: bai11, filename: "ohdsi-bai-11-characterization-ir-pathways.png" },
  { fn: bai12, filename: "ohdsi-bai-12-estimation-prediction.png" },
  { fn: bai13, filename: "ohdsi-bai-13-achilles.png" },
  { fn: bai14, filename: "ohdsi-bai-14-dqd.png" },
  { fn: bai15, filename: "ohdsi-bai-15-hades-packages.png" },
  { fn: bai16, filename: "ohdsi-bai-16-docker-kubernetes.png" },
  { fn: bai17, filename: "ohdsi-bai-17-network-studies.png" },
];

async function main() {
  console.log(`Generating ${diagrams.length} OHDSI lesson diagrams to ${outputDir}\n`);

  for (const { fn, filename } of diagrams) {
    const svg = fn();
    const outputPath = path.join(outputDir, filename);
    await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outputPath);
    console.log(`✓ ${filename}`);
  }

  console.log(`\nDone! Generated ${diagrams.length} diagrams.`);
}

main().catch(console.error);
