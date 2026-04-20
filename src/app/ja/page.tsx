import type { Metadata } from "next";
import LocaleStubPage, { buildLocaleStubMetadata } from "@/components/LocaleStubPage";

export const metadata: Metadata = buildLocaleStubMetadata("ja");

export default function Page() {
  return <LocaleStubPage locale="ja" />;
}
