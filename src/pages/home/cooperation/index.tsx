import React from 'react'

import './index.scss'

export const Cooperation = () => {
  return (
    <div className="cooperation">
        <div className="cooperation__wrapper">
          <div className="cooperation__content">
            <div className="cooperation__title">
              Мы всегда открыты к сотрудничеству
            </div>

            <p className="cooperation__text">
              «Если я видел дальше других, то потому, что стоял на плечах гигантов»
            </p>

            <p className="cooperation__text">
              Давайте учиться вместе, расти вместе и зарабатывать вместе. Если вы хотите нанять наших студентов и наставников, пожалуйста, свяжитесь с нами
            </p>

            <button className="cooperation__btn">
              Написать нам
            </button>
          </div>

          <div className="cooperation__block">
            <img 
              src="./src/assets/images/cooperation.svg" 
              alt="about us" 
              className="cooperation__block_img"
            />
          </div>
        </div>
      </div>
  )
}
