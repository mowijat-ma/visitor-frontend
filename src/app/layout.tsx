import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { NextIntlClientProvider, useLocale } from "next-intl";
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
  variable: '--font-amiri', // This creates a CSS variable
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
  const locale = useLocale(); 
  const direction  = locale === "ar" ? 'rtl' : 'rtl'
  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${geistSans.className} ${amiri.variable} ${ibmArabic.variable} font-classic antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider >
          <DirectionProvider dir={direction}>
          {children}
              {/* Your app content */}
          </DirectionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
