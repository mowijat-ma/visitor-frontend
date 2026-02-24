import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  const t = useTranslations("layout")
  const Links = [
    {
      id: 1, 
      title: "Home",
      href: "/"
    },
    {
      id: 2, 
      title: "News",
      href: "/news"
    },
    {
      id: 3, 
      title: "cinema world",
      href: "/cinema/world"
    },
    {
      id: 4, 
      title: "cinema arabe",
      href: "/cinema/arabe"
    },
    {
      id: 5, 
      title: "cinema morrocan",
      href: "/cinema/morrocan"
    },
    {
      id: 6, 
      title: "Interviews",
      href: "/interviews"
    },
    {
      id: 7, 
      title: "critic",
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
        Not found
    </div>
    </>)
}