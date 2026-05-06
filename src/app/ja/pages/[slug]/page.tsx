import {
  LocalizedStaticPage,
  localizedStaticPageMetadata,
  localizedStaticPageParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedStaticPageParams();
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return localizedStaticPageMetadata("ja", params);
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <LocalizedStaticPage locale="ja" params={params} />;
}
