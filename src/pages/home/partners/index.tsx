import React from 'react';

import PagesLayout from '../../../elements/layouts/PagesLayouts';
import { useTranslation } from 'react-i18next';
import { PartnersCard } from '../../../components/partnersCard';
import { Loader } from '../../../elements/sections/loader';
import { axiosRequest } from '../../../api/api';

import './index.scss';

interface IPartnersList {
  id: number;
  title: string;
  description: string;
  logo: string;
}

export const Partners = () => {
  const [partnersList, setPartnersList] = React.useState<IPartnersList[]>([]);
  const { t } = useTranslation();

  const getPartners = React.useCallback(async () => {
    const { data } = await axiosRequest.get('/partners/');

    if (!data) {
      return [];
    }

    setPartnersList(data);
  }, []);

  React.useEffect(() => {
    getPartners();
  }, [getPartners]);

  if (partnersList.length === 0) return <Loader />;

  return (
    <PagesLayout>
      <div className="partners">
        <div className="partners__title">{t('ourPartners')}</div>
        <p className="partners__text">{t('ourPartnersText')}</p>

        <div className="partners__wrapper">
          {partnersList.map((item) => (
            <PartnersCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};
