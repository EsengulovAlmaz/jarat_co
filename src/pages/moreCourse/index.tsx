import React from 'react'
import PagesLayout from '../../elements/layouts/PagesLayouts'
import { MoreCard } from '../../components/moreCard'

import './index.scss'
import { LearnCard } from '../../components/learnCard'
import { ProgramCard } from '../../components/programCard'
import { SpeakersCard } from '../../components/speakersCard'
import { QuestionsCard } from '../../components/questionsCard'

interface IQuestions {
    id: number
    title: string
    description: string
}

const questionsList: IQuestions[] = [
    {
        id: 1,
        title: "Подойдет ли для меня эта профепрофессия?",
        description: `В программе предусмотрены каникулы, во время которых можно отдохнуть или повторить сложные темы. 
        
        Если вам понадобится сделать паузу во время учёбы или уделить больше времени закреплению материала, можно будет взять академический отпуск — для этого напишите своему куратору. 
        
        Вы можете продолжить свое обучение на следующем потоке.`
    },
    {
        id: 2,
        title: "Можно ли обучиться профессии за несколько месяцев ?",
        description: `В программе предусмотрены каникулы, во время которых можно отдохнуть или повторить сложные темы. 
        
        Если вам понадобится сделать паузу во время учёбы или уделить больше времени закреплению материала, можно будет взять академический отпуск — для этого напишите своему куратору. 
        
        Вы можете продолжить свое обучение на следующем потоке.`
    },
    {
        id: 3,
        title: "Каким требованиям мне нужно соответствовать ?",
        description: `В программе предусмотрены каникулы, во время которых можно отдохнуть или повторить сложные темы. 
        
        Если вам понадобится сделать паузу во время учёбы или уделить больше времени закреплению материала, можно будет взять академический отпуск — для этого напишите своему куратору. 
        
        Вы можете продолжить свое обучение на следующем потоке.`
    },
    {
        id: 4,
        title: "Кто будет меня обучать ?",
        description: `В программе предусмотрены каникулы, во время которых можно отдохнуть или повторить сложные темы. 
        
        Если вам понадобится сделать паузу во время учёбы или уделить больше времени закреплению материала, можно будет взять академический отпуск — для этого напишите своему куратору. 
        
        Вы можете продолжить свое обучение на следующем потоке.`
    },
    {
        id: 5,
        title: "Как и когда я буду учиться ? ",
        description: `В программе предусмотрены каникулы, во время которых можно отдохнуть или повторить сложные темы. 
        
        Если вам понадобится сделать паузу во время учёбы или уделить больше времени закреплению материала, можно будет взять академический отпуск — для этого напишите своему куратору. 
        
        Вы можете продолжить свое обучение на следующем потоке.`
    },
]

const MoreCourse = () => {
    const [selectedId, setSelectedId] = React.useState<number>(0)

    return (
        <PagesLayout>
            <div className="more_course">
                <MoreCard />

                <div className="more_course__learn">
                    <div className="more_course__learn_title">
                        Чему вы научитесь?
                    </div>

                    <LearnCard />
                    <LearnCard />
                    <LearnCard />
                </div>

                <div className="more_course__program">
                    <div className="more_course__title">
                        Программа
                    </div> 

                    <div className="more_course__program_block">
                        <ProgramCard />
                        <ProgramCard />
                        <ProgramCard />
                    </div>
                </div>

                <div className="more_course__speakers">
                    <div className="more_course__title">
                        спикеры
                    </div>

                    <div className="more_course__speakers_block">
                        <SpeakersCard />
                        <SpeakersCard />
                    </div>
                </div>

                <div className="more_course__questions">
                    <div className="more_course__title">
                        вопросы и ответы
                    </div>

                    <div className="more_course__questions_block">
                        {
                            questionsList.map(item => 
                                <QuestionsCard
                                    key={item.id}
                                    {...item}
                                    setSelectedId={setSelectedId}
                                    selectedId={selectedId}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </PagesLayout>
    )
}

export default MoreCourse