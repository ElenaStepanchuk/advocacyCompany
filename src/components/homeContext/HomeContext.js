import { AiFillCheckCircle } from 'react-icons/ai';

import css from './homeContext.module.css';

import bunner1 from '../../img/homePage/background.png';
import bunner2 from '../../img/homePage/bunner33.jpg';
import bunner3 from '../../img/homePage/backgroundFemida.jpg';
import bunner4 from '../../img/homePage/bunner4.jpg';

const HomeContext = () => {
  return (
    <>
      <div>
        <img className={css.imgFon} src={bunner1} alt="fon" />
        <h3>Какие услуги предоставляет юрист по ДТП?</h3>
        <p>
          Если произошло ДТП, первое, что нужно сделать – вызвать на место
          адвоката по дорожным делам еще до приезда сотрудников ГИБДД. Он
          поможет сохранять спокойствие и трезво оценивать ситуацию. Компания
          предлагает такие услуги:
        </p>
        <ul>
          <li>
            <AiFillCheckCircle />
            <span>профессиональная консультация;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>сбор документов;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>изучение ценных бумаг;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>оформление экспертизы автомобиля;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>защита клиента в суде;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>взыскание средств;</span>
          </li>
          <li>
            <AiFillCheckCircle />
            <span>возмещение понесенных расходов.</span>
          </li>
        </ul>
      </div>
      <div className={css.fon}>
        <img className={css.imgFon} src={bunner1} alt="fon" />
        <img className={css.imgFon} src={bunner2} alt="fon" />
      </div>
    </>
  );
};
export default HomeContext;
