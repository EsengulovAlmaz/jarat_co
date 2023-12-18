import React from 'react'

import 'swiper/css'
import 'swiper/css/bundle'
import './index.scss'
import { useNavigate } from 'react-router-dom'

interface IPortfolioCardProps {
    id: number
    img: string
    logo: string
    name: string
    description: string
}

export const PortfolioCard: React.FC<IPortfolioCardProps> = ({
    id,
    img,
    logo,
    name,
    description,
}) => {
    const navigate = useNavigate()

    return (
        <div className="portfolio_card" onClick={() => navigate(`/portfolio/${id}`)}>
            <div className="portfolio_card__block">
                <img
                    className="portfolio_card__img"
                    src={img} 
                    alt="images" 
                />
                <div className="portfolio_card__logo">
                    <img
                        className="portfolio_card__logo_img"
                        src={logo}
                        alt="logo" 
                    />
                    <div className="portfolio_card__logo_title">
                        {name}
                    </div>
                </div>
            </div>

            <div className="portfolio_card__text">
                {description}
            </div>
        </div>
    )
}
