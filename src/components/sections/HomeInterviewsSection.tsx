"use client"

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CustomCarouselNext,
    CustomCarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"
import { useTranslations } from "next-intl"
import TitleWithBar from "../typoghraphy/title-with-bar"

interface InterviewPost {
    id: number;
    title?: string;
    excerpt?: string;
    with?: {
        name_ar: string,
        image: string
    }
}

export function HomeInterviewsSection({ interviews }: { interviews: InterviewPost[] }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const t = useTranslations('sections.interviews')
    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    // RTL configuration
    const dir = 'rtl'

    return (
        <section className="mx-auto py-8">
            <Carousel 
                setApi={setApi} 
                className="w-full" 
                dir={dir}
                opts={{
                    direction: dir,
                    align: "start",
                    // loop: true,
                }}
            > 
                <div className="flex justify-between items-center mb-6">
                    <TitleWithBar value={t('title')} />
                    <div className="flex gap-2">
                        <CustomCarouselPrevious />
                        <CustomCarouselNext />
                    </div>
                </div>

                {/* Fixed: Use CarouselContent and CarouselItem for logic to work */}
                <CarouselContent className="-ml-4">
                    {interviews.map((interview, i) => (
                        <CarouselItem key={interview.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full">
                                <InterviewPostContainer post={interview} />
                                {/* <InterviewPostContainer post={interviews[i]} /> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export const InterviewPostContainer = ({ post }: { post: InterviewPost }) => {
    return (
        <Link href={`/interviews/${post.id}`} className="group block h-full relative">
            <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                {/* Image Wrapper */}
                <AspectRatio
                    ratio={3 / 4}
                    className="overflow-hidden rounded-xl bg-muted "
                >
                    <img
                        src={post.with?.image || "https://ui.shadcn.com/placeholder.svg"}
                        alt={post.title}
                        style={{boxShadow: "inset 0px -29px 48px 0px #696969"}}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
                    />
                </AspectRatio>

                {/* Post Content */}
                <div className="flex flex-col gap-2 absolute bottom-4 right-4 bg-background-">
                    
                    <h3 
                        className="text-2xl leading-tight font-bold text-white" 
                    >
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground text-lg line-clamp-2">
                        {post.with?.name_ar}
                    </p>
                </div>
            </div>
        </Link>
    )
}