import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.scss';

interface MoreCardProps {
  description: string;
  duration: string;
  image: string;
  new_price?: number;
  start_date: string;
  title: string;
  type: string;
}

export const MoreCard: React.FC<MoreCardProps> = ({
  description,
  duration,
  image,
  new_price,
  start_date,
  title,
  type,
}) => {
  const { t } = useTranslation();

  return (
    <div className="more_card">
      <div className="more_card__content">
        <div className="more_card__content_format">{type}</div>

        <div className="more_card__content_title">{title}</div>

        <p className="more_card__content_text">{description}</p>

        <div className="more_card__content_date">
          {new_price && (
            <p className="more_card__content_date_text">
              {new_price} {t('som')}
            </p>
          )}
          <p className="more_card__content_date_text">{start_date}</p>

          <p className="more_card__content_date_text">
            {t('duration')} {duration}
          </p>
        </div>

        <a href="/" className="more_card__content_btn">
          Записаться
        </a>
      </div>

      <div className="more_card__block">
        <img src={image} alt="image" className="more_card__block_img" />
      </div>
    </div>
  );
};
