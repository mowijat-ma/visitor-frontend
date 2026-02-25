import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = ({links}: any)=>{
    if(links) 
    return (<>
     <header className="py-4 flex max-w-5xl mx-auto justify-between items-center ">
       <nav className="flex gap-4  justify-start">
          {links.map((it: any, i :any)=> (
            <Link href={it.href} key={i} className=" m-0 p-0">
              {it.title}
            </Link>
          ))}

          </nav>
          <Button>Search</Button>
        </header>
    </>)
}

export default Header