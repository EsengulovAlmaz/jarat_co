import React from 'react';
import PagesLayout from '../../../elements/layouts/PagesLayouts';

import './index.scss';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <PagesLayout>
      <div className="banner">
        <div className="banner__content">
          <div className="banner__title">{t('school')}</div>
          <div className="banner__title">{t('creative')}</div>
          <div className="banner__title">{t('professions')}</div>

          <p className="banner__text">{t('textBanner')}</p>
        </div>

        <div className="banner__block">
          <img className="banner__block_img" src="/src/assets/images/banner_img.svg" alt="image" />
        </div>
      </div>
    </PagesLayout>
  );
};
