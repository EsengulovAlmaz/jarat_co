import React from 'react'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import './index.scss'
import { PortfolioCard } from './portfolioCard'

interface IPortfolioCardProps {
    id: number
    logo: string
    name: string
    projects: IProjects[]
}

interface IProjects {
    id: number
    img: string
}

const PortfolioList: IPortfolioCardProps[] = [
    {
        id: 1,
        logo: '/src/assets/images/cryxxen.svg',
        name: 'Cryxxen',
        projects: [
            {
                id: 111,
                img: '/src/assets/images/cryxxenLogo.svg'
            },
            {
                id: 112,
                img: '/src/assets/images/cryxxenLogo.svg'
            },
            {
                id: 113,
                img: '/src/assets/images/cryxxenLogo.svg'
            },
            {
                id: 114,
                img: '/src/assets/images/cryxxenLogo.svg'
            },
            {
                id: 115,
                img: '/src/assets/images/cryxxenLogo.svg'
            },
        ]
    },
    {
        id: 2,
        logo: '/src/assets/images/mov.fx.svg',
        name: 'Mov.fx',
        projects: [
            {
                id: 221,
                img: '/src/assets/images/movLogo.svg'
            },
            {
                id: 222,
                img: '/src/assets/images/movLogo.svg'
            },
            {
                id: 223,
                img: '/src/assets/images/movLogo.svg'
            },
            {
                id: 224,
                img: '/src/assets/images/movLogo.svg'
            },
            {
                id: 225,
                img: '/src/assets/images/movLogo.svg'
            }
        ]
    },
    {
        id: 3,
        logo: '/src/assets/images/jaratLogo.svg',
        name: 'Jarat.co',
        projects: [
            {
                id: 331,
                img: '/src/assets/images/jarat.co.svg'
            },
            {
                id: 332,
                img: '/src/assets/images/jarat.co.svg'
            },
            {
                id: 333,
                img: '/src/assets/images/jarat.co.svg'
            },
            {
                id: 334,
                img: '/src/assets/images/jarat.co.svg'
            },
            {
                id: 335,
                img: '/src/assets/images/jarat.co.svg'
            }
        ]
    }
]

export const Portfolio = () => {
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
