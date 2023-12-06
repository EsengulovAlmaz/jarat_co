import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import './index.scss'

interface IPortfolioCardProps {
    logo: string
    name: string
    projects: IProjects[]
}

interface IProjects {
    id: number
    img: string
}

export const PortfolioCard: React.FC<IPortfolioCardProps> = ({
    logo,
    name,
    projects,
}) => {
  return (
    <div className="portfolio_card">
        <div className="portfolio_card__name">
            <img 
                src={logo} 
                alt="logo" 
                className="portfolio_card__logo" 
            />
            -
            <p>
                {name}
            </p>
        </div>

        <Swiper
            className="portfolio_card__swiper"
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={150}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={1500}
        >
            {
               projects.map(item => 
                <SwiperSlide className="portfolio_card__slider" key={item.id}>
                    <img 
                        src={item.img} 
                        alt="project" 
                        className="portfolio_card__image" 
                    />
                </SwiperSlide>
               ) 
            }
        </Swiper>
    </div>
  )
}
