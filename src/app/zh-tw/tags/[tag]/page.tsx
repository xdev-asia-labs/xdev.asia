import {
  LocalizedTagDetailPage,
  localizedTagMetadata,
  localizedTagStaticParams,
} from "@/app/_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTagStaticParams("zh-tw");
}

export function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  return localizedTagMetadata("zh-tw", params);
}

export default function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  return <LocalizedTagDetailPage locale="zh-tw" params={params} />;
}
