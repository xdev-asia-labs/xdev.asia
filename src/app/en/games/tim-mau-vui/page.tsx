import TimMauVuiPage, { getTimMauVuiMetadata } from "../../../games/tim-mau-vui/TimMauVuiPage";

export const metadata = getTimMauVuiMetadata("en");

export default function Page() {
  return <TimMauVuiPage locale="en" />;
}
