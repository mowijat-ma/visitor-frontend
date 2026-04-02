'use client'
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";
import { Post, WpPost } from "@/types";
import HomeMoreReadsAside from "./HomeMoreReadsAside";
import { getFirstWpPost, getWpTopPosts } from "@/app/api/posts";

export default async function HomeHeroSection() {
  const t = useTranslations('')
  const mainArticle : Post = await getFirstWpPost()
  const wideAricles: Post[] = await getWpTopPosts()
  return (
    <>
      <section className="flex flex-col gap-8">
        {/* الحاوية الرئيسية للشبكة */}
        <div className=""> {/* أضفنا items-start لضمان عمل sticky */}

          {/* الجهة اليسرى: المقال الرئيسي ومقالات الـ topPosts */}
          <div className="">
            <BlogPostContainer post={mainArticle} />

            {/* نقلنا الـ topPosts إلى هنا لتكون بجانب القائمة الجانبية الثابتة */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 gap-y-12 sm:gap-8">
              {wideAricles?.map((post, index) => (
                <div key={index} className="h-fit">
                  <Link href="#" className="group block">
                    <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg bg-muted">
                        <img
                          src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                          alt=""
                        />
                      </AspectRatio>
                      <div className="flex flex-col gap-3">
                        <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-lg leading-normal font-semibold group-hover:underline" />
                        <p className="text-muted-foreground text-base leading-normal line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* الجهة اليمنى: القائمة الجانبية الثابتة */}
          
        </div>
      </section>
    </>
  )
}

export const BlogPostContainer = ({ post }: {
  post: Post
}) => {
  return (
    <Link href={`/cinema/${post.id}/content`} key={post.id} className="group block">
      {/* Blog Card */}
      <div className="flex flex-col gap-4 rounded-xl- transition-all duration-200">
        {/* Image Wrapper */}
        <AspectRatio
          ratio={5 / 3}
          className="overflow-hidden rounded"
        >
          <img
            src={
              post.image || 
              "https://ui.shadcn.com/placeholder.svg"}
            alt={`${post.title} thumbnail`}
            // fill
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </AspectRatio>

        {/* Post Content */}
        <div className="flex flex-col gap-3">
          {/* Post Meta */}
          <div className="flex items-center gap-2 text-left">
            <span className="text-muted-foreground text-sm">
              {post.date}
            </span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">
              {post.category}
            </span>
          </div>
          <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline" />

          {/* Post Title */}
          {/* <h3  /> */}
          {/* Post Summary */}
          <p className="text-muted-foreground text-base leading-normal line-clamp-2" dangerouslySetInnerHTML={{ __html: post.description }}>
            
          </p>
        </div>
      </div>
    </Link>
  )
}
export const BlogPostContainerSmall = ({ post }: {
  post: WpPost
}) => {
  return (
    <Link href={`/cinema/${post.id}/content`} className="group">
      <div className="flex flex-row">
        <div className="flex- grid grid-cols-2 gap-4">
          <img
            src={
              // post.image || 
              "https://ui.shadcn.com/placeholder.svg"}
            className=" aspect-square border object-cover rounded  "
            alt=""
          />
          <div className="flex flex-col gap-3 col-span-1">
            <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline line-clamp-1" />
            <p className="text-muted-foreground text-base leading-normal" dangerouslySetInnerHTML={{ __html: post.description }}>
              
            </p>

          </div>
        </div>
      </div>
    </Link>
  )
  return (
    <Link href="#" key={post.id} className="">
      {/* Blog Card */}
      <div className="flex sm:flex-col gap-4 rounded-xl transition-all duration-200">
        {/* Image Wrapper */}
        <img
          src={post.image || "https://ui.shadcn.com/placeholder.svg"}
          alt={`${post.title} thumbnail`}
          // fill
          className="h-32 sm:h-full object-cover transition-transform duration-200 group-hover:scale-105 rounded-xl aspect-video"
        />
        {/* <AspectRatio
          // ratio={4 / 3}
          className="overflow-hidden rounded-xl aspect-square "
        >
        </AspectRatio> */}

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
  )
}

