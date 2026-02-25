import { Button } from "@/components/ui/button"
import Link from "next/link"

const Footer = ({links}: any)=>{
    if(links) 
    return (<>
     <footer>
        <div className="max-w-5xl mx-auto border-t-muted- py-4 border">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vero soluta dolorum maxime accusantium modi officia natus temporibus? Vitae dicta dolores, sit velit cupiditate fugit amet magnam. Esse, repellendus natus.
        </div>
     </footer>
    </>)
}

export default Footer