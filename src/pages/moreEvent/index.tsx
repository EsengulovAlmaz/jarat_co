import React from 'react'

import './index.scss'
import PagesLayout from '../../elements/layouts/PagesLayouts'
import { SpeakersCard } from '../../components/speakersCard'

const MoreEvents = () => {
  return (
    <PagesLayout>
        <div className="more_events">
            <div className="more_events__card">
                <div className="more_events__content">
                    <div className="more_events__content__format">
                        Online
                    </div>

                    <div className="more_events__content__title">
                        Info Sessions Zero-to-One Program for Junior Engineers
                    </div>

                    <p className="more_events__content__text">
                        Присоединяйтесь к информационным сессиям для младших инженеров в рамках нашего нового курса Zero-to-One.1-месячный интенсивный курс, предназначенный для всех, кто закончил ИТ-курсы и нуждается в оттачивании своих профессиональных навыков, социальных навыков и проектов.
                    </p>

                    <div className="more_events__content__date">
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

                    <a href='/' className="more_events__content__btn">
                        Записаться
                    </a>
                </div>

                <div className="more_events__block">
                    <img 
                        src="/src/assets/images/event1.svg" 
                        alt="image"
                        className="more_events__block_img"
                    />
                </div>
            </div>

            <div className="more_events__title">
                спикеры
            </div>

            <div className="more_events__speakers">
                <SpeakersCard />
                <SpeakersCard />
            </div>
        </div>
    </PagesLayout>
  )
}

export default MoreEvents