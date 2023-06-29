import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './app.css';

import { Header, Loader, Footer } from '../components';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Services = lazy(() => import('../pages/services/Services'));

export const App = () => {
  return (
    <div class="page">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};
