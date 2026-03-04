"use client";

import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Separator } from "./ui/separator";


import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareInstagram, FaThreads } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logos/logo_light.png",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    
  ],
  className,
}: Navbar1Props) => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(true)
  const onClose = () => {
    setOpen(false)
  }


  const otherLinks = [
    {
      title: t('layout.otherLinks.about_'),
      href: "/about-us",
    },
    {
      title: t('layout.otherLinks.contact_us'),
      href: "/contact-us",
    },
    {
      title: t('layout.otherLinks.publish_in'),
      href: "",
    },
    {
      title: t('layout.otherLinks.terms'),
      href: "/terms",
    },
    {
      title: t('layout.otherLinks.team'),
      href: "/team",
    }
  ]
  return (
    <section className={cn("py-4 w-full max-w-5xl mx-auto border-b", className)}>
      <div className="">
        {/* Middle Menu */}

        <nav className="justify-between items-center hidden sm:flex lg:hidden mb-4">
          <a href={logo.url} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            {/* <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span> */}
          </a>
          <form action="">
            <InputGroup className="bg-muted rounded-full px-2">
              <InputGroupInput placeholder={t("ui.search")} className=" m-0 p-0 w-full" />
              <InputGroupAddon>
                <MagnifyingGlassIcon />
              </InputGroupAddon>
              {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
            </InputGroup>
          </form>
          <div className="flex gap-2">
            <IconContext.Provider value={{ size: '20', className: "text-muted-forground- text-black/80" }}>

              <Link href={""}>
                <FaThreads className="text-black/60" />
              </Link>
              <Link href={""}>
                <FaSquareInstagram />
              </Link>
              <Link href={""}>
                <FaFacebook />
              </Link>


            </IconContext.Provider>

          </div>
        </nav>
        {/* Desktop Menu */}
        <nav className="items-center justify-between lg:flex hidden">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="items-center gap-2 flex md:hidden lg:flex">
              <img
                src={logo.src}
                className="max-h-8 max-w-8 dark:invert"
                alt={logo.alt}
              />
              {/* <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span> */}
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="flex">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden lg:flex gap-2 justify-end items-center">
            {/* <form action="">
              <InputGroup className="bg-muted rounded-full px-2" onClick={() => setOpenSearch(true)}>
                {openSearch &&
                  <InputGroupInput placeholder={t("ui.search")} className="m-0 p-0 w-full" />
                }
                <InputGroupAddon>
                  <MagnifyingGlassIcon />
                </InputGroupAddon>
              </InputGroup>
            </form> */}
            
            <div className="hidden lg:flex gap-2">
              <IconContext.Provider value={{ size: '20', className: "text-muted-forground" }}>

                <FaThreads />
                <FaSquareInstagram />
                <FaFacebook />


              </IconContext.Provider>

            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block sm:hidden fixed top-0 py-4 bg-white z-10 border-b">
          <div className="px-4 sm:px-0 flex gap-4 flex-row-reverse items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="dark:invert max-h-16"
                alt={logo.alt}
              />
            </a>
            <form action="">
              <InputGroup className="bg-muted rounded-full px-2">
                <InputGroupInput placeholder={t("ui.search")} className=" m-0 p-0" />
                <InputGroupAddon>
                  <MagnifyingGlassIcon />
                </InputGroupAddon>
                {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
              </InputGroup>
            </form>
            <Sheet >
              <SheetTrigger asChild onClick={() => setOpen(!open)}>
                <Button variant="outline" size="icon" className="border-none">
                  <Menu className="size-7 font-thin" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto ">
                <SheetHeader>
                  <SheetTitle className="">
                    {/* <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a> */}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => (renderMobileMenuItem(item, onClose)))}
                  </Accordion>

                  <Separator />

                  <div className="flex flex-col gap-3">
                    {otherLinks.map((item) => (
                      <Link href={item.href} className="text-md font-semibold">
                        {item.title}
                      </Link>
                    ))}
                    {/* <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button> */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

  if (item.items && item.items.length>0 ) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className={cn(
              'lex px-4 py-2 font-semibold hover:bg-background',
             )}
              >{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.href}
        className={cn(
          "font-semibold group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-accent-foreground",
          isActive ? "text-primary" : "",

        )}
        
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, Close: Function) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md font-semibold hover:no-underline">
          <span className="[data-state=open]:text-primary">
            {item.title}
          </span>
        </AccordionTrigger>
        <AccordionContent className="mt-2 bg-muted rounded">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>

      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.href} className="text-md font-semibold" onClick={() => Close()}>
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.href}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };


export const SearchForm = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  )
}
