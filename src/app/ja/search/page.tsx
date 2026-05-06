import { LocalizedSearchPage } from "../../_localized/pages";

export const metadata = {
  title: "検索",
  description: "xDev の記事、シリーズ、コンテンツを検索します。",
};

export default function Page() {
  return <LocalizedSearchPage locale="ja" />;
}
