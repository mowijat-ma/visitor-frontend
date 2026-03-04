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

interface InterviewPost {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
}

export function HomeInterviewsSection({ interviews }: { interviews: InterviewPost[] }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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
                    <h2 className="text-2xl font-bold text-primary">حوارات سينمائية</h2>
                    <div className="flex gap-2">
                        <CustomCarouselPrevious />
                        <CustomCarouselNext />
                    </div>
                </div>

                {/* Fixed: Use CarouselContent and CarouselItem for logic to work */}
                <CarouselContent className="-ml-4">
                    {interviews.map((interview, i) => (
                        <CarouselItem key={interview.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
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
        <Link href={`/interviews/${post.id}`} className="group block h-full">
            <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                {/* Image Wrapper */}
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-xl bg-muted"
                >
                    <img
                        src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </AspectRatio>

                {/* Post Content */}
                <div className="flex flex-col gap-2">
                    
                    <h3 
                        dangerouslySetInnerHTML={{ __html: post.title }} 
                        className="text-lg leading-tight font-bold group-hover:text-primary transition-colors line-clamp-2" 
                    />
                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.description.replace(/<[^>]*>?/gm, '')}
                    </p>
                </div>
            </div>
        </Link>
    )
}