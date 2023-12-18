import React from 'react'
import PagesLayout from '../../elements/layouts/PagesLayouts'
import { PartnersCard } from '../../components/partnersCard'

import './index.scss'

const Partners = () => {
  return (
    <PagesLayout>
        <div className="partners_page">
            <div className="partners_page__banner">
                <div className="partners_page__title">
                    С кем мы сотрудничаем?
                </div>
                <img
                    className="partners_page__img"
                    src="/src/assets/images/partners.svg" 
                    alt="partners" 
                />
            </div>

            <div className="partners_page__wrapper">
                <PartnersCard />
                <PartnersCard />
                <PartnersCard />
            </div>
        </div>
    </PagesLayout>
  )
}

export default Partners