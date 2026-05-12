#!/usr/bin/env node
/**
 * Inject banner + workflow image references into HIS lessons.
 *
 * For each lesson markdown:
 *   1. Add `featured_image: /storage/uploads/2026/05/his/<slug>-banner.png` to frontmatter
 *      (after the `is_free:` line).
 *   2. Insert a banner image at the very top of the body (after frontmatter).
 *   3. Insert a workflow image right after the FIRST `## ` heading.
 *
 * Idempotent: skips if `featured_image` already non-null OR banner image already present.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const HIS_DIR = path.join(ROOT, "content", "series", "domain", "his", "chapters");

const apply = process.argv.includes("--apply");

// Map: lesson slug stem -> { banner caption, workflow caption }
const CAPTIONS = {
    "bai-3-tiep-nhan-benh-nhan": { b: "Tiếp nhận bệnh nhân — luồng dữ liệu MPI", w: "Quầy tiếp nhận: thẻ CCCD/BHYT, định danh số, đăng ký vào HIS" },
    "bai-4-master-patient-index": { b: "Master Patient Index — bài toán định danh duy nhất", w: "Hợp nhất hồ sơ trùng lặp về một golden record" },
    "bai-5-lich-hen-appointment": { b: "Lịch hẹn — đặt khám đa kênh", w: "Bệnh nhân đặt lịch trên app, slot bác sĩ tự động khớp" },
    "bai-6-kiosk-qms": { b: "Kiosk tự phục vụ & Queue Management", w: "Check-in QR và bảng số thứ tự điện tử" },
    "bai-7-kham-ngoai-tru": { b: "Khám ngoại trú (OPD) — luồng end-to-end", w: "Bác sĩ khám tại phòng khám, EMR và đơn thuốc số hóa" },
    "bai-8-sinh-hieu-template-icd10": { b: "Sinh hiệu, template khám & ICD-10", w: "Đo sinh hiệu, ghi chú template, gắn mã ICD-10" },
    "bai-9-kham-da-chuyen-khoa": { b: "Khám đa chuyên khoa & chuyển khoa nội bộ", w: "Bệnh nhân được referral giữa các chuyên khoa" },
    "bai-10-cap-cuu-tiep-nhan-triage": { b: "Cấp cứu — triage ESI & code y khoa", w: "Triage tại ER với phân tầng ưu tiên ESI" },
    "bai-11-phoi-hop-er-phong-mo-icu": { b: "Handover ER ↔ Phòng mổ ↔ ICU", w: "Bệnh nhân được chuyển nhanh giữa ER, OR, ICU" },
    "bai-12-noi-tru-nhap-vien-phan-giuong": { b: "Nội trú — nhập viện & phân giường", w: "Phân giường theo bản đồ trống/đầy thời gian thực" },
    "bai-13-y-lenh-phat-thuoc-truyen-dich": { b: "Y lệnh điện tử — eMAR & 5 Right", w: "Điều dưỡng quét vòng tay BN trước khi cho thuốc" },
    "bai-14-ra-vien-chuyen-vien-tom-tat": { b: "Ra viện, chuyển viện & tóm tắt HSBA", w: "Trao tóm tắt ra viện, ký số và lưu trữ EMR" },
    "bai-15-order-management": { b: "Order Management — vòng đời y lệnh", w: "Trung tâm điều phối order tới LIS, RIS, PHA" },
    "bai-16-icd-coding": { b: "ICD-10/11 coding & vai trò clinical coder", w: "Coder phân loại chẩn đoán theo cây mã ICD" },
    "bai-17-lis-luong-xet-nghiem": { b: "LIS — luồng xét nghiệm end-to-end", w: "Mẫu máu từ lấy → analyzer → kết quả với critical value" },
    "bai-18-vi-sinh-khang-sinh-do-ams": { b: "Vi sinh, kháng sinh đồ & AMS", w: "Đọc kháng sinh đồ S/I/R và dashboard AMS" },
    "bai-19-ris-luong-cdha": { b: "RIS — quy trình chẩn đoán hình ảnh", w: "Phòng CT/MR và phòng đọc hình của bác sĩ" },
    "bai-20-pacs-dicom-viewer-luu-tru": { b: "PACS — lưu trữ và xem DICOM", w: "Workstation PACS với so sánh prior/current" },
    "bai-21-ai-trong-cdha": { b: "AI trong chẩn đoán hình ảnh", w: "Heatmap AI gợi ý vùng bất thường trên ảnh" },
    "bai-22-pharmacy-ke-don-duyet-cap-phat": { b: "Pharmacy — kê đơn, duyệt, cấp phát", w: "Bác sĩ kê đơn → dược sĩ duyệt → phát thuốc" },
    "bai-23-tuong-tac-thuoc-cds": { b: "Tương tác thuốc & CDS cảnh báo", w: "Cảnh báo DDI severity nghiêm trọng trên màn hình kê đơn" },
    "bai-24-kho-duoc-chuoi-cung-ung": { b: "Kho dược, FEFO & chuỗi cung ứng", w: "Kho dược với cold-chain và quét barcode hạn dùng" },
    "bai-25-phong-mo-lich-mo-checklist": { b: "Phòng mổ — lịch mổ & WHO checklist", w: "Time-out trước rạch da theo WHO Surgical Safety Checklist" },
    "bai-26-vat-tu-bhyt-gpb": { b: "Vật tư phòng mổ, BHYT & giải phẫu bệnh", w: "Đếm vật tư surgery và đóng gói mẫu GPB" },
    "bai-27-san-khoa-thai-san": { b: "Sản khoa & quản lý thai sản", w: "Khám thai với CTG và siêu âm thai" },
    "bai-28-tiem-chung-vaccine": { b: "Tiêm chủng & sổ tiêm điện tử", w: "Tiêm vaccine và đẩy lên sổ tiêm chủng quốc gia" },
    "bai-29-ivf-y-hoc-hat-nhan": { b: "IVF & Y học hạt nhân", w: "Lab IVF với phôi và phòng PET/SPECT" },
    "bai-30-emr-tt46-bo-giay": { b: "EMR — chuyển đổi từ HSBA giấy sang điện tử", w: "Bác sĩ đóng hồ sơ giấy, mở EMR trên tablet" },
    "bai-31-mra-luu-tru-hsba": { b: "MRA — lưu trữ HSBA hết liệu trình", w: "Phòng lưu trữ HSBA giấy + vault điện tử" },
    "bai-32-chu-ky-so-audit-log": { b: "Chữ ký số & audit log y khoa", w: "Bác sĩ ký số bằng smart-card, timeline audit" },
    "bai-33-vien-phi-kien-truc": { b: "Viện phí — kiến trúc & nguồn chi trả", w: "Quầy thu ngân tách BHYT / dịch vụ / BH tư" },
    "bai-34-bhyt-giam-dinh-xml-4210": { b: "BHYT — giám định & XML 4210", w: "Giám định viên BHYT soi từng dòng phí trên claim" },
    "bai-35-hoa-don-dien-tu-nd123": { b: "Hóa đơn điện tử theo NĐ 123/2020", w: "Hóa đơn điện tử ký số gửi cơ quan thuế" },
    "bai-36-bao-hiem-tu-nhan-eclaim": { b: "Bảo hiểm tư nhân & eClaim", w: "Form claim auto-fill từ EMR cho hãng bảo hiểm" },
    "bai-37-kho-vat-tu-y-te": { b: "Kho VTYT & quản lý tồn kho", w: "Kho VTYT với barcode và dashboard tồn kho" },
    "bai-38-trang-thiet-bi-y-te": { b: "Trang thiết bị y tế — vòng đời", w: "Kỹ sư BME bảo trì máy CT có QR asset tag" },
    "bai-39-mua-sam-dau-thau": { b: "Mua sắm & đấu thầu thuốc/TTB", w: "Tổ thẩm định mở thầu, đánh giá hồ sơ" },
    "bai-40-dinh-duong-suat-an": { b: "Dinh dưỡng lâm sàng & suất ăn", w: "Dietitian lên thực đơn, bếp BV chuẩn bị suất" },
    "bai-41-ngan-hang-mau": { b: "Ngân hàng máu & cross-match", w: "Kỹ thuật viên cross-match máu cho BN" },
    "bai-42-qlcl-su-co-y-khoa": { b: "QLCL — sự cố y khoa NC1–NC5 & RCA", w: "Tổ QLCL phân tích RCA bằng fishbone diagram" },
    "bai-43-khao-sat-hai-long": { b: "Khảo sát hài lòng & NPS", w: "BN đánh giá hài lòng khi ra viện trên tablet" },
    "bai-44-bao-cao-tt32": { b: "Báo cáo Bộ Y tế theo TT 32/2023", w: "Đẩy XML báo cáo lên cổng Bộ Y tế" },
    "bai-45-dashboard-bi": { b: "Dashboard BI cho lãnh đạo BV", w: "Giám đốc xem dashboard KPI hoạt động/tài chính/chất lượng" },
    "bai-46-hie-hssk-lien-thong": { b: "HIE & liên thông HSSK quốc gia", w: "Các BV kết nối tới HSSK qua FHIR Bundle" },
    "bai-47-mobile-app": { b: "Mobile app cho bệnh nhân & bác sĩ", w: "BN dùng app, BS xem worklist trên điện thoại" },
    "bai-48-van-hanh-247-dr-downtime": { b: "Vận hành 24/7, DR & downtime", w: "NOC theo dõi 24/7 và DR site mirror dữ liệu" },
};

function processFile(filePath) {
    const raw = fs.readFileSync(filePath, "utf8");
    const slugMatch = raw.match(/^slug:\s*(.+)$/m);
    if (!slugMatch) return { file: filePath, skipped: "no slug" };
    const slug = slugMatch[1].trim();
    const cap = CAPTIONS[slug];
    if (!cap) return { file: filePath, skipped: `no caption for ${slug}` };

    const bannerPath = `/storage/uploads/2026/05/his/${slug}-banner.png`;
    const workflowPath = `/storage/uploads/2026/05/his/${slug}-workflow.png`;

    // Already processed?
    if (raw.includes(bannerPath)) return { file: filePath, skipped: "already injected" };

    let updated = raw;

    // 1. Update featured_image in frontmatter
    if (/^featured_image:\s*null\s*$/m.test(updated)) {
        updated = updated.replace(/^featured_image:\s*null\s*$/m, `featured_image: ${bannerPath}`);
    } else if (!/^featured_image:/m.test(updated)) {
        // Insert after is_free line
        updated = updated.replace(
            /^(is_free:\s*[^\n]+)$/m,
            `$1\nfeatured_image: ${bannerPath}`
        );
    }

    // 2. Split frontmatter from body
    const fmMatch = updated.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) return { file: filePath, skipped: "no frontmatter" };
    const fm = fmMatch[1];
    let body = fmMatch[2];

    // 3. Insert banner image at top of body
    const bannerEmbed = `\n![${cap.b}](${bannerPath})\n`;
    // Insert before first content
    body = bannerEmbed + body.replace(/^\n+/, "\n");

    // 4. Insert workflow image after first ## heading
    const workflowEmbed = `\n![${cap.w}](${workflowPath})\n\n`;
    const headingRe = /^(## [^\n]+)\n/m;
    if (headingRe.test(body)) {
        body = body.replace(headingRe, `$1\n${workflowEmbed}`);
    } else {
        body += `\n${workflowEmbed}`;
    }

    updated = `---\n${fm}\n---\n${body}`;

    if (apply) {
        fs.writeFileSync(filePath, updated, "utf8");
    }
    return { file: filePath, applied: true, slug };
}

function walk(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...walk(p));
        else if (entry.isFile() && p.endsWith(".md")) out.push(p);
    }
    return out;
}

const files = walk(HIS_DIR).sort();
let applied = 0, skipped = 0;
for (const f of files) {
    const r = processFile(f);
    if (r.applied) {
        applied++;
        console.log(`  ✓ ${path.relative(ROOT, f)}`);
    } else {
        skipped++;
        console.log(`  - ${path.relative(ROOT, f)}: ${r.skipped}`);
    }
}
console.log(`\n${apply ? "APPLIED" : "DRY-RUN"}: ${applied} files modified, ${skipped} skipped`);
if (!apply) console.log("Run with --apply to write changes");
