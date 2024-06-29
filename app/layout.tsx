import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Rede de doações",
  description: "Rede de doações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-w-screen flex min-h-screen flex-col">
            <Header />
            <div className="flex-center relative mx-auto h-full w-full max-w-[1024px] flex-1 flex-col px-5 py-20">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
