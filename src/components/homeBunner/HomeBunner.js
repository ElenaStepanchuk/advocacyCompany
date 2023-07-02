import css from './homeBunner.module.css';
import { NavLink } from 'react-router-dom';

import { IoMdCheckmark } from 'react-icons/io';

import logotype from '../../img/logotype/logotype.png';
import RomanStasyk from '../../img/homePage/RomanStysyk1.jpg';
import slide2 from '../../img/homePage/111.jpg';

const HomeBunner = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.backdrop}></div>
        <div className={css.background}></div>

        <div className={css.text_container1}>
          <h2 className={css.text1}>Добро пожаловать</h2>
          <h2 className={css.text1}>Адвокадское бюро</h2>
          <h1 className={css.text2}>"Романа Сацыка"</h1>
        </div>
        <div className={css.img_container1}>
          <img className={css.img1} src={logotype} alt="logotype" />
        </div>
        <div className={css.text_container2}>
          <div>
            <h2 className={css.text3}>Практика</h2>
            <ul>
              <li className={css.text4}>
                <IoMdCheckmark />
                &nbsp;&nbsp;Гражданские дела
              </li>
              <li className={css.text4}>
                <IoMdCheckmark />
                &nbsp;&nbsp; Административные дела
              </li>
              <li className={css.text4}>
                <IoMdCheckmark />
                &nbsp;&nbsp; Криминальные дела
              </li>
              <li className={css.text4}>
                <IoMdCheckmark />
                &nbsp;&nbsp; Хозяйственные дела
              </li>
              <li className={css.text4}>
                <IoMdCheckmark />
                &nbsp;&nbsp; Корпоративное право
              </li>
            </ul>
            <button className={css.button}>
              <NavLink to="/services" className={css.button__link}>
                Подробнее
              </NavLink>
            </button>
          </div>
        </div>
        <div className={css.img_container2}>
          <img className={css.img2} src={slide2} alt="slide2" />
        </div>
        <div className={css.text_container3}>
          <h2 className={css.text5}>Вы выбираете</h2>
          <h1 className={css.text6}>Адвокадское бюро "Романа Сацыка"</h1>
          <button type="button" className={css.button}>
            <NavLink to="/about" className={css.button__link}>
              Подробнее
            </NavLink>
          </button>
        </div>
        <div className={css.img_container3}>
          <img className={css.img3} src={RomanStasyk} alt="RomanStasyk" />
        </div>
      </div>
    </>
  );
};
export default HomeBunner;
