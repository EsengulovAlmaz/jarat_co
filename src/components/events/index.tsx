import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { EventsCard } from './eventsCard';
import { useTranslation } from 'react-i18next';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';
import { EventsCardProps } from '../../types/events';

import './index.scss';

export const OurEvents = () => {
  const [eventsList, setEventsList] = React.useState<EventsCardProps[]>([]);
  const { t } = useTranslation();

  const getEvents = React.useCallback(async () => {
    const { data } = await axiosRequest.get('/events/');

    if (data.length === 0) {
      return [];
    }

    setEventsList(data);
  }, []);

  React.useEffect(() => {
    getEvents();
  }, [getEvents]);

  if (eventsList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="events">
        <div className="events__title">{t('events')}</div>

        <p className="events__text">{t('eventsText')}</p>

        <div className="events__wrapper">
          {eventsList.map((item) => (
            <EventsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};
