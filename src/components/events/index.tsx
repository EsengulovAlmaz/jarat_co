import React from 'react'
import PagesLayout from '../../elements/layouts/PagesLayouts'

import './index.scss'
import { EventsCard } from './eventsCard'

interface IEventsList {
    id: number
    format: string
    title: string
    duration: string
    start: string
    day: string
    time: string
    image: string
}

const eventsList: IEventsList[] = [
    {
      id: 1,
      format: "ZOOM",
      title: "ZInfo Sessions Zero-to-One Program for Junior Engineers",
      duration: "1 месяц",
      start: "2023-06-05",
      day: "2023-05-29",
      time: "17:00",
      image: "/src/assets/images/event1.svg",
    },
    {
      id: 2,
      format: "ZOOM",
      title: "Info Session for UX/UI with Aigerim Talgarbekova",
      duration: "1 месяц",
      start: "2023-06-05",
      day: "2023-05-25",
      time: "22:00",
      image: "/src/assets/images/event2.svg",
    },
    {
      id: 3,
      format: "ZOOM",
      title: "Entrepreneurship Masterclass by Timur Tilenov",
      duration: "1 месяц",
      start: "2023-06-05",
      day: "2023-05-17",
      time: "22:00",
      image: "/src/assets/images/event3.svg",
    },
]

export const OurEvents = () => {
  return (
    <PagesLayout>
        <div className="events">
            <div className="events__title">
                Ивенты
            </div>

            <p className="events__text">
                Будьте в курсе наших событий и запусков курсов
            </p> 

            <div className="events__wrapper">
                {
                    eventsList.map(item =>
                        <EventsCard key={item.id} {...item} />    
                    )
                }
            </div>
        </div>
    </PagesLayout>
  )
}
