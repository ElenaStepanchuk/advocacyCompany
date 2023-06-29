import { NavLink } from 'react-router-dom';

import css from './navList.css';

const NavList = () => {
  return (
    <div className="navLink_container">
      <NavLink to="home" className="nav_link">
        Главная
      </NavLink>
      <NavLink to="about" className="nav_link">
        Про&nbsp;&nbsp;нас
      </NavLink>
      <NavLink to="services" className="nav_link">
        Наши&nbsp;&nbsp;услуги
      </NavLink>
      <NavLink to="contact" className="nav_link">
        Контакты
      </NavLink>
    </div>
  );
};
export default NavList;
