import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { PortfolioCard } from './portfolioCard';
import { useTranslation } from 'react-i18next';
import { axiosRequest } from '../../api/api';
import { Loader } from '../../elements/sections/loader';

import './index.scss';

interface IPortfolio {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const OurPortfolio = () => {
  const [portfolioList, setPortfolioList] = React.useState<IPortfolio[]>([]);
  const [moreText, setMoreText] = React.useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const getPortfolio = React.useCallback(async (lang: string) => {
    const { data } = await axiosRequest(lang).get('/portfolios/');

    if (!data) {
      return [];
    }

    setPortfolioList(data);
  }, []);

  React.useEffect(() => {
    getPortfolio(i18n.language);
  }, [getPortfolio, i18n.language]);

  if (portfolioList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="portfolio">
        <div className="portfolio__title">{t('portfolio')}</div>
        <p className="portfolio__text">{t('portfolioText1')}</p>
        {moreText && <p className="portfolio__text">{t('portfolioText2')}</p>}
        <button onClick={() => setMoreText(!moreText)} className="portfolio__btn">
          {t(moreText ? 'hide' : 'readMore')}
        </button>

        <div className="portfolio__wrapper">
          {portfolioList.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};
