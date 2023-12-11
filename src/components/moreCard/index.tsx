import React from 'react'

import './index.scss'

export const MoreCard = () => {
  return (
    <div className="more_card">
        <div className="more_card__content">
            <div className="more_card__content_format">
                Online
            </div>            

            <div className="more_card__content_title">
                Info Sessions Zero-to-One Program for Junior Engineers
            </div>

            <p className="more_card__content_text">
                Присоединяйтесь к информационным сессиям для младших инженеров в рамках нашего нового курса Zero-to-One.1-месячный интенсивный курс, предназначенный для всех, кто закончил ИТ-курсы и нуждается в оттачивании своих профессиональных навыков, социальных навыков и проектов.
            </p>

            <div className="more_card__content_date">
                <p>
                    2023-06-05
                </p>

                <p>
                    17:00
                </p>

                <p>
                    Zoom
                </p>
            </div>

            <a href='/' className="more_card__content_btn">
                Записаться
            </a>
        </div>

        <div className="more_card__block">
            <img 
                src="/src/assets/images/event1.svg" 
                alt="image"
                className="more_card__block_img"
            />
        </div>        
    </div>
  )
}
