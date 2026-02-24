import { getWpPosts } from "../api/posts";
import './style.css'
export default async function HomePage (){
    const res = await getWpPosts()
    return (
        <>
        <div className="py-40">
            {/* {JSON.stringify(res[0].content.rendered)} */}
            <div 
            className="content-area px-16"
            dangerouslySetInnerHTML={{ __html: res[0].content.rendered }} 
            />
        </div>
        </>
    )
}