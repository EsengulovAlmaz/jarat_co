import React from 'react'

import { MdArrowOutward } from "react-icons/md"

import './index.scss'

interface IPartnersProps {
}

export const PartnersCard: React.FC<IPartnersProps> = () => {
    return (
        <div className="partners_card">
            <div className="partners_card__block">
                <div className="partners_card__logo">
                    <img
                        className="partners_card__logo_img"
                        src="/src/assets/images/cryxxenLogo.svg" 
                        alt="logo" 
                    />
                </div>
            </div>

            <div className="partners_card__title">
                Cryxxen
            </div>

            <div className="partners_card__text">
                Мы разрабатываем программное обеспечение и помогаем бизнесу
            </div>

            <div className="partners_card__more">
                <a href={`/partners/2`}>
                    <MdArrowOutward className="partners_card__link" />
                </a>
            </div>
        </div>
    )
}
