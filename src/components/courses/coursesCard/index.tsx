import React from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CoursesCardProps } from '../../../types/courses';

import './index.scss';

export const CoursesCard: React.FC<CoursesCardProps> = ({
  id,
  duration,
  image,
  start_date,
  title,
  type,
  discount,
  new_price,
  old_price,
}) => {
  const { t } = useTranslation();

  return (
    <div className="courses_card">
      <div className="courses_card__content">
        <div className="courses_card__format">{type}</div>

        <div className="courses_card__title">{title}</div>

        <ul className="courses_card__info">
          <li className="courses_card__info_item">
            {t('duration')} {duration}
          </li>
          <li className="courses_card__info_item">
            {t('start')} {start_date}
          </li>
        </ul>

        <div className="courses_card__prices">
          <div>
            <button className="courses_card__promotion">{discount}</button>

            <div className="courses_card__newPrice">
              {new_price} {t('som')}
            </div>

            <div className="courses_card__oldPrice">{old_price}</div>
          </div>

          <Link to={`/courses/${id}`} className="courses_card__more">
            {t('more')}
          </Link>
        </div>
      </div>

      <div className="courses_card__block">
        <img src={image} alt="image" className="courses_card__block_img" />
      </div>
    </div>
  );
};
