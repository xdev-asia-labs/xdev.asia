import { LocalizedTagsPage, localizedTagsMetadata } from "@/app/_localized/pages";

export const metadata = localizedTagsMetadata("en");

export default function TagsPage() {
  return <LocalizedTagsPage locale="en" />;
}
