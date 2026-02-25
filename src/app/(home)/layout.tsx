import Header from "@/components/layout/Header";
import { useTranslations } from "next-intl";

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
       <Header links={Links}/>
        <main className="max-w-5xl mx-auto">
          {children}
        </main>
    </div>
    </>)
}