import {
  LocalizedBlogPostPage,
  localizedBlogPostMetadata,
  localizedBlogStaticParams,
} from "../../../_localized/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBlogStaticParams("en");
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return localizedBlogPostMetadata("en", params);
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <LocalizedBlogPostPage locale="en" params={params} />;
}
