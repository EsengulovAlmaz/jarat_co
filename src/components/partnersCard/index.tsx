import React from 'react'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PartnersList } from '../../consts'

import './index.scss'
import 'swiper/css'
import 'swiper/css/bundle'

interface IPartnersProps {
    title: string
}

export const PartnersCard: React.FC<IPartnersProps> = ({
    title
}) => {
    const breakpoints = {
        10: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
      }

  return (
    <div className="partners_card">
        <div className="partners_card__title">
            {title}
        </div>

        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            breakpoints={breakpoints}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={1500}
        >
            {
               PartnersList.map(item => 
                <SwiperSlide key={item.id}>
                    <div className="partners_card__slide">
                        <img 
                            src={item.img} 
                            alt="partners" 
                            className="partners_card__image" 
                        />
                    </div>
                </SwiperSlide>
               ) 
            }
        </Swiper>
    </div>
  )
}
