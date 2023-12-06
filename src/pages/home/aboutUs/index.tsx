import React from 'react'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import './index.scss'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <PagesLayout>
    <div className="about_us">
      <div className="about_us__content">
        <div className="about_us__title">
          О нас
        </div>

        <p className="about_us__text">
          Наша миссия в Школе творческих профессий состоит в том,
          чтобы дать людям возможность раскрыть свой творческий
          потенциал и развивать увлеченную карьеру в постоянно
        </p>

        <Link to="/about" className="about_us__btn">
          Подробнее
        </Link>
      </div>

      <div className="about_us__block">
        <img 
          src="./src/assets/images/about_us.svg" 
          alt="about us" 
          className="about_us__block_img"
        />
      </div>
    </div>
  </PagesLayout>
  )
}
