import type { Metadata } from "next";
import { HomePage } from "../page";

export const metadata: Metadata = {
  title: "xDev Asia — Programming, AI, DevOps & Technology",
  description: "Knowledge sharing platform for programming, AI, DevOps and technology.",
  alternates: { canonical: "/en/" },
};

export default function Page() {
  return <HomePage locale="en" />;
}
