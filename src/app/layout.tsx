import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Amiri, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { DirectionProvider } from "@/components/ui/direction"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "مويجات | سينما و ثقافة",
  description: "نغوصُ في أعماق الفن السابع لنستخلص جوهر الفكر.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-amiri',
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '700'],
  variable: '--font-ibm',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: useLocale must be used in client component, but we can get it from the HTML
  // The direction is set via suppressHydrationWarning prop
  const direction = "ltr";

  return (
    <html lang="ar" dir={direction} suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${amiri.variable} ${ibmArabic.variable} font-classic antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <DirectionProvider dir={direction}>
              {children}
            </DirectionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
