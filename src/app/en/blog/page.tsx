import { LocalizedBlogPage, localizedBlogMetadata } from "../../_localized/pages";

export const metadata = localizedBlogMetadata("en");

export default function Page() {
  return <LocalizedBlogPage locale="en" />;
}
