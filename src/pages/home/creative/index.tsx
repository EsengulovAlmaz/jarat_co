import React from 'react'
import PagesLayout from '../../../elements/layouts/PagesLayouts'

import './index.scss'

interface ICreativeList {
    id: number
    logo: string
    title: string
}

const CreativeList: ICreativeList[] = [
    {
        id: 0,
        logo: "/src/assets/images/it.svg",
        title: "IT"
    },
    {
        id: 1,
        logo: "/src/assets/images/creative.svg",
        title: "Креатив"
    },
    {
        id: 2,
        logo: "/src/assets/images/education.svg",
        title: "Обучение"
    },
]

interface IContentList {
    id: number
    title: string
    blocks: IBlocks[]
}

interface IBlocks {
    id: number
    logo: string
    title: string
    text: string
}

const ContentList: IContentList[] = [
    {
        id: 20,
        title: "IT solutions",
        blocks: [
            {
                id: 201,
                logo: "/src/assets/images/creative1.svg",
                title: "Инженер-программист",
                text: "Начните свою карьеру в области инженерии: front-end, back-end или iOS-разработка."
            },
            {
                id: 202,
                logo: "/src/assets/images/creative2.svg",
                title: "Для владельцев бизнеса",
                text: "Вы можете заказать веб-сайт, приложение или заказать проектирование у нас!"
            }
        ]
    },
    {
        id: 30,
        title: "Marketing",
        blocks: [
            {
                id: 301,
                logo: "/src/assets/images/creative3.svg",
                title: "Что такое креативная индустрия?",
                text: "Креативные отрасли — это отрасли, основанные на индивидуальном творчестве, навыках и талантах или способные создавать богатство и рабочие места за счет разработки или производства интеллектуальной собственности."
            },
            {
                id: 302,
                logo: "/src/assets/images/creative4.svg",
                title: "Примеры творческих профессий",
                text: "Визуальные эффекты,3D-дизайн, Пилот дрона,СММ,UX/UIдизайн, Мобилография"
            },
        ]
    },
    {
        id: 40,
        title: "Courses",
        blocks: [
            {
                id: 401,
                logo: "/src/assets/images/creative5.svg",
                title: "Обучение на основе проектов в реальной жизни",
                text: "Мы считаем, что работа над реальными проектами может имитировать реальную жизнь, поэтому учащиеся могут быстрее адаптироваться и сразу же применять навыки."
            },
            {
                id: 402,
                logo: "/src/assets/images/creative5.svg",
                title: "Софт навыки и Ивенты",
                text: "Студенты и наставники могут посещать встречи, общаться, оттачивать свои социальные навыки и многое другое."
            },
            {
                id: 403,
                logo: "/src/assets/images/creative5.svg",
                title: "Лучшие студенты проходят стажировку у нас и партнеров",
                text: "Мы преподаем, потому что нам нужны эти специалисты. Таким образом, мы хотели бы нанять лучших студентов, если это возможно"
            },
        ]
    }
]

interface IGuantityList {
    id: number
    count: string
    text: string
}

const GuantityList: IGuantityList[] = [
    {
        id: 11,
        count: "15K+",
        text: "Студенты"
    },
    {
        id: 22,
        count: "9+",
        text: "Компаний"
    },
    {
        id: 33,
        count: "23+",
        text: "Менторов"
    },
    {
        id: 44,
        count: "33+",
        text: "Проекты"
    },
]

export const Creative = () => {
    const [active, setActive] = React.useState<number>(0)

    return (
        <PagesLayout>
            <div className="creative">
                <div className="creative__buttons">
                    {
                        CreativeList.map(({id, logo, title}) =>
                            <div 
                                onClick={() => setActive(id)}
                                key={id} 
                                className={`creative__btn ${active === id ? 'creative__active' : ''}`}
                            >
                                <img
                                    className="creative__btn_img"
                                    src={logo} 
                                    alt="logo" 
                                />
                                <p>
                                    {title}
                                </p>
                            </div>
                        )
                    }
                </div>

                <div className="creative__content">
                    <div>
                        <div className="creative__content_title">
                            {ContentList[active].title}
                        </div>
                        <div className="creative__content_block">
                            {
                                ContentList[active].blocks.map(({id, logo, text, title}) =>
                                    <div key={id} className="creative__content_info">
                                        <div>
                                            <img 
                                                src={logo} 
                                                alt="logo" 
                                                className="creative__content_info_img"    
                                            />
                                        </div>
                                        <div>
                                            <div className="creative__content_info_title">
                                                {title}
                                            </div>
                                            <div className="creative__content_info_text">
                                                {text}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>    
                    </div>
                </div>

                <div className="creative__quantity">
                    {
                        GuantityList.map(({id, count, text}) =>
                            <div key={id} className="creative__quantity_block">
                                <div className="creative__title">
                                    {count}
                                </div>
                                <p className="creative__text">
                                    {text}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </PagesLayout>
    )
}
