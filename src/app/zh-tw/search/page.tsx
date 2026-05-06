import { LocalizedSearchPage } from "../../_localized/pages";

export const metadata = {
  title: "搜尋",
  description: "搜尋 xDev 上的文章、課程與內容。",
};

export default function Page() {
  return <LocalizedSearchPage locale="zh-tw" />;
}
