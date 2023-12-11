import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

interface CoursesCardProps {
    id: number
    format: string
    title: string
    duration: string
    start: string
    price: number
    old_price: number
    image: string
}

export const CoursesCard: React.FC<CoursesCardProps> = ({
    id,
    duration,
    format,
    image,
    old_price,
    price,
    start,
    title,
}) => {
  return (
    <div className="courses_card">
        <div className="courses_card__content">
            <div className="courses_card__format">
                {format}
            </div>
            
            <div className="courses_card__title">
                {title}
            </div>

            <ul className="courses_card__info">
                <li className="courses_card__info_item">Длительность курса {duration}</li>
                <li className="courses_card__info_item">Старт курса {start}</li>
            </ul>

            <div className="courses_card__prices">
                <div>
                    <button className="courses_card__promotion">
                        - 50%
                    </button>

                    <div className="courses_card__newPrice">
                        {price} сом
                    </div>

                    <div className="courses_card__oldPrice">
                        {old_price}
                    </div>
                </div>

                <Link to={`/courses/${id}`} className="courses_card__more">
                    Подробнее
                </Link>
            </div>
        </div>

        <div className="courses_card__block">
            <img 
                src={image} 
                alt="image"
                className="courses_card__block_img"
            />
        </div>
    </div>
  )
}
