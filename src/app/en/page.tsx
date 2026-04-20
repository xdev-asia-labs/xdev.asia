import type { Metadata } from "next";
import LocaleStubPage, { buildLocaleStubMetadata } from "@/components/LocaleStubPage";

export const metadata: Metadata = buildLocaleStubMetadata("en");

export default function Page() {
  return <LocaleStubPage locale="en" />;
}
