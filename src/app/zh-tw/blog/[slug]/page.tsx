import {
  LocalizedBlogPostPage,
  localizedBlogPostMetadata,
  localizedBlogStaticParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBlogStaticParams("zh-tw");
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return localizedBlogPostMetadata("zh-tw", params);
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <LocalizedBlogPostPage locale="zh-tw" params={params} />;
}
