import React from 'react'
import PagesLayout from '../../layouts/PagesLayouts'

import './index.scss'
import { Link } from 'react-router-dom'

interface IHeaderList {
  id: number
  title: string
  path: string
}

const headerList: IHeaderList[] = [
  {
    id: 1,
    title: "О нас",
    path: "/about"
  },
  {
    id: 2,
    title: "Курсы",
    path: "/courses"
  },
  {
    id: 3,
    title: "Портфолио",
    path: "/portfolio"
  },
  {
    id: 4,
    title: "партнеры",
    path: "/partners"
  },
  {
    id: 5,
    title: "Ивенты",
    path: "/events"
  }
]

export const Header = () => {
  // const { pathname } = useLocation()
  const [menu, setMenu] = React.useState<boolean>(false)
  
  return (
    <PagesLayout>
        <header className="header">
          <div className="header__wrapper">
            <Link to="/" className="header__logo">
              Jarat<span className="header__logo_co">.co</span>
            </Link>

            <ul className="header__list">
              {
                headerList.map(({id, title, path}) => (
                  <li key={id} className="header__list_item">
                    <Link to={path} className="header__list_link">
                      {title}
                    </Link>
                  </li>
                ))
              }
              <a href="#contacts" className="header__list_link">
                Контакты
              </a>
            </ul>

            <button className="header__btn">
              Есть проекты?
            </button>

            <button onClick={() => setMenu(!menu)} className="header__burger">
              <img
                className="header__burger_img"
                src={`/src/assets/images/${menu ? "close" : "burger"}.svg`}
                alt="menu" 
              />
            </button>
          </div>
         {
          menu 
          &&  <div className="header__menu">
                  <ul className="header__menu_list">
                    {
                      headerList.map(({id, title, path}) => (
                        <li key={id} className="header__menu_item">
                          <Link 
                            to={path} 
                            className={`header__menu_link`}
                          >
                            {title}
                          </Link>
                        </li>
                      ))
                    }
                    <a href="#contacts" className="header__menu_link">
                      Контакты
                    </a>
                  </ul>
                </div>
         }
        </header>
    </PagesLayout>
  )
}
