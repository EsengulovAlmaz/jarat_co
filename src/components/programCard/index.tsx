import React from 'react';

import './index.scss';

interface IPrograms {
  id: number;
  title: string;
  description: string;
}

export const ProgramCard: React.FC<IPrograms> = ({ description, title }) => {
  return (
    <div className="program_card">
      <div className="program_card__title">{title}</div>

      <div className="program_card__text">{description}</div>
    </div>
  );
};
