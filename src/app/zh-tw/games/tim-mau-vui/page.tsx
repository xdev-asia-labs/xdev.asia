import TimMauVuiPage, { getTimMauVuiMetadata } from "../../../games/tim-mau-vui/TimMauVuiPage";

export const metadata = getTimMauVuiMetadata("zh-tw");

export default function Page() {
  return <TimMauVuiPage locale="zh-tw" />;
}
