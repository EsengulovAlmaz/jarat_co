import React from 'react'

import { Link } from 'react-router-dom'
import { PartnersList } from '../../../consts'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import './index.scss'


export const Partners = () => {

    return (
        <PagesLayout>
            <div className="partners">
                <div className="partners__title">
                    Наши партнеры
                </div>
                <p className="partners__text">
                    Нам доверяют компании по всему миру, пользуются миллионы пользователей
                </p>
                <div
                    
                    className="partners__btn"
                >
                    <Link to="/partners">
                        Читать подробнее
                    </Link>
                </div>

                <div className="partners__wrapper">
                    {
                        PartnersList.map(item =>
                            <div key={item.id} className="partners__block">
                                <img 
                                    src={item.img} 
                                    alt="project" 
                                    className="partners__image" 
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </PagesLayout>
    )
}
