import {
  LocalizedSeriesCategoryPage,
  localizedSeriesCategoryStaticParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedSeriesCategoryStaticParams("ja");
}

export default function Page({ params }: { params: Promise<{ category: string }> }) {
  return <LocalizedSeriesCategoryPage locale="ja" params={params} />;
}
