import css from './headerUp.module.css';
import { SlCallEnd, SlEnvolope } from 'react-icons/sl';

import logotype from '../../img/logotype/logotype.png';

const HeaderUp = () => {
  return (
    <div className={css.headerUp_container}>
      <div className={css.logo_container}>
        <img src={logotype} alt="logotype" className={css.logotype_png} />
      </div>
      <div className={css.phone_container}>
        <SlCallEnd className={css.icon} />
        <span className={css.phone_span}>+38&nbsp;(068)&nbsp;520-80-20</span>
      </div>
      <div className={css.mail_container}>
        <SlEnvolope className={css.icon} />
        <a
          className={css.mail_link}
          target="_blank"
          rel="noreferrer"
          href="mailto: satsykrv@mail.com"
        >
          satsykrv@mail.com
        </a>
      </div>
    </div>
  );
};

export default HeaderUp;
