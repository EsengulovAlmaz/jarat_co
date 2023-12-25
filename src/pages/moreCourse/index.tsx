import React from 'react';
import PagesLayout from '../../elements/layouts/PagesLayouts';
import { MoreCard } from '../../components/moreCard';

import './index.scss';
import { LearnCard } from '../../components/learnCard';
import { ProgramCard } from '../../components/programCard';
import { SpeakersCard } from '../../components/speakersCard';
import { QuestionsCard } from '../../components/questionsCard';
import { CoursesCardProps } from '../../types/courses';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';
import { useParams } from 'react-router-dom';

interface IQuestions {
  id: number;
  question: string;
  answer: string;
}

const MoreCourse = () => {
  const [courseMore, setCourseMore] = React.useState<CoursesCardProps | null>();
  const [answerList, setAnswerList] = React.useState<IQuestions[] | []>([]);
  const [selectedId, setSelectedId] = React.useState<number>(0);
  const { id } = useParams();

  const getCourseMore = React.useCallback(async () => {
    const { data } = await axiosRequest.get(`/courses/courses/${id}`);

    if (!data) {
      return [];
    }

    setCourseMore(data);
  }, [id]);

  const getAnswer = React.useCallback(async () => {
    const { data } = await axiosRequest.get('/courses/informations/');

    if (data.length === 0) {
      return [];
    }

    setAnswerList(data);
  }, []);

  React.useEffect(() => {
    getCourseMore();
    getAnswer();
  }, [getCourseMore, getAnswer]);

  if (!courseMore) return <Loader />;

  return (
    <PagesLayout>
      <div className="more_course">
        <MoreCard {...courseMore} />

        <div className="more_course__learn">
          <div className="more_course__learn_title">Чему вы научитесь?</div>

          {courseMore.learns.map((item) => (
            <LearnCard key={item.id} {...item} />
          ))}
        </div>

        <div className="more_course__program">
          <div className="more_course__title">Программа</div>

          <div className="more_course__program_block">
            {courseMore.programs.map((item) => (
              <ProgramCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="more_course__speakers">
          <div className="more_course__title">спикеры</div>

          <div className="more_course__speakers_block">
            {courseMore.speakers.map((item) => (
              <SpeakersCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="more_course__questions">
          <div className="more_course__title">вопросы и ответы</div>

          <div className="more_course__questions_block">
            {answerList.map((item) => (
              <QuestionsCard key={item.id} {...item} setSelectedId={setSelectedId} selectedId={selectedId} />
            ))}
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default MoreCourse;
