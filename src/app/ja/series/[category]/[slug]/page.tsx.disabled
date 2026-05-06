import {
  LocalizedSeriesDetailPage,
  localizedSeriesDetailMetadata,
  localizedSeriesDetailStaticParams,
} from "../../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedSeriesDetailStaticParams("ja");
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return localizedSeriesDetailMetadata("ja", params);
}

export default function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return <LocalizedSeriesDetailPage locale="ja" params={params} />;
}
