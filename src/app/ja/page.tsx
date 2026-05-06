import type { Metadata } from "next";
import { HomePage } from "../page";

export const metadata: Metadata = {
  title: "xDev Asia — プログラミング、AI、DevOps、テクノロジー",
  description: "プログラミング、AI、DevOps、テクノロジーの知識共有プラットフォーム。",
  alternates: { canonical: "/ja/" },
};

export default function Page() {
  return <HomePage locale="ja" />;
}
