'use client'
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

export default function HomeHeroSection({ firstPost, topPosts, moreReadables }: { firstPost: BlogPost; topPosts: BlogPost[], moreReadables: BlogPost[] }) {
  const t = useTranslations('')
  return (
    <>
      <section className="flex flex-col gap-12">
        <div className="grid grid-cols-12 md:gap-12">

          <div className="md:col-span-8 col-span-12 flex flex-col gap-4">
            <BlogPostContainer post={firstPost} />
          </div>
          <div className="col-span-4 hidden md:block">
            <div className="bg-muted p-4 rounded-xl">
              <div className="">
                <h3 className="text-primary text-xl font-bold">{t('ui.more_readable')}</h3>
              </div>
              <div className="flex flex-col gap-">
                {moreReadables.map((item, i) => (
                <Link href={""} className="group" key={i}>
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} className="text-base leading-normal font-semibold group-hover:underline line-clamp-1 truncate" />
                  <span className="text-muted-foreground text-sm">
                    {item.date}
                  </span>
                  <Separator className="my-2"/>
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 sm:gap-12">
          {topPosts.map((item, index) => (
            <div key={index} className="sm:col-span-4 h-fit">
              <BlogPostContainerSmall post={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}



interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}
export const BlogPostContainer = ({ post }: {
  post: BlogPost
}) => {
  return (
    <Link href={`/cinema/${post.id}/content`} key={post.id} className="group block">
      {/* Blog Card */}
      <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
        {/* Image Wrapper */}
        <AspectRatio
          ratio={4 / 3}
          className="overflow-hidden rounded-xl"
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
          <p className="text-muted-foreground text-sm leading-normal line-clamp-2" dangerouslySetInnerHTML={{ __html: post.description }}>
            
          </p>
        </div>
      </div>
    </Link>
  )
}
export const BlogPostContainerSmall = ({ post }: {
  post: BlogPost
}) => {
  return (
    <Link href={`/cinema/${post.id}/content`} className="group">
      <div className="flex flex-row">
        <div className="flex gap-4">
          <img
            src={post.image || "https://ui.shadcn.com/placeholder.svg"}
            className="h-24 aspect-square border object-cover rounded"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h3 dangerouslySetInnerHTML={{ __html: post.title }} className="text-base leading-normal font-semibold group-hover:underline line-clamp-1" />
            <p className="text-muted-foreground text-sm leading-normal line-clamp-2" dangerouslySetInnerHTML={{ __html: post.description }}>
              
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

