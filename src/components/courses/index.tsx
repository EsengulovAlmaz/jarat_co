import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { CoursesCard } from './coursesCard';
import { IoIosArrowDown } from 'react-icons/io';
import { CoursesCardProps } from '../../types/courses';
import { useTranslation } from 'react-i18next';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';

import './index.scss';

export const OurCourses = () => {
  const [coursesList, setCoursesList] = React.useState<CoursesCardProps[]>([]);
  const { t } = useTranslation();

  const getCourses = React.useCallback(async () => {
    const { data } = await axiosRequest.get('/courses/courses/');

    if (data.length === 0) {
      return [];
    }

    setCoursesList(data);
  }, []);

  React.useEffect(() => {
    getCourses();
  }, [getCourses]);

  if (coursesList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="courses">
        <div className="courses__title">{t('courses')}</div>
        <p className="courses__text">{t('coursesText')}</p>

        <div className="courses__wrapper">{coursesList?.map((item) => <CoursesCard key={item.id} {...item} />)}</div>

        <div className="courses__block">
          <button className="courses__block_btn">
            <p>{t('yet')}</p>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </PagesLayout>
  );
};
