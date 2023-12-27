import React from 'react';
import PagesLayout from '../../layouts/PagesLayouts';

import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IHeaderList {
  id: number;
  title: string;
  path: string;
}

const headerList: IHeaderList[] = [
  {
    id: 1,
    title: 'aboutUs',
    path: '/about',
  },
  {
    id: 2,
    title: 'courses',
    path: '/courses',
  },
  {
    id: 3,
    title: 'portfolio',
    path: '/portfolio',
  },
  {
    id: 4,
    title: 'partners',
    path: '/partners',
  },
  {
    id: 5,
    title: 'events',
    path: '/events',
  },
];

interface ILanguages {
  id: number;
  lang: string;
}

const languagesList: ILanguages[] = [
  {
    id: 1,
    lang: 'ru',
  },
  {
    id: 2,
    lang: 'en',
  },
];

export const Header = () => {
  const [menu, setMenu] = React.useState<boolean>(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <PagesLayout>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__logo" onClick={() => setMenu(false)}>
            Jarat<span className="header__logo_co">.co</span>
          </Link>

          <ul className="header__list">
            {headerList.map(({ id, title, path }) => (
              <li key={id} className="header__list_item">
                <Link to={path} className={`header__list_link ${pathname === path ? 'header__list_active' : ''}`}>
                  {t(title)}
                </Link>
              </li>
            ))}
            <a href="#contacts" className="header__list_link">
              {t('contacts')}
            </a>
          </ul>

          <div className="header__row">
            <a
              href="https://api.whatsapp.com/send/?phone=996999955000&text&type=phone_number&app_absent=0"
              className="header__btn"
              target="_blank"
            >
              {t('haveProjects')}
            </a>

            <button onClick={() => setMenu(!menu)} className="header__burger">
              <img
                className="header__burger_img"
                src={`/src/assets/images/${menu ? 'close' : 'burger'}.svg`}
                alt="menu"
              />
            </button>

            <select className="header__lang" onChange={(e) => changeLanguage(e.target.value)}>
              {languagesList.map(({ id, lang }) => (
                <option key={id} className="header__lang_item">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
        {menu && (
          <div className="header__menu">
            <ul className="header__menu_list">
              {headerList.map(({ id, title, path }) => (
                <li key={id} className="header__menu_item">
                  <Link
                    to={path}
                    className={`header__menu_link ${pathname === path ? 'header__menu_active' : ''}`}
                    onClick={() => setMenu(false)}
                  >
                    {t(title)}
                  </Link>
                </li>
              ))}
              <a href="#contacts" className="header__menu_link" onClick={() => setMenu(false)}>
                {t('contacts')}
              </a>
            </ul>
          </div>
        )}
      </header>
    </PagesLayout>
  );
};
