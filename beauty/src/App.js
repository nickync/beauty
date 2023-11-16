import logo from './logo.svg';
import './App.scss'
import { Container } from 'react-bootstrap';
import HeaderComp from './comp/HeaderComp';
import MainComp from './comp/MainComp';
import FooterComp from './comp/FooterComp';

function App() {
  return (
    <div className='App'>
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </div>
  );
}

export default App;
