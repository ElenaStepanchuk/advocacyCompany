import { Container, AboutComponent } from 'components';
import css from './about.module.css';

const About = () => {
  return (
    <div className={css.container_about}>
      {/* <Container> */}
      <AboutComponent />
      {/* </Container> */}
    </div>
  );
};
export default About;
