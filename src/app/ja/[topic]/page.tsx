import {
  LocalizedTopicPage,
  localizedTopicMetadata,
  localizedTopicStaticParams,
} from "@/app/_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTopicStaticParams("ja");
}

export function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  return localizedTopicMetadata("ja", params);
}

export default function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  return <LocalizedTopicPage locale="ja" params={params} />;
}
