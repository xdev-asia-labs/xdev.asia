import { LocalizedBlogPage, localizedBlogMetadata } from "../../_localized/pages";

export const metadata = localizedBlogMetadata("ja");

export default function Page() {
  return <LocalizedBlogPage locale="ja" />;
}
