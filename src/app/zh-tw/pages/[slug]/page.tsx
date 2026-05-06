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
  return localizedStaticPageMetadata("zh-tw", params);
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <LocalizedStaticPage locale="zh-tw" params={params} />;
}
