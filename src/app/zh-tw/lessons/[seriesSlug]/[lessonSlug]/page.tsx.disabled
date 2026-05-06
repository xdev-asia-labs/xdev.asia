import { LocalizedLessonPage, localizedLessonStaticParams } from "../../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLessonStaticParams("zh-tw");
}

export default function Page({
  params,
}: {
  params: Promise<{ seriesSlug: string; lessonSlug: string }>;
}) {
  return <LocalizedLessonPage locale="zh-tw" params={params} />;
}
