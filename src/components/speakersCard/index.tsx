import React from 'react'

import './index.scss'

export const SpeakersCard = () => {
    const [show, setShow] = React.useState<boolean>(false)

    return (
        <div 
            className="speakers_card" 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="speakers_card__img">
                <img 
                    src="/src/assets/images/test2.png"
                    alt="people"
                />
            </div>
            <div className="speakers_card__content">
                <div className="speakers_card__name">
                    Bektur Toktorbekov 
                </div>
                <div className="speakers_card__job">
                    {
                        show
                        ? 'Middle Full-Stack developer. Представитель и IT инженер @habsida.co в Кыргызстане | Получил опыт в Oculus, META.'
                        : 'Frontend Devoloper'
                    }
                </div>
            </div>
        </div>
    )
}
