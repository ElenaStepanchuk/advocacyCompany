import css from './footer.module.css';
import { SlCallEnd, SlEnvolope } from 'react-icons/sl';
import { Container } from 'components';

const Footer = () => {
  return (
    <div className={css.footer_container}>
      <Container>
        <div className={css.flex_container}>
          <div className={css.left_container}>
            <p className={css.adress_text}>
              Адрес: 02000, г. Киев, ул. Елизаветы Чавдар, 2
            </p>
            <p className={css.adress_text}>
              Адрес: 08301, Киевская обл., г. Борисполь, ул. Киевский шлях, 79-Б
            </p>

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
          <div className={css.right_container}>
            <h3 className={css.adress_text2}>Телефоны</h3>
            <div className={css.phone_container}>
              <SlCallEnd className={css.icon} />
              <span className={css.phone_span}>
                +38&nbsp;(068)&nbsp;520-80-20
              </span>
            </div>
            <div className={css.phone_container}>
              <SlCallEnd className={css.icon} />
              <span className={css.phone_span}>
                +38&nbsp;(073)&nbsp;520-80-20
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
