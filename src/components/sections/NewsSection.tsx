import { WpPost } from "@/types"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import { getWpNewsPosts } from "@/app/api/posts"
import { cn } from "@/lib/utils"
import TitleWithBar from "../typoghraphy/title-with-bar"

export default async function NewsSection() {
    const t = useTranslations("sections.news")
    const data = await getWpNewsPosts();
    
    return (
        <section className="mx-auto py-12 max-w-7xl" dir="rtl">
            {/* Header */}
            <div className="flex justify-between items-center">
                <TitleWithBar value={t('title')} />
                
                <Link href="/news" className="text-sm font-semibold text-primary hover:opacity-70 transition-opacity">
                    تصفح المزيد ←
                </Link>
            </div>

            {/* News List - One column layout for the specific image design */}
            <div className="flex flex-col gap-8">
                {data.map((post: WpPost) => (
                    <article key={post.id} className="group relative flex flex-col md:flex-row gap-8 items-start">
                        
                        {/* 1. Image Section (Fixed aspect ratio with soft corners) */}
                        <div className="w-full md:w-80 shrink-0">
                            <AspectRatio ratio={5 / 4} className="bg-muted h-full rounded-lg overflow-hidden">
                                <img
                                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                                    // alt={post.title}
                                    className=" object-cover w-full h-full border border-slate-100 group-hover:scale-105  transition-transform duration-200"
                                />
                            </AspectRatio>
                        </div>

                        {/* 2. Content Section */}
                        <div className="flex flex-col h-full pt-2">
                            {/* Meta: Date & Category */}
                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <time className="text-slate-500">{post.date}</time>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium text-xs">
                                    {post.category || "تسويق"}
                                </span>
                            </div>

                            {/* Title */}
                            <Link href={`/news/${post.id}`}>
                                <h3 
                                    className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-4 leading-tight"
                                    dangerouslySetInnerHTML={{ __html: post.title }} 
                                />
                            </Link>

                            {/* Description */}
                            <p className="text-slate-600 text-lg leading-relaxed line-clamp-4 max-w-2xl m-0"
                                dangerouslySetInnerHTML={{ __html: post.description }} 
                            >
                                
                            </p>

                            {/* Author Section (كما في الصورة) */}
                            {/* <div className="mt-auto flex items-center gap-3 pt-6 border-t border-slate-50">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200">
                                    <img 
                                        src={post.author?.avatar || "https://i.pravatar.cc/150?u=1"} 
                                        className="h-full w-full object-cover"
                                        alt="Author"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900">{post.author?.name || "مايكل فوستر"}</span>
                                    <span className="text-xs text-slate-500">{post.author?.role || "مؤسس مشارك / مدير تقني"}</span>
                                </div>
                            </div> */}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}