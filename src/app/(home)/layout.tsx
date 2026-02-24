import { useTranslations } from "next-intl";
import Link from "next/link";

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
  ]
return (<>
    <div className="">
        <header className="p-4 flex gap-4">
          {Links.map((it: any, i :any)=> (
            <Link href={it.href} key={i}>
              {it.title}
            </Link>
          ))}
        </header>
        {children}
    </div>
    </>)
}