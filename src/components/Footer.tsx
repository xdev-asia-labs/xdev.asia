import { getSettings } from "@/lib/data";
import FooterClient, { type FooterStrings } from "./FooterClient";

export type { FooterStrings };

const DEFAULT_STRINGS: FooterStrings = {
    tagline: "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ.",
    explore: "Khám phá",
    contact: "Liên hệ",
    blog: "Bài viết",
    series: "Khoá học",
    exam_prep: "Luyện thi",
    saved: "Đã lưu",
    search: "Tìm kiếm",
    rights: "All rights reserved.",
    privacy: "Chính sách quyền riêng tư",
    terms: "Điều khoản sử dụng",
    data_deletion: "Xoá dữ liệu",
};

export default function Footer({
    strings = DEFAULT_STRINGS,
    localePrefix = "",
}: {
    strings?: FooterStrings;
    localePrefix?: string;
} = {}) {
    const settings = getSettings();
    return <FooterClient settings={settings} strings={strings} localePrefix={localePrefix} />;
}
