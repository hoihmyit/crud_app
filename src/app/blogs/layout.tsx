import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs List",
  description: "Blog CRUD",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
