import React from 'react'

import './index.scss'

export const SpeakersCard = () => {
  return (
    <div className="speakers_card">
        <div className="speakers_card__img">
            <img 
                src="/src/assets/images/test2.png"
                alt="people"
            />
        </div>
        <div className="speakers_card__content">
            <div className="speakers_card__name">
                Bektur Toktorbekov 
            </div>
            <div className="speakers_card__job">
                Frontend Devoloper
            </div>
        </div>
    </div>
  )
}
