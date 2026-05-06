import { LocalizedBlogPage, localizedBlogMetadata } from "../../_localized/pages";

export const metadata = localizedBlogMetadata("zh-tw");

export default function Page() {
  return <LocalizedBlogPage locale="zh-tw" />;
}
