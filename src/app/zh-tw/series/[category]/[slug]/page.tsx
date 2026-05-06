import {
  LocalizedSeriesDetailPage,
  localizedSeriesDetailMetadata,
  localizedSeriesDetailStaticParams,
} from "../../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedSeriesDetailStaticParams("zh-tw");
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return localizedSeriesDetailMetadata("zh-tw", params);
}

export default function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return <LocalizedSeriesDetailPage locale="zh-tw" params={params} />;
}
