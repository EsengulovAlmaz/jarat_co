import React from 'react'

import { PartnersList } from '../../../consts'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import './index.scss'
import { useNavigate } from 'react-router-dom'
import { PartnersCard } from '../../../components/partnersCard'


export const Partners = () => {
    const navigate = useNavigate()

    return (
        <PagesLayout>
            <div className="partners">
                <div className="partners__title">
                    Наши партнеры
                </div>
                <p className="partners__text">
                    Нам доверяют компании по всему миру, пользуются миллионы пользователей
                </p>

                <div className="partners__wrapper">
                    {
                        PartnersList.map(item =>
                            <PartnersCard key={item.id} />
                        )
                    }
                </div>
            </div>
        </PagesLayout>
    )
}
