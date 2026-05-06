import {
  LocalizedTopicPage,
  localizedTopicMetadata,
  localizedTopicStaticParams,
} from "@/app/_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTopicStaticParams("zh-tw");
}

export function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  return localizedTopicMetadata("zh-tw", params);
}

export default function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  return <LocalizedTopicPage locale="zh-tw" params={params} />;
}
