import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
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
