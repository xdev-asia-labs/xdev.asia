import { LocalizedTagsPage, localizedTagsMetadata } from "@/app/_localized/pages";

export const metadata = localizedTagsMetadata("zh-tw");

export default function TagsPage() {
  return <LocalizedTagsPage locale="zh-tw" />;
}
