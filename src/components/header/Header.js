import { Outlet } from 'react-router-dom';
import { Navigation, HeaderUp } from 'components';

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
  return <div>{children}</div>;
};
