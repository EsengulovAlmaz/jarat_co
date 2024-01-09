import { cooperation } from '../../../assets/images';
import { useTranslation } from 'react-i18next';
import './index.scss';

export const Cooperation = () => {
  const { t } = useTranslation();

  return (
    <div className="cooperation">
      <div className="cooperation__wrapper">
        <div className="cooperation__content">
          <div className="cooperation__title">{t('cooperationTitle')}</div>

          <p className="cooperation__text">{t('cooperationText1')}</p>

          <p className="cooperation__text">{t('cooperationText2')}</p>

          <a
            className="cooperation__btn"
            href="https://api.whatsapp.com/send/?phone=996999955000&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            {t('writeUs')}
          </a>
        </div>

        <div className="cooperation__block">
          <img src={cooperation} alt="about us" className="cooperation__block_img" />
        </div>
      </div>
    </div>
  );
};
