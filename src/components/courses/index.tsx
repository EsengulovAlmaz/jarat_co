import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { CoursesCard } from './coursesCard';
import { CoursesCardProps } from '../../types/courses';
import { useTranslation } from 'react-i18next';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';

import './index.scss';

export const OurCourses = () => {
  const [coursesList, setCoursesList] = React.useState<CoursesCardProps[]>([]);
  const { t, i18n } = useTranslation();

  const getCourses = React.useCallback(async (lang: string) => {
    const { data } = await axiosRequest(lang).get(`/courses/courses`);

    if (data.length === 0) {
      return [];
    }

    setCoursesList(data);
  }, []);

  React.useEffect(() => {
    getCourses(i18n.language);
  }, [getCourses, i18n.language]);

  if (coursesList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="courses">
        <div className="courses__title">{t('courses')}</div>
        <p className="courses__text">{t('coursesText')}</p>

        <div className="courses__wrapper">{coursesList?.map((item) => <CoursesCard key={item.id} {...item} />)}</div>
      </div>
    </PagesLayout>
  );
};
