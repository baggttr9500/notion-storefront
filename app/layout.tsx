import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion Template Storefront",
  description: "Aesthetic & Functional Notion Dashboards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#09090b] text-zinc-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
