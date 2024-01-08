import React from 'react';

import 'swiper/css';
import 'swiper/css/bundle';
import './index.scss';
import { useNavigate } from 'react-router-dom';

interface IPortfolio {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const PortfolioCard: React.FC<IPortfolio> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  return (
    <div className="portfolio_card" onClick={() => navigate(`/portfolio/${id}`)}>
      <div className="portfolio_card__block">
        <img src={image} alt="images" className="portfolio_card__img" />
        <div className="portfolio_card__logo">
          <div className="portfolio_card__logo_title">{title}</div>
        </div>
      </div>

      <div className="portfolio_card__text">{description}</div>
    </div>
  );
};
