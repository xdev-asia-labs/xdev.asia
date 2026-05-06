import { LocalizedLessonPage } from "../../../_localized/pages";
import { getSeriesLessonSlugs } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeriesLessonSlugs().map(({ seriesSlug, lessonSlug }) => ({
    seriesSlug,
    lessonSlug,
  }));
}

export default function Page({
  params,
}: {
  params: Promise<{ seriesSlug: string; lessonSlug: string }>;
}) {
  return <LocalizedLessonPage locale="vi" params={params} />;
}
