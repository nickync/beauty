import './App.scss'
import HeaderComp from './comp/HeaderComp';
import MainComp from './comp/MainComp';
import FooterComp from './comp/FooterComp';
import AboutComp from './comp/AboutComp';
import ServiceComp from './comp/ServiceComp';
import {useRef} from 'react';

function App() {
  const mainRef = useRef();
  const serviceRef = useRef();
  const aboutRef = useRef();

  return (
    <div className='App'>
      <HeaderComp mainRef={mainRef} serviceRef={serviceRef} aboutRef={aboutRef} />
      <MainComp mainRef={mainRef} />
      <ServiceComp serviceRef={serviceRef} />
      <AboutComp aboutRef={aboutRef} />
      <FooterComp />
    </div>
  );
}

export default App;
