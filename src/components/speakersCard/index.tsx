import React from 'react';

import './index.scss';

interface ISpeakers {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}

export const SpeakersCard: React.FC<ISpeakers> = ({ description, image, name, title }) => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div className="speakers_card" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="speakers_card__img">
        <img src={image} alt="people" />
      </div>
      <div className="speakers_card__content">
        <div className="speakers_card__name">{name}</div>
        <div className="speakers_card__job">{show ? `${description}` : `${title}`}</div>
      </div>
    </div>
  );
};
