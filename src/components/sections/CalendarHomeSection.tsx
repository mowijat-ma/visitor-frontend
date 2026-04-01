"use client"
import React, { useState, useEffect, useRef } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CustomCarouselNext, CustomCarouselPrevious } from "../ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { IoLocationOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Calendar } from "../ui/calendar";
import { Card } from "../ui/card";
import { ar } from "date-fns/locale"
import TitleWithBar from "../typoghraphy/title-with-bar";

export default function CalendarHomeSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false); // حالة الرؤية
    
    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('sections.calendar')

    // مراقب الظهور (Intersection Observer)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // سيصبح true عندما يظهر 30% من القسم في الشاشة
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleDotClick = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <section ref={sectionRef} className="py-12 bg-background relative overflow-hidden">
            <TitleWithBar value={t('title')} />
            

            <Carousel
                setApi={setApi}
                className="w-full relative" 
                dir="rtl"
                opts={{ direction: "rtl", align: "start" }}
            >
                {/* حاوية الأزرار: تظهر وتختفي بناءً على isVisible */}
                <div className={cn(
                    "hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-40 px-4 transition-all duration-700 ease-in-out pointer-events-none",
                    isVisible ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-20%]"
                )}>
                    <div className="pointer-events-auto -translate-x-6">
                        <CustomCarouselPrevious className="p-4 border bg-white/90 backdrop-blur-sm rounded-full scale-125 shadow-xl hover:bg-white" />
                    </div>
                    <div className="pointer-events-auto translate-x-6">
                        <CustomCarouselNext className="p-4 border bg-white/90 backdrop-blur-sm rounded-full scale-125 shadow-xl hover:bg-white" />
                    </div>
                </div>

                <CarouselContent className="-ml-4 py-4 px-4">
                    {[
                        "https://i.pinimg.com/736x/26/94/ca/2694ca65a8623b3a206124bf7c7ea45a.jpg",
                        "https://i.pinimg.com/736x/60/85/87/608587b6515b2bb18360fe00f7f1706f.jpg",
                        "https://i.pinimg.com/736x/c0/f3/0d/c0f30dfec4a4022fbc9a99aa54cb0ba1.jpg",
                        "https://m.media-amazon.com/images/I/61d0Hd4Xr5L._UF1000,1000_QL80_.jpg",
                        "https://bloombooks.ma/storage/uploads/fX8x4G6j900Dtj7lZBOoojCcPBgylB0D4VxnFFkW.png"
                    ].map((item, i) => (
                        <CarouselItem key={i} className="pl-4 md:basis-1/3 lg:basis-1/3">
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                                <AspectRatio ratio={3 / 4}>
                                    <img className="w-full h-full object-cover" src={item} alt="Event" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                    <div className="font-ui px-4 p-4 absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <IoLocationOutline size={19} />
                                            <span className="text-sm text-white">برشيد</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiCalendar size={19} />
                                            <span className="text-sm text-white">26 مارس 2026</span>
                                        </div>
                                    </div>
                                </AspectRatio>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* النقاط السفلية */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: count }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                current === i ? "bg-primary w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
                            )}
                        />
                    ))}
                </div>
            </Carousel>
        </section>
    );
}


export function CalendarHomeExtension(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return <>
    <Card className="p-4 shadow-sm border-slate-100">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ar}
          className="rounded-md border font-ui"
          // تمييز الأيام التي تحتوي على فعاليات
        //   modifiers={{ hasEvent: eventDates }}
          modifiersStyles={{
            hasEvent: { 
              fontWeight: 'bold', 
              color: '#c2410c', // لون برتقالي/نحاسي للفعاليات
              textDecoration: 'underline' 
            }
          }}
        />
      </Card>
    </>
}