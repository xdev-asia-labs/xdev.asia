import type { Metadata } from "next";
import { HomePage } from "../page";

export const metadata: Metadata = {
  title: "xDev Asia — 程式設計、AI、DevOps 與技術",
  description: "程式設計、AI、DevOps 與技術的知識分享平台。",
  alternates: { canonical: "/zh-tw/" },
};

export default function Page() {
  return <HomePage locale="zh-tw" />;
}
