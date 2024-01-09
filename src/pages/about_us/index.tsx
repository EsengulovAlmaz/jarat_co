import React from 'react';

import { useTranslation } from 'react-i18next';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';
import { mission } from '../../assets/images';
import './index.scss';

interface IRequest {
  id: number;
  title: string;
  descriptions: IDescriptions[];
}

interface IDescriptions {
  id: number;
  description: string;
}

const AboutUs = () => {
  const [aboutInfo, setAboutInfo] = React.useState<IRequest[]>([]);
  const { t, i18n } = useTranslation();

  const getAbout = React.useCallback(async (lang: string) => {
    const { data } = await axiosRequest(lang).get('/abouts/');

    if (data.length === 0) {
      return [];
    }

    setAboutInfo(data);
  }, []);

  React.useEffect(() => {
    getAbout(i18n.language);
  }, [getAbout, i18n.language]);

  if (aboutInfo.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="mission">
        <div className="mission__content">
          <p className="mission__content_title">
            Jarat<span className="mission__content_co">.co</span>
          </p>

          <div className="mission__content_text">{t('mission')}</div>
        </div>
        <div className="mission__block">
          <img src={mission} alt="image" className="mission__block_img" />
        </div>
      </div>

      {aboutInfo?.map(({ id, title, descriptions }) => (
        <div className="strive" key={id}>
          <div className="aboutUs__title">{title}</div>
          {descriptions?.map(({ id, description }) => (
            <p className="aboutUs__text" key={id}>
              {description}
            </p>
          ))}
        </div>
      ))}
    </PagesLayout>
  );
};

export default AboutUs;
