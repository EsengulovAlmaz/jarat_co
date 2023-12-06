import React from 'react'
import PagesLayout from '../../elements/layouts/PagesLayouts'
import { CoursesCard } from './coursesCard'

import './index.scss'

interface ICoursesList {
    id: number
    format: string
    title: string
    duration: string
    start: string
    price: number
    old_price: number
    image: string
}
  
const coursesList: ICoursesList[] = [
    {
      id: 1,
      format: "Offline",
      title: "Zero-to-One for Junior Engineers",
      duration: "1 месяц",
      start: "2023-06-05",
      price: 20000,
      old_price: 25000,
      image: "/src/assets/images/courses1.svg",
    },
    {
      id: 2,
      format: "Offline",
      title: "SMM",
      duration: "1 месяц",
      start: "2023-06-05",
      price: 20000,
      old_price: 25000,
      image: "/src/assets/images/courses2.svg",
    },
    {
      id: 3,
      format: "Offline",
      title: "English for Business",
      duration: "1 месяц",
      start: "2023-06-05",
      price: 20000,
      old_price: 25000,
      image: "/src/assets/images/courses3.svg",
    },
]

export const OurCourses = () => {
  return (
    <PagesLayout>
        <div className="courses">
          <div className="courses__title">
            Курсы
          </div>
          <p className="courses__text">
            Раскройте свой творческий потенциал и раскройте свой потенциал с помощью
            наших разнообразных курсов, предназначенных для развития ваших
            художественных навыков и профессионального опыта.
          </p>

          <div className="courses__wrapper">
            {
              coursesList.map(item => 
                <CoursesCard key={item.id} {...item} />
              )
            }
          </div>

          <div className="courses__btn">
            <p>
              Еще
            </p>
            <img
              src="/src/assets/images/arrow.svg" 
              alt="arrow" 
            />
          </div>
        </div>
      </PagesLayout>
  )
}
