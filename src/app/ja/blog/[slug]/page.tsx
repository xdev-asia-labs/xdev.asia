import {
  LocalizedBlogPostPage,
  localizedBlogPostMetadata,
  localizedBlogStaticParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBlogStaticParams("ja");
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return localizedBlogPostMetadata("ja", params);
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <LocalizedBlogPostPage locale="ja" params={params} />;
}
