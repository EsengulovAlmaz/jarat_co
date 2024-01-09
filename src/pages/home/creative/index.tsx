import React from 'react';
import PagesLayout from '../../../elements/layouts/PagesLayouts';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { creative, creative1, creative2, creative3, creative4, creative5, education, it } from '../../../assets/images';

import './index.scss';

interface ICreativeList {
  id: number;
  logo: string;
  title: string;
}

const CreativeList: ICreativeList[] = [
  {
    id: 0,
    logo: `${it}`,
    title: 'it',
  },
  {
    id: 1,
    logo: `${creative}`,
    title: 'creativeTitle',
  },
  {
    id: 2,
    logo: `${education}`,
    title: 'education',
  },
];

interface IContentList {
  id: number;
  title: string;
  blocks: IBlocks[];
}

interface IBlocks {
  id: number;
  logo: string;
  title: string;
  text: string;
}

const ContentList: IContentList[] = [
  {
    id: 20,
    title: 'IT solutions',
    blocks: [
      {
        id: 201,
        logo: `${creative1}`,
        title: 'itSolutionsTitle1',
        text: 'itSolutionsText1',
      },
      {
        id: 202,
        logo: `${creative2}`,
        title: 'itSolutionsTitle2',
        text: 'itSolutionsText2',
      },
    ],
  },
  {
    id: 30,
    title: 'Marketing',
    blocks: [
      {
        id: 301,
        logo: `${creative3}`,
        title: 'marketingTitle1',
        text: 'marketingText1',
      },
      {
        id: 302,
        logo: `${creative4}`,
        title: 'marketingTitle2',
        text: 'marketingText2',
      },
    ],
  },
  {
    id: 40,
    title: 'Courses',
    blocks: [
      {
        id: 401,
        logo: `${creative5}`,
        title: 'coursesTitle1',
        text: 'coursesText1',
      },
      {
        id: 402,
        logo: `${creative5}`,
        title: 'coursesTitle2',
        text: 'coursesText2',
      },
      {
        id: 403,
        logo: `${creative5}`,
        title: 'coursesTitle3',
        text: 'coursesText3',
      },
    ],
  },
];

interface IGuantityList {
  id: number;
  count: string;
  text: string;
}

const GuantityList: IGuantityList[] = [
  {
    id: 11,
    count: '15K+',
    text: 'students',
  },
  {
    id: 22,
    count: '9+',
    text: 'companies',
  },
  {
    id: 33,
    count: '23+',
    text: 'mentors',
  },
  {
    id: 44,
    count: '33+',
    text: 'projects',
  },
];

export const Creative = () => {
  const [active, setActive] = React.useState<number>(0);
  const { t } = useTranslation();

  return (
    <PagesLayout>
      <div className="creative">
        <div className="creative__buttons">
          {CreativeList.map(({ id, logo, title }) => (
            <Button
              style={{
                color: '#fff',
                borderRadius: '15px',
                background: '#181a1e',
                fontWeight: 600,
                padding: '20px 0',
                fontSize: '16px',
              }}
              onClick={() => setActive(id)}
              key={id}
              className={`creative__btn ${active === id ? 'creative__active' : ''}`}
            >
              <img className="creative__btn_img" src={logo} alt="logo" />
              <p>{t(title)}</p>
            </Button>
          ))}
        </div>

        <div className="creative__content">
          <div>
            <div className="creative__content_title">{ContentList[active].title}</div>
            <div className="creative__content_block">
              {ContentList[active].blocks.map(({ id, logo, text, title }) => (
                <div key={id} className="creative__content_info">
                  <div>
                    <img src={logo} alt="logo" className="creative__content_info_img" />
                  </div>
                  <div>
                    <div className="creative__content_info_title">{t(title)}</div>
                    <div className="creative__content_info_text">{t(text)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="creative__quantity">
          {GuantityList.map(({ id, count, text }) => (
            <div key={id} className="creative__quantity_block">
              <div className="creative__title">{count}</div>
              <p className="creative__text">{t(text)}</p>
            </div>
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};
