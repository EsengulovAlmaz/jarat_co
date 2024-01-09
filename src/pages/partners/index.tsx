import React from 'react';

import PagesLayout from '../../elements/layouts/PagesLayouts';
import { PartnersCard } from '../../components/partnersCard';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../elements/sections/loader';
import { axiosRequest } from '../../api/api';
import { partners } from '../../assets/images';

import './index.scss';

interface IPartnersList {
  id: number;
  title: string;
  description: string;
  logo: string;
}

const Partners = () => {
  const [partnersList, setPartnersList] = React.useState<IPartnersList[]>([]);
  const { t, i18n } = useTranslation();

  const getPartners = React.useCallback(async (lang: string) => {
    const { data } = await axiosRequest(lang).get('/partners/');

    if (!data) {
      return [];
    }

    setPartnersList(data);
  }, []);

  React.useEffect(() => {
    getPartners(i18n.language);
  }, [getPartners, i18n.language]);

  if (partnersList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="partners_page">
        <div className="partners_page__banner">
          <div className="partners_page__title">{t('cooperation')}</div>
          <img className="partners_page__img" src={partners} alt="partners" />
        </div>

        <div className="partners_page__wrapper">
          {partnersList.map((item) => (
            <PartnersCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

export default Partners;
