import TimMauVuiPage, { getTimMauVuiMetadata } from "../../../games/tim-mau-vui/TimMauVuiPage";

export const metadata = getTimMauVuiMetadata("ja");

export default function Page() {
  return <TimMauVuiPage locale="ja" />;
}
