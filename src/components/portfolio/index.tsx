import React from 'react'

import './index.scss'
import { PortfolioCard } from './portfolioCard'
import PagesLayout from '../../elements/layouts/PagesLayouts'

interface IPortfolioCardProps {
    id: number
    img: string
    logo: string
    name: string
    description: string
}

const PortfolioList: IPortfolioCardProps[] = [
    {
        id: 1,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
    {
        id: 2,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
    {
        id: 3,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
    {
        id: 4,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
    {
        id: 5,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
    {
        id: 6,
        img: "/src/assets/images/portfolio1.png",
        logo: "/src/assets/images/cryxxenLogo.svg",
        name: "Cryxxen",
        description: "Мы разрабатываем программное обеспечение и помогаем бизнесу сократить расходы."
    },
]

export const OurPortfolio = () => {
    const [moreText, setMoreText] = React.useState<boolean>(false)

    return (
        <PagesLayout>
            <div className="portfolio">
                <div className="portfolio__title">
                    Портфолио
                </div>
                <p className="portfolio__text">
                    Наше портфолио демонстрирует исключительный талант и креативность наших студентов, наставников и выпускников в самых разных областях, включая дизайн, кино, анимацию и разработку программного обеспечения для веб-приложений и мобильных приложений.
                </p>
                {
                    moreText && 
                    <p className="portfolio__text">
                        Просмотрите нашу коллекцию вдохновляющих работ и узнайте, как наши образовательные и наставнические программы помогли нашим выпускникам внести значительный вклад в выбранные ими отрасли.
                    </p>
                }
                <button
                    onClick={() => setMoreText(!moreText)}
                    className="portfolio__btn"
                >
                    {
                        moreText
                            ? "Скрыть"
                            : "Читать подробнее"
                    }
                </button>

                <div className="portfolio__wrapper">
                    {
                        PortfolioList.map(item => 
                            <PortfolioCard key={item.id} {...item} />    
                        )
                    }
                </div>
            </div>
        </PagesLayout>
    )
}
