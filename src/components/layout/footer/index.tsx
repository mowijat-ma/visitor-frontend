import { Footer1 } from "@/components/footer-1"
import { Footer2 } from "@/components/footer2"
import InstallButton from "@/components/PWAButton"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Footer = ({ links }: any) => {
  const t = useTranslations('layout')
  const menuItems = [
    {
      title: t("footer.mowijat"),
      links: [
        {
          title: t('otherLinks.about_'),
          href: "",
        },
        {
          title: t('otherLinks.contact_us'),
          href: "",
        },
        {
          title: t('otherLinks.publish_in'),
          href: "",
        },
        {
          title: t('otherLinks.terms'),
          href: "",
        },
        {
          title: t('otherLinks.team'),
          href: "",
        }
      ]
    },
    {
      title: t("footer.quickLinks"),
      links: [
        // {
        //   id: 1,
        //   title: t("navLinks.home"),
        //   href: "/"
        // },
        {
          id: 2,
          title: t("navLinks.news"),
          href: "/news"
        },
        {
          id: 3,
          title: t("navLinks.cinema_world"),
          href: "/cinema/world"
        },
        {
          id: 4,
          title: t("navLinks.cinema_arabe"),
          href: "/cinema/arabe"
        },
        {
          id: 5,
          title: t("navLinks.cinema_morrocan"),
          href: "/cinema/morrocan"
        },
        {
          id: 6,
          title: t("navLinks.interviews"),
          href: "/interviews"
        },
        {
          id: 7,
          title: t("navLinks.critic"),
          href: "/critic"
        },
        {
          id: 7,
          title: t("navLinks.calendar"),
          href: "/calendar"
        },
      ]
    },
    

  ]
  if (links)

    return (<>
      <footer className="pb-20
       sm:pb-0">
        <div className="max-w-5xl mx-auto py-4">
          {/* <Footer1 /> */}
          <Footer2 menuItems={menuItems} tagline={t('footer.tagline')} />
        </div>

      </footer>
    </>)
}

export default Footer