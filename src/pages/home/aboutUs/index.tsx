import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PagesLayout from '../../../elements/layouts/PagesLayouts';

import './index.scss';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <PagesLayout>
      <div className="about_us">
        <div className="about_us__content">
          <div className="about_us__title">{t('aboutUs')}</div>

          <p className="about_us__text">{t('aboutUsText')}</p>

          <Link to="/about" className="about_us__btn">
            {t('more')}
          </Link>
        </div>

        <div className="about_us__block">
          <img src="./src/assets/images/about_us.svg" alt="about us" className="about_us__block_img" />
        </div>
      </div>
    </PagesLayout>
  );
};
