import { getCinemaMorrocanWpPosts, getCinemaWorldWpPosts, getWpPosts, getWpPostsByCategory } from "@/app/api/posts";
import { BlogSection1 } from "@/components/blog-section-1";
import { WpPost } from "@/types";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { useTranslations } from "next-intl";
import TitleWithBar from "../typoghraphy/title-with-bar";

// Optional: Define a type for better DX


export default async function CinemaMorrocanSection() {
  const t = useTranslations("sections.cinemamorrocan")
  
  const data = await getCinemaMorrocanWpPosts();
  return (
    <>
      {/* <pre dir="ltr" className="text-wrap bg-slate-100 p-4 rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre> */}

      <div className="mx-auto sm:py-10 py-8" dir="rtl">
        {/* <h1 className="text-3xl font-bold mb-6">Cinema World Page</h1> */}
        <section>
          {/* Removed the extra brackets around data */}
          <section
      className=""
      aria-labelledby="blog-section-heading"
    >
      <div className="">
           <div className="bg-background flex justify-between items-center py-3">
            <TitleWithBar value={t('title')} />
              
              {/* <Link href={""}>المزيد</Link> */}
           </div>
        <div className="flex flex-co gap-10 md:gap-8">
  
          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
            role="list"
          >
            {data.map((post: WpPost, i) => (
              <Link href="#" key={i} className="group block">
                {/* Blog Card */}
                <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                  {/* Image Wrapper */}
                  <AspectRatio
                    ratio={4 / 3}
                    className="overflow-hidden rounded-lg bg-muted"
                  >
                    <img
                      src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                      alt={`${post.title} thumbnail`}
                      // fill
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </AspectRatio>

                  {/* Post Content */}
                  <div className="flex flex-col gap-3">
                    {/* Post Meta */}
                    {/* <div className="flex items-center gap-2 text-left">
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">
                        {post.category}
                      </span>
                    </div> */}
                    <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline" />

                    {/* Post Title */}
                    {/* <h3  /> */}
                    {/* Post Summary */}
                    <p className="text-muted-foreground text-sm leading-normal line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
        </section>
      </div>
    </>
  );
}
