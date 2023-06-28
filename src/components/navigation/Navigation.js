import css from './navigation.module.css';

import NavList from 'components/navList/NavList';

const Navigation = () => {
  return (
    <div className={css.nav_container}>
      <NavList />
    </div>
  );
};
export default Navigation;
