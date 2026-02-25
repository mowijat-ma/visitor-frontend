import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Header = ({links}: any)=>{
    if(links) 
    return (<>
     <header className="">
        <div className="">
          <Image src={"/logo-ligt.png"} alt="logo" width={100} height={100}/>
        </div>
       
       <div className="max-w-5xl mx-auto flex justify-between ">
        <nav className="flex gap-4 justify-start">
          {links.map((it: any, i :any)=> (
            <Link href={it.href} key={i} className="m-0 p-4">
              {it.title}
            </Link>
          ))}

          </nav>
          {/* <Button>Search</Button> */}
       </div>
        </header>
    </>)
}

export default Header