import type { Metadata } from "next";
import LocaleStubPage, { buildLocaleStubMetadata } from "@/components/LocaleStubPage";

export const metadata: Metadata = buildLocaleStubMetadata("zh-tw");

export default function Page() {
  return <LocaleStubPage locale="zh-tw" />;
}
