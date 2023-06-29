import { Outlet } from 'react-router-dom';
import { Navigation, HeaderUp, Container } from 'components';
import css from './header.module.css';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderUp />
        <Navigation />
      </HeaderWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Header;

const HeaderWrapper = ({ children }) => {
  return <div className={css.header_container}>{children}</div>;
};
