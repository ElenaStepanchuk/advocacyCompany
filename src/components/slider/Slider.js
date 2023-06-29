import SimpleImageSlider from 'react-simple-image-slider';
import { IoMdCheckmark } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import React, { useRef, useEffect, useCallback } from 'react';

import { gsap } from 'gsap';

import css from './slider.module.css';

import img1 from '../../img/homePage/banner.png';
import img2 from '../../img/homePage/RomanStasyk1.png';
import img3 from '../../img/homePage/bunner3.png';

const images = [
  { url: img1, title: 'banner1' },
  { url: img2, title: 'banner2' },
  { url: img3, title: 'banner3' },
];

const Slider = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  const el6 = useRef();
  const el7 = useRef();
  const el8 = useRef();
  const el9 = useRef();
  const el10 = useRef();
  const el11 = useRef();
  const el12 = useRef();
  const el13 = useRef();

  useEffect(() => {
    const interval = 2;
    const transactionX = 900;
    gsap.to(el1.current, {
      x: transactionX,
      duration: interval,
    });
    gsap.to(el2.current, {
      delay: 1.2,
      x: transactionX,
      duration: interval,
    });
    gsap.to(el3.current, {
      delay: 1.6,
      x: transactionX,
      duration: interval,
    });
  }, []);

  const onStartSlide = useCallback((idx, length) => {
    console.log(`[App onStartSlide] ${idx}/${length}`);
    if (idx === 1) {
      const interval = 2;
      const transactionX = 900;
      gsap.to(el1.current, {
        delay: 0.8,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el2.current, {
        delay: 1.2,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el3.current, {
        delay: 1.6,
        x: transactionX,
        duration: interval,
      });
    }
    if (idx === 2) {
      const interval = 2;
      const transactionX = 800;
      gsap.to(el4.current, {
        delay: 0.8,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el5.current, {
        delay: 1.2,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el6.current, {
        delay: 1.6,
        x: transactionX,
        duration: interval,
      });
    }
    if (idx === 3) {
      const interval = 2;
      const transactionX = -900;
      gsap.to(el7.current, {
        delay: 0.2,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el8.current, {
        delay: 0.5,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el9.current, {
        delay: 0.8,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el10.current, {
        delay: 1.1,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el11.current, {
        delay: 1.4,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el12.current, {
        delay: 1.7,
        x: transactionX,
        duration: interval,
      });
      gsap.to(el13.current, {
        delay: 2,
        x: transactionX,
        duration: interval,
      });
    }
    if (idx === 1 || idx === 3) {
      const interval = 0.1;
      const transactionX = -800;
      gsap.to(el4.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el5.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el6.current, {
        x: transactionX,
        duration: interval,
      });
    }
    if (idx === 2 || idx === 3) {
      const interval = 0.1;
      const transactionX = -900;
      gsap.to(el1.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el2.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el3.current, {
        x: transactionX,
        duration: interval,
      });
    }
    if (idx === 1 || idx === 2) {
      const interval = 0.1;
      const transactionX = 900;
      gsap.to(el7.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el8.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el9.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el10.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el11.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el12.current, {
        x: transactionX,
        duration: interval,
      });
      gsap.to(el13.current, {
        x: transactionX,
        duration: interval,
      });
    }
  }, []);

  return (
    <>
      <div className={css.slider_container}>
        <SimpleImageSlider
          style={{ margin: 'auto', display: 'flex', width: '100vw' }}
          width={2000}
          height={650}
          images={images}
          showBullets={true}
          loop={true}
          autoPlay={true}
          slideDuration={2}
          navMargin={10}
          onStartSlide={onStartSlide}
        />

        <div className={css.text_slid1}>
          <h2 className={css.text1} ref={el1}>
            Добро пожаловать
          </h2>
          <h1 className={css.text2} ref={el2}>
            "Романа Сацыка"
          </h1>
          <h2 className={css.text1} ref={el3}>
            Адвокадское бюро
          </h2>
        </div>
        <div className={css.text_slid2}>
          <h2 className={css.text2} ref={el4}>
            Вы выбираете
          </h2>
          <h1 className={css.text1} ref={el5}>
            Адвокадское бюро "Романа Сацыка"
          </h1>
          <button type="button" className={css.slider_button} ref={el6}>
            <NavLink to="/about" className={css.slider_button__link}>
              Подробнее
            </NavLink>
          </button>
        </div>
        <div className={css.text_slid3}>
          <h2 className={css.text3} ref={el7}>
            Практика
          </h2>
          <ul>
            <li className={css.text4} ref={el8}>
              <IoMdCheckmark />
              &nbsp;&nbsp;Гражданские дела
            </li>
            <li className={css.text4} ref={el9}>
              <IoMdCheckmark />
              &nbsp;&nbsp; Административные дела
            </li>
            <li className={css.text4} ref={el10}>
              <IoMdCheckmark />
              &nbsp;&nbsp; Криминальные дела
            </li>
            <li className={css.text4} ref={el11}>
              <IoMdCheckmark />
              &nbsp;&nbsp; Хозяйственные дела
            </li>
            <li className={css.text4} ref={el12}>
              <IoMdCheckmark />
              &nbsp;&nbsp; Корпоративное право
            </li>
          </ul>
          <button className={css.slider_button} ref={el13}>
            <NavLink to="/services" className={css.slider_button__link}>
              Подробнее
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
