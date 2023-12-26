import React from 'react';

import { useParams } from 'react-router-dom';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';
import './index.scss';

interface InfoProps {
  url: string;
}

interface InfoMore {
  id: number;
  title: string;
  description: string;
  logo?: string;
  image?: string;
  url?: string;
}

export const InfoCard: React.FC<InfoProps> = ({ url }) => {
  const [infoMore, setInfoMore] = React.useState<InfoMore | null>();
  const { id } = useParams();

  const getInfoMore = React.useCallback(async () => {
    const { data } = await axiosRequest.get(`${url}/${id}`);

    if (!data) {
      return [];
    }

    setInfoMore(data);
  }, [id, url]);

  React.useEffect(() => {
    getInfoMore();
  }, [getInfoMore]);

  if (!infoMore) return <Loader />;

  return (
    <div className="info_card">
      <div className="info_card__content">
        <div className="info_card__title">{infoMore.title}</div>
        <div className="info_card__text">{infoMore.description}</div>
        {infoMore.url && (
          <a href={infoMore.url} className="info_card__btn">
            Перейти на сайт
          </a>
        )}
      </div>
      <div className="info_card__block">
        <img src={infoMore.logo ? infoMore.logo : infoMore.image} alt="" className="info_card__block_img" />
      </div>
    </div>
  );
};
