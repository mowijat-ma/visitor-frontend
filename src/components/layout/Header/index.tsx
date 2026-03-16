import { Navbar1 } from "@/components/navbar"

interface HeaderProps {
  links?: Array<{
    title: string
    href?: string
    items?: Array<{ title: string; href: string }>
  }>
}

const Header = ({ links }: HeaderProps) => {
  return <Navbar1 menu={links} />
}

export default Header
