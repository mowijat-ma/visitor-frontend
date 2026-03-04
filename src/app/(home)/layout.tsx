import Footer from "@/components/layout/footer"
import Header from "@/components/layout/Header"
import HeaderMobile from "@/components/layout/Header/Mobile"
import { useTranslations } from "next-intl"
import './style.css'
import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {

  const t = useTranslations("layout.navLinks")

  const Links = [
    {
      id: 1,
      title: t("home"),
      href: "/"
    },
    {
      id: 2,
      title: t("news"),
      href: "/news"
    },
    {
      id: 3,
      title: t("cinema_world"),
      href: "/cinema/world"
    },
    {
      id: 4,
      title: t("cinema_arabe"),
      href: "/cinema/arabe"
    },
    {
      id: 5,
      title: t("cinema_morrocan"),
      href: "/cinema/morrocan"
    },
    {
      id: 6,
      title: t("interviews"),
      href: "/interviews"
    },
    {
      id: 7,
      title: t("critic"),
      href: "/critic"
    },
    {
      id: 7,
      title: t("calendar"),
      href: "/calendar"
    },
  ]
  const menu = [
    {
      title: t("home"),
      href: "/"
    },
    {
      title: t("news"),
      href: "/news"
    },
    {
      title: t("cinema_world"),
      href: "/cinema/world"
    },
    {
      title: t("cinema_arabe"),
      href: "/cinema/arabe"
    },
    {
      title: t("cinema_morrocan"),
      href: "/cinema/morrocan"
    },
    {
      title: t("interviews"),
      href: "/interviews",
      items: [""]
    },
    {
      title: t("critic"),
      href: "/critic"
    },
    {
      title: t("calendar"),
      href: "/calendar"
    },

  ]
  return (<>
    <div className="flex flex-col h-screen">
      {/* Logo Header */}
      <div className="border-b bg-background">
        <div className="lg:max-w-5xl max-w-3xl mx-auto w-full flex items-center justify-between px-4 sm:px-0 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logos/logo_light.png" 
              className="h-10 dark:invert" 
              alt="Mowijat Logo" 
            />
            <span className="hidden sm:block text-lg font-semibold">موجات</span>
          </Link>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <Header links={menu} />
        <HeaderMobile />
      </div>

      <main className="lg:max-w-5xl max-w-3xl mx-auto w-full grow bg-muted- mt-4 sm:pt-0">
        {children}
      </main>
      <Footer links={Links} />
    </div>
  </>)
}
