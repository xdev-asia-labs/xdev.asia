import { LocalizedTagsPage, localizedTagsMetadata } from "@/app/_localized/pages";

export const metadata = localizedTagsMetadata("ja");

export default function TagsPage() {
  return <LocalizedTagsPage locale="ja" />;
}
