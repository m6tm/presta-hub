import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Presta HUB",
  description: "Le meilleur hub pour les professioonels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          defaultTheme="dark">
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
