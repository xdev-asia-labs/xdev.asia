import {
  LocalizedTagDetailPage,
  localizedTagMetadata,
  localizedTagStaticParams,
} from "@/app/_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTagStaticParams("ja");
}

export function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  return localizedTagMetadata("ja", params);
}

export default function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  return <LocalizedTagDetailPage locale="ja" params={params} />;
}
