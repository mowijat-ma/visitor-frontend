import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";
import { WpPost } from "@/types";
import { getWpMoreReads } from "@/app/api/posts";

export default async function HomeMoreReadsAside({}: any) {
    const t= useTranslations("sections.more_reads")
    const data =await getWpMoreReads()
    return (
        <aside className=""> {/* هنا السحر: sticky + top-24 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
              <div className="mb-6">
                <h3 className="text-primary text-xl font-bold border-r-4 border-primary pr-3">
                  {t('title')}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {data?.slice(0, 5)?.map((item: any, i:number) => (
                  <Link href={""} className="group py-2" key={i}>
                    <h3 
                      dangerouslySetInnerHTML={{ __html: item.title }} 
                      className="text-base leading-snug font-semibold group-hover:text-primary transition-colors line-clamp-2" 
                    />
                    <span className="text-muted-foreground text-xs mt-1 block">
                      {item.date}
                    </span>
                    {i !== data.length - 1 && <Separator className="mt-4 opacity-50"/>}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
    )
}