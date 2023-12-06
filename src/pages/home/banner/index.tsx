import React from 'react'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import "./index.scss"

export const Banner = () => {
  return (
    <PagesLayout>
        <div className="banner">
          <div className="banner__content">
            <div className="banner__title">
              ШКОЛА
            </div>
            <div className="banner__title">
              КРЕАТИВНЫХ
            </div>
            <div className="banner__title">
              ПРОФЕССИЙ
            </div>

            <p className="banner__text">
              Начните свою карьеру в технологической и творческой индустрии.
              Никогда не поздно учиться и мечтать
            </p>
          </div>

          <div className="banner__block">
            <img
              className="banner__block_img"
              src="/src/assets/images/banner_img.svg" 
              alt="image" 
            />
          </div>
        </div>
      </PagesLayout>
  )
}
