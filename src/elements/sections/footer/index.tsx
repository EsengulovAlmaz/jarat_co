import React from 'react'
import PagesLayout from '../../layouts/PagesLayouts'

import "./index.scss"
import { Link } from 'react-router-dom'

interface IFooter {
  id: number
  title: string
  path: string
}

const IFooterList: IFooter[] = [
  {
    id: 1,
    title: "Курсы",
    path: ""
  },
  {
    id: 2,
    title: "Портфолио",
    path: ""
  },
  {
    id: 3,
    title: "Ивенты",
    path: ""
  },
  {
    id: 4,
    title: "Контакты",
    path: ""
  },
]

export const Footer = () => {
  return (
    <PagesLayout>
        <div className="footer" id="contacts">
          <div className="footer__wrapper">
            <div>
              <a className="footer__title">
                JARAT<span className="footer__title_co">.CO</span>
              </a>
              <p className="footer__text">Учись, твори, обучай</p>
            </div>

            <div>
              <a className="footer__title">co.jarat@gmail.com</a>
              <p className="footer__text">Для новых проектов</p>
            </div>

            <div>
              <a className="footer__title">+996 999 955 000</a>
              <p className="footer__text">Whatsapp/Telegram</p>  
            </div>  
          </div>

          <hr className="footer__line" />

          <div className="footer__wrapper">
            <ul className="footer__list">
              {
                IFooterList.map(({id, path, title}) => (
                  <li key={id}>
                    <Link to={path} className="footer__list_link">
                      {title}
                    </Link>
                  </li>
                ))
              }
            </ul>

            <div className="footer__wrapper_text">
              Copyright ©2023 Jarat.co. All rights reserved. By Islam Sultangaziev
            </div>
          </div>                                                             
        </div>
    </PagesLayout>
  )
}
