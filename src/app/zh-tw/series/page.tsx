import { LocalizedSeriesPage, localizedSeriesMetadata } from "../../_localized/pages";

export const metadata = localizedSeriesMetadata("zh-tw");

export default function Page() {
  return <LocalizedSeriesPage locale="zh-tw" />;
}
