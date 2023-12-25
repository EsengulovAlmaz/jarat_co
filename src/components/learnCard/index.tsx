import React from 'react';

import './index.scss';

interface ILearns {
  id: number;
  order: string;
  title: string;
  description: string;
}

export const LearnCard: React.FC<ILearns> = ({ description, order, title }) => {
  return (
    <div className="learn_card">
      <div className="learn_card__num">0{order}</div>

      <div className="learn_card__content">
        <div className="learn_card__title">{title}</div>

        <div className="learn_card__text">{description}</div>
      </div>
    </div>
  );
};
