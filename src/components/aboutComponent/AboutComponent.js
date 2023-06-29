import React, { useRef, useEffect } from 'react';
import css from './aboutComponent.module.css';
import { Container } from 'components';

import { gsap } from 'gsap';

const AboutComponent = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  const el6 = useRef();
  const el7 = useRef();

  useEffect(() => {
    const interval = 3;
    const transactionX = 1620;

    gsap.to(el1.current, {
      delay: 0.2,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el2.current, {
      delay: 0.5,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el3.current, {
      delay: 0.8,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el4.current, {
      delay: 1.1,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el5.current, {
      delay: 1.4,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el6.current, {
      delay: 1.7,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el7.current, {
      delay: 2,
      x: transactionX,
      duration: interval,
    });
  }, []);

  return (
    <div className={css.aboutComponent_container}>
      <Container>
        <div className={css.text_container}>
          <h1 className={css.title} ref={el1}>
            Управляющий адвокат - Роман Сацык
          </h1>
          <p className={css.text} ref={el2}>
            Управляющим бюро является квалифицированный адвокат Роман Сацык.
          </p>
          <p className={css.text} ref={el3}>
            В 2014 окончил Киевский национальный университет имени Тараса
            Шевченко по специальности право. Получил диплом магистра.
          </p>
          <p className={css.text} ref={el4}>
            Более 2 лет работал помощником судьи.
          </p>
          <p className={css.text} ref={el5}>
            На сегодняшний день имеет 7 лет юридического стажа и ведет дела
            более 50 клиентов (юридических и физических лиц).
          </p>
          <p className={css.text} ref={el6}>
            На началу 2020 году создал адвокатское бюро «Романа Сацыка», которое
            предоставляет услуги как физическим так и юридическим лицам.
          </p>
          <p className={css.text} ref={el7}>
            Нужен адвокат в Киеве или Борисполе? Адвокатское бюро «Романа
            Сацыка» знает свое дело. Вы сможете в этом убедиться, если
            обратитесь к нам Адвокатское бюро «Романа Сацыка» предоставляет
            только профессиональные юридические услуги. Ждем вас!
          </p>
        </div>
      </Container>
    </div>
  );
};
export default AboutComponent;
