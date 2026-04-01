'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

interface EventInfo {
  event: {
    title: string
    extendedProps: {
      type?: string
      time?: string
    }
  }
}

export default function Calendar() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'عرض "Ciné-Concert" بعنوان', date: '2026-04-01', time: "15:00" },
          { title: '1 مارس: عرض خاص للأطفال لفيلم الأنيميشن Chien pourri, la vie à Paris!.', date: '2026-03-31', time: "14:20" }
        ]}
        direction="rtl"
        locale="ar"
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo: EventInfo) {
  const { type, time } = eventInfo.event.extendedProps

  return (
    <div className="flex flex-col p-1 overflow-hidden rounded border-r-4 border-primary bg-blue-50">
      <div className="flex items-center justify-between gap-1">
        {type && <span className="text-[10px] font-bold uppercase text-blue-700">{type}</span>}
        {time && <span className="text-[10px] text-gray-500">{time}</span>}
      </div>
      <div className="truncate font-semibold text-gray-900">
        {eventInfo.event.title}
      </div>
    </div>
  )
}
