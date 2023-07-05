import css from './homeBunner.module.css';
import { NavLink } from 'react-router-dom';
import { Container } from 'components';

import { IoMdCheckmark } from 'react-icons/io';
import { SlCallEnd, SlEnvolope } from 'react-icons/sl';

import logotype from '../../img/logotype/logotype.png';
import RomanStasyk from '../../img/homePage/RomanStysyk1.jpg';
import slide2 from '../../img/homePage/111.jpg';
import slide3 from '../../img/homePage/telephoning.jpeg';

import bunner1 from '../../img/homePage/background.png';
import bunner2 from '../../img/homePage/bunner33.jpg';
import bunner3 from '../../img/homePage/backgroundFemida.jpg';
import bunner4 from '../../img/homePage/bunner4.jpg';

const HomeBunner = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.backdrop}></div>
        <div className={css.containerFirst}>
          <div className={css.sliderConteiner}>
            <div className={css.slide1}>
              <img src={bunner1} alt="slide1" />
            </div>
            <div className={css.slide2}>
              <img src={bunner2} alt="slide2" />
            </div>
            <div className={css.slide3}>
              <img src={bunner3} alt="slide3" />
            </div>
            <div className={css.slide4}>
              <img src={bunner4} alt="slide2" />
            </div>
          </div>
        </div>

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

        <div className={css.text_container4}>
          <h2 className={css.text7}>Наши контакты:</h2>
          <div className={css.text7}>
            <SlCallEnd className={css.icon} />
            <span>+38&nbsp;(068)&nbsp;520-80-20</span>
          </div>
          <div className={css.text7}>
            <SlCallEnd className={css.icon} />
            <span>+38&nbsp;(068)&nbsp;520-80-20</span>
          </div>
        </div>
        <div className={css.img_container4}>
          <img className={css.img4} src={slide3} alt="logotype" />
        </div>
      </div>
      <Container>
        <h3 className={css.text8}>Будут ли меня информировать о ходе дела?</h3>
        <p className={css.text9}>
          Обязательно и безусловно — это одно из главных правил в нашей
          деятельности, полное информирование «Клиента» о ходе дела и
          проделанной работе, при этом окончательное решение о дальнейших
          действиях всегда остается за клиентом. Мы можем (и обязаны) указать
          возможные пути и юридические шаги и помочь вместе выбрать наилучший
          вариант для «Клиента». Кроме того, мы обязаны информировать клиента.
          Например, это будет отражаться в том, что каждый шаг будет обсуждаться
          с «Клиентом», и любая информация, будь то письма от другой стороны,
          распоряжения властей или решения суда, будет передана «Клиенту».
        </p>
      </Container>
    </>
  );
};
export default HomeBunner;
