import { cn } from "@/lib/utils"
import { Logo, LogoImage } from "@/components/logo"
import Link from "next/link"
import { Separator } from "./ui/separator"

interface MenuItem {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/logos/logo_light.png",
    alt: "blocks for shadcn/ui",
    title: "مويجات | سينما و ثقافة",
    url: "https://www.shadcnblocks.com",
  },
  className,
  tagline = "",
  menuItems = [],
  copyright = "© 2026 جميع الحقوق محفوظة.",
  bottomLinks = [],
}: Footer2Props) => {
  return (
    <section className={cn("mt-40 px-10 md:px-0", className)}>
      <div className="">
        <footer className="pt-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 text-center sm:text-start">
            
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-4 flex flex-col">
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground ">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium group w-full"
                    >
                      <Link href={link.href} className="group-hover:text-primary group-hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-4 sm:mb-8 lg:mb-0 flex flex-col items-center sm:items-end justify-start">
              <Logo url="/" className="flex items-center gap-2">
                <LogoImage
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 sm:h-32"
                />
              </Logo>
              {tagline && <p className="mt-4 text-sm font-medium text-muted-foreground text-left">{tagline}</p>}
            </div>
          </div>
          <Separator role="presentation" className="my-4 sm:my-10" />
          <div className="flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center text-center sm:text-start">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
