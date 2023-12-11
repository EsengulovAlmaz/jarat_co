import React from 'react'
import PagesLayout from '../../elements/layouts/PagesLayouts'

import './index.scss'

const MorePortfolio = () => {
  return (
    <PagesLayout>
        <div className="more_portfolio">
            <div className="more_portfolio__content">
                <div className="more_portfolio__title">
                    Cryxxen
                </div>
                <div className="more_portfolio__text">
                    Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы, эффективно распределять командные ресурсы, выстраивать прозрачные коммуникации и совершенствовать рабочие процессы.
                </div>
                <a href="/" className="more_portfolio__btn">
                    Перейти на сайт
                </a>
            </div>
            <div className="more_portfolio__block">
                    <img 
                        src="/src/assets/images/portfolio1.png" 
                        alt=""
                        className="more_portfolio__block_img"    
                    />
            </div>
        </div>
    </PagesLayout>
  )
}

export default MorePortfolio