import { Outlet} from 'react-router-dom';
import styles from "./App.module.css";
import Nav from './Nav';
import { useContext } from 'react';
import { PrContent } from '../contexts/prContent';
import Footer from './Footer';

function App() {
  const temp = useContext(PrContent)
    const {nav, setNav } = temp;
    
  return (
   <>
    <Nav nav={nav}/>
    <Outlet />
    <Footer />
   </>
  );
}

export default App;
