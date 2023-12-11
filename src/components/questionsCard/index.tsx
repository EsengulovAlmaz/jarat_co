import React, { Dispatch, SetStateAction } from 'react'

import './index.scss'

interface QuestionsProps {
    id: number
    title: string
    description: string
    setSelectedId: Dispatch<SetStateAction<number>>
    selectedId: number
}

export const QuestionsCard: React.FC<QuestionsProps> = ({
    id,
    title,
    description,
    setSelectedId,
    selectedId
}) => {
  return (
    <div className="questions_card" onClick={() => setSelectedId(id)}>
        <div className="questions_card__block">
            <img
                className={`questions_card__logo ${selectedId === id && 'questions_card__active'}`}
                src="/src/assets/images/plus.svg" 
                alt="plus" 
            />
            <div className="questions_card__title">
                {title}
            </div>
        </div>
        {
            selectedId === id
            &&  <div className="questions_card__description">
                    {description}
                </div>
        }
    </div>
  )
}
