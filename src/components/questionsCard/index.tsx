import React, { Dispatch, SetStateAction } from 'react';

import './index.scss';

interface QuestionsProps {
  id: number;
  question: string;
  answer: string;
  setSelectedId: Dispatch<SetStateAction<number>>;
  selectedId: number;
}

export const QuestionsCard: React.FC<QuestionsProps> = ({ id, question, answer, setSelectedId, selectedId }) => {
  return (
    <div className="questions_card" onClick={() => setSelectedId(id)}>
      <div className="questions_card__block">
        <img
          className={`questions_card__logo ${selectedId === id && 'questions_card__active'}`}
          src="/src/assets/images/plus.svg"
          alt="plus"
        />
        <div className="questions_card__title">{question}</div>
      </div>
      {selectedId === id && <div className="questions_card__description">{answer}</div>}
    </div>
  );
};
