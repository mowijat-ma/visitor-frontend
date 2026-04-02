import Footer from "@/components/layout/footer"
import Header from "@/components/layout/Header"
import HeaderMobile from "@/components/layout/Header/Mobile"
import { useTranslations } from "next-intl"
import './style.css'
import Link from "next/link"
import TopHeader from "@/components/layout/Header/TopHeader"
import ScrollToTop from "@/components/layout/ScrollToTop"

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
      title: t("cinema_morrocan"),
      href: "/cinema/morrocan"
    },
    {
      title: t("cinema_arabe"),
      href: "/cinema/arabe"
    },
    {
      title: t("cinema_world"),
      href: "/cinema/world"
    },
    {
      title: t("events"),
      href: "/events",
    },
    {
      title: t("interviews"),
      href: "/interviews",

    },
    {
      title: t("critic"),
      href: "/critic"
    },
    {
      title: t("calendar"),
      href: "/calendar"
    },
    {
      title: t("other"),
      // href: "/others"
      items: [
        {
          title: t("theater"),
          href: "/theater"
        },
        {
          title: t("paint"),
          href: "/paint"
        },
        {
          title: t("music"),
          href: "/music"
        },
      ]
    },

  ]
  return (<>
    <div className="flex flex-col h-screen">
      {/* Logo Header */}

      <div className="overflow-scroll">
        <TopHeader />
        <div className="sticky top-0 bg-background border-b">
          <Header links={menu} />
        </div>

        <main className="lg:max-w-7xl max-w-3xl mx-auto w-full grow bg-muted- mt-4 sm:pt-0">
          {children}
        </main>
        <ScrollToTop />
        <Footer links={Links} />

      </div>
      {/* Sticky Navigation */}
      <HeaderMobile />
    </div>
  </>)
}
