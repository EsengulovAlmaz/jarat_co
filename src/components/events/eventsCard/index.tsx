import React from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EventsCardProps } from '../../../types/events';

import './index.scss';

export const EventsCard: React.FC<EventsCardProps> = ({ id, duration, image, start_date, title, type }) => {
  const { t } = useTranslation();

  return (
    <div className="events_card">
      <div className="events_card__content">
        <div className="events_card__format">{type}</div>

        <div className="events_card__title">{title}</div>

        <ul className="events_card__info">
          <li className="events_card__info_item">
            {t('duration')} {duration}
          </li>
          <li className="events_card__info_item">
            {t('eventStart')} {start_date.slice(0, 11)}
          </li>
        </ul>

        <div className="events_card__date">
          <div>
            <div className="events_card__day">{start_date.slice(0, 11)}</div>

            <div className="events_card__time">{start_date.slice(11)}</div>
          </div>

          <Link to={`/events/${id}`} className="events_card__more">
            {t('more')}
          </Link>
        </div>
      </div>

      <div className="events_card__block">
        <img src={image} alt="image" className="events_card__block_img" />
      </div>
    </div>
  );
};
