import React from 'react';

import { MdArrowOutward } from 'react-icons/md';

import './index.scss';

interface IPartnersProps {
  id: number;
  title: string;
  description: string;
  logo: string;
}

export const PartnersCard: React.FC<IPartnersProps> = ({ id, description, logo, title }) => {
  return (
    <div className="partners_card">
      <div className="partners_card__block">
        <div className="partners_card__logo">
          <img className="partners_card__logo_img" src={logo} alt="logo" />
        </div>
      </div>

      <div className="partners_card__title">{title}</div>

      <div className="partners_card__text">{description}</div>

      <div className="partners_card__more">
        <a href={`/partners/${id}`}>
          <MdArrowOutward className="partners_card__link" />
        </a>
      </div>
    </div>
  );
};
