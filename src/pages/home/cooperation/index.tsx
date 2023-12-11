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

            <a 
              className="cooperation__btn"
              href="https://api.whatsapp.com/send/?phone=996999955000&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Написать нам
            </a>
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
