import { Gallery6 } from "@/components/gallery6"
import { getWpPosts } from "../api/posts"

export default async function HomePage(){
      const res = await getWpPosts()

    return (<>
    <div className="max-w-4xl mx-auto p-8" dir="rtl">
      {/* Title using the Modern UI font */}
      <h1 className="font-ui-">
        منهجية النقد في الأدب الكلاسيكي
      </h1>

      {/* Body using the Classic Amiri font */}
      <article className="font-classic ">
        <p>
          إن "النقد" في جوهره ليس مجرد إصدار أحكام، بل هو عملية سبر لأغوار النص الأدبي...
        </p>
        
        <blockquote className="border-r-4 border-gold-500 pr-4 italic text-slate-600">
          "النص الأدبي غابة من الرموز التي تحتاج إلى ناقد حصيف."
        </blockquote>
      </article>
       <div className="py-40">
            {/* {JSON.stringify(res[0].content.rendered)} */}
            <div 
            className="content-area px-16"
            dangerouslySetInnerHTML={{ __html: res[0].content.rendered }} 
            />
        </div>
    </div>
    <Gallery6 />
    </>)
}