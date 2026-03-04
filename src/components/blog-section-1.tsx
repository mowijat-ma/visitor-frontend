"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Tagline } from "@/components/tagline";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    "id": 1,
    "title": "بدايتك مع shadcn/ui: الدليل الشامل",
    "description": "تعلم كيفية إعداد وتحسين سير عمل التطوير الخاص بك باستخدام مكتبة المكونات القوية من shadcn/ui.",
    "date": "15 مارس 2024",
    "category": "شرح تعليمي",
    "image": "https://ui.shadcn.com/placeholder.svg"
  },
  {
    "id": 2,
    "title": "بناء الوضع الليلي باستخدام Next.js و Tailwind CSS",
    "description": "قم بتنفيذ زر تبديل سلس للوضع الليلي في تطبيق Next.js الخاص بك باستخدام Tailwind CSS و shadcn/ui.",
    "date": "12 مارس 2024",
    "category": "تطوير",
    "image": "https://ui.shadcn.com/placeholder.svg"
  },
  {
    "id": 3,
    "title": "احتراف مكونات React Server Components",
    "description": "تعمق في مكونات React Server Components وتعرف على كيفية تحسين أداء تطبيقك.",
    "date": "8 مارس 2024",
    "category": "مستوى متقدم",
    "image": "https://ui.shadcn.com/placeholder.svg"
  },
  {
    "id": 4,
    "title": "مستقبل تطوير الويب في عام 2024",
    "description": "استكشف أحدث الاتجاهات والتقنيات التي تشكل مستقبل تطوير الويب هذا العام.",
    "date": "5 مارس 2024",
    "category": "رؤى",
    "image": "https://ui.shadcn.com/placeholder.svg"
  }
];

export function BlogSection1({data}: {
  data: BlogPost[]
}) {
  return (
    <section
      className="bg-background- px-8 md:px-0"
      aria-labelledby="blog-section-heading"
    >
      <div className="">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Title */}
          <div className="flex flex-col items-center- text-center- ">
            {/* Tagline */}
            {/* <Tagline>Blog Section</Tagline> */}
            {/* Main Heading */}
                <h1 id="blog-section-heading" className="heading-lg ">
                عنوان جذاب، قصير وواضح للمدونة
              </h1>
              {/* الوصف */}
              <p className="text-muted-foreground">
                أضف عبارة قيمة موجزة تجذب اهتمام القارئ وتعرض قيمة المحتوى. 
                ركز على الفوائد مع إبقائها أقل من سطرين بما يتماشى مع فئات مدونتك.
              </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4"
            role="list"
          >
            {data.map((post) => (
              <Link href="#" key={post.id} className="group block">
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
  );
}
