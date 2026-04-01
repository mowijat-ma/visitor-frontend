"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ar } from "date-fns/locale"
import { BlogPost, WpPost } from "@/types"

interface CalendarProps {
  posts: any[]
}

export function CulturalCalendar({ posts }: CalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // تحويل تواريخ المقالات إلى مصفوفة تواريخ للتقويم
  const eventDates = posts.map(post => new Date(post.date))

  // العثور على المقالات المرتبطة باليوم المختار
  const selectedDayPosts = posts.filter(
    (post) => new Date(post.date).toDateString() === date?.toDateString()
  )

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start" dir="rtl">
      {/* الجزء الخاص بالتقويم */}
      <Card className="p-4 shadow-sm border-slate-100">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ar}
          className="rounded-md border font-ui"
          // تمييز الأيام التي تحتوي على فعاليات
          modifiers={{ hasEvent: eventDates }}
          modifiersStyles={{
            hasEvent: { 
              fontWeight: 'bold', 
              color: '#c2410c', // لون برتقالي/نحاسي للفعاليات
              textDecoration: 'underline' 
            }
          }}
        />
      </Card>

      {/* عرض الفعاليات في اليوم المختار */}
      <div className="flex-1 w-full space-y-4">
        <h3 className="font-ui text-2xl font-bold text-slate-900">
          فعاليات يوم {date?.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' })}
        </h3>
        
        {selectedDayPosts.length > 0 ? (
          selectedDayPosts.map((post) => (
            <Card key={post.id} className="hover:bg-slate-50 transition-colors">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="font-ui text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="font-classic text-xl mt-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="font-classic text-slate-500 italic">لا توجد فعاليات نقدية مجدولة لهذا اليوم.</p>
        )}
      </div>
    </div>
  )
}