import {
  LocalizedSeriesCategoryPage,
  localizedSeriesCategoryStaticParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedSeriesCategoryStaticParams("zh-tw");
}

export default function Page({ params }: { params: Promise<{ category: string }> }) {
  return <LocalizedSeriesCategoryPage locale="zh-tw" params={params} />;
}
