import * as React from 'react';
import { Logo } from '../../img/logo';
import { FBIcon } from '../../img/fb-icon';
import { InstIcon } from '../../img/inst-icon';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { BrushBkg } from '../../img';

const cx = classNames.bind(styles);

const routeList = [
  {
    name: 'Главная',
    route: '/',
  },
  {
    name: 'Меню',
    route: '/menu',
  },
  {
    name: 'Доставка и оплата',
    route: '/temp',
  },
  {
    name: 'Отзывы',
    route: '/temp',
  },
  {
    name: 'Контакты',
    route: '/temp',
  },
];

export const Header: React.FC = () => {
  return (
    <div className={cx('header-container')}>
      <header className={cx('header')}>
        <div className={cx('logo-container')}>
          <NavLink to="/" className={cx('logo')}>
            <Logo />
          </NavLink>
        </div>

        <nav>
          <ul className={cx('nav-list')}>
            {routeList.map((item) => (
              <li className={cx('nav-item')} key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    cx('nav-link', {
                      disabled: item.route === 'disabled',
                      active: isActive,
                    })
                  }
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cx('socials')}>
          <ul className={cx('socials-list')}>
            <li>
              <a href="https://uk-ua.facebook.com/" target="_blank">
                <FBIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <InstIcon />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
