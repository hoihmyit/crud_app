import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "View detail blogs",
  description: "View detail",
};

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
