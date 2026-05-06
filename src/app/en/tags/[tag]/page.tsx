import {
  LocalizedTagDetailPage,
  localizedTagMetadata,
  localizedTagStaticParams,
} from "@/app/_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTagStaticParams("en");
}

export function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  return localizedTagMetadata("en", params);
}

export default function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  return <LocalizedTagDetailPage locale="en" params={params} />;
}
