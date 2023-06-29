import css from './headerUp.module.css';
import { SlCallEnd, SlEnvolope } from 'react-icons/sl';

import logotype from '../../img/logotype/logotipe.png';

const HeaderUp = () => {
  return (
    <>
      <img src={logotype} alt="logotype" className={css.logotype_png} />
      <SlCallEnd className={css.icon} />
      <p>+38&nbsp;(068)&nbsp;520-80-20</p>
      <SlEnvolope className={css.icon} />
      <a target="_blank" rel="noreferrer" href="mailto: satsykrv@mail.com">
        satsykrv@mail.com
      </a>
    </>
  );
};

export default HeaderUp;
