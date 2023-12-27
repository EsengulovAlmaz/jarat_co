import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { SpeakersCard } from '../../components/speakersCard';
import { MoreCard } from '../../components/moreCard';
import { useParams } from 'react-router-dom';
import { Loader } from '../../elements/sections/loader';
import { EventsCardProps } from '../../types/events';
import { axiosRequest } from '../../api/api';

import './index.scss';
import { useTranslation } from 'react-i18next';

const MoreEvents = () => {
  const [eventMore, setEventMore] = React.useState<EventsCardProps | null>();
  const { id } = useParams();
  const { i18n } = useTranslation();

  const getEventMore = React.useCallback(
    async (lang: string) => {
      const { data } = await axiosRequest(lang).get(`/events/${id}`);

      if (!data) {
        return [];
      }

      setEventMore(data);
    },
    [id],
  );

  React.useEffect(() => {
    getEventMore(i18n.language);
  }, [getEventMore, i18n.language]);

  if (!eventMore) return <Loader />;

  return (
    <PagesLayout>
      <div className="more_events">
        <MoreCard {...eventMore} />

        <div className="more_events__title">спикеры</div>

        <div className="more_events__speakers">
          {eventMore.speakers.map((item) => (
            <SpeakersCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

export default MoreEvents;
