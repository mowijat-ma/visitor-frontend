// components/Calendar.tsx
'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { Tooltip } from './ui/tooltip-card';

export default function Calendar() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="listWeek"
        weekends={true}
        events={[
          { title: 'عرض "Ciné-Concert" بعنوان', date: '2026-02-28', time: "15:00" },
          { title: '1 مارس: عرض خاص للأطفال لفيلم الأنيميشن Chien pourri, la vie à Paris!.', date: '2026-03-05', time: "14:20" }
        ]}
        // RTL Support for your Arabic users
        direction="rtl"
        locale="ar"
        eventContent={renderEventContent} // Our custom function
      // eventMouseEnter={(e)=>{
      //   console.log(e.event.title)
      // }}
      />

    </div>
  )
}

function renderEventContent(eventInfo: any) {
  const { type, time } = eventInfo.event.extendedProps;

  return (
    <div className="flex flex-col p-1 overflow-hidden rounded border-r-4 border-primary bg-blue-50">
      <div className="flex items-center justify-between gap-1 ">
        <span className="text-[10px] font-bold uppercase text-blue-700">{type}</span>
        <span className="text-[10px] text-gray-500">{time}</span>
      </div>
      <div className="truncate font-semibold text-gray-900 line">
        {eventInfo.event.title}
        
      </div>
    </div>
  );
}


{/* <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<>
            <div className="">
              <blockquote className="mb-4 text-neutral-700 dark:text-neutral-300">
                This product is absolutely, grade A horse shit.
              </blockquote>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.aceternity.com/screenshots/tyler.webp"
                  alt="Tyler Durden"
                  className="size-6 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    Tyler Durden
                  </p>
                  <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
                    Senior Product Manager at FC
                  </p>
                </div>
              </div>
            </div>
          </>}
        >
          {" "}
          <span className="cursor-pointer font-bold">{eventInfo.event.title}</span>
        </Tooltip> */}