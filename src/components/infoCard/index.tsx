import React from 'react'

import './index.scss'

export const InfoCard = () => {
  return (
    <div className="info_card">
        <div className="info_card__content">
            <div className="info_card__title">
                Cryxxen
            </div>
            <div className="info_card__text">
                Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы, эффективно распределять командные ресурсы, выстраивать прозрачные коммуникации и совершенствовать рабочие процессы.
            </div>
            <a href="/" className="info_card__btn">
                Перейти на сайт
            </a>
        </div>
        <div className="info_card__block">
            <img 
                src="/src/assets/images/portfolio1.png" 
                alt=""
                className="info_card__block_img"    
            />
        </div>
    </div>
  )
}
