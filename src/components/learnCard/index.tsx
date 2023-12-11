import React from 'react'

import './index.scss'

export const LearnCard = () => {
  return (
   <div className="learn_card">
        <div className="learn_card__num">
            01
        </div>

        <div className="learn_card__content">
            <div className="learn_card__title">
                После оплаты на почту приходит доступ к обучающей платформе
            </div>
            
            <div className="learn_card__text">
                Все уроки расположены на обучающей платформе Геткурс. Внутри тебя сразу будут ждать первые ознакомительные уроки.
            </div>
        </div>
   </div>
  )
}