import { LocalizedSeriesPage, localizedSeriesMetadata } from "../../_localized/pages";

export const metadata = localizedSeriesMetadata("en");

export default function Page() {
  return <LocalizedSeriesPage locale="en" />;
}
