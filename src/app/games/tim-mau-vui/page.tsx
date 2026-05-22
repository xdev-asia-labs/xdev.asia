import TimMauVuiPage, { getTimMauVuiMetadata } from "./TimMauVuiPage";

export const metadata = getTimMauVuiMetadata("vi");

export default function Page() {
  return <TimMauVuiPage locale="vi" />;
}
