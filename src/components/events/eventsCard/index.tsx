import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

interface EventsCardProps {
    id: number
    format: string
    title: string
    duration: string
    start: string
    day: string
    time: string
    image: string
}

export const EventsCard: React.FC<EventsCardProps> = ({
    id,
    duration,
    format,
    image,
    time,
    day,
    start,
    title,
}) => {
  return (
    <div className="events_card">
        <div className="events_card__content">
            <div className="events_card__format">
                {format}
            </div>
            
            <div className="events_card__title">
                {title}
            </div>

            <ul className="events_card__info">
                <li className="events_card__info_item">Длительность {duration}</li>
                <li className="events_card__info_item">Старт {start}</li>
            </ul>

            <div className="events_card__date">
                <div>
                    <div className="events_card__day">
                        {day} сом
                    </div>

                    <div className="events_card__time">
                        {time}
                    </div>
                </div>

                <Link to={`/events/${id}`} className="events_card__more">
                    Подробнее
                </Link>
            </div>
        </div>

        <div className="events_card__block">
            <img 
                src={image} 
                alt="image"
                className="events_card__block_img"
            />
        </div>
    </div>
  )
}
