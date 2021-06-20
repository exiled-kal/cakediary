import {useEffect, useRef, useState} from 'react';
import {Route, Switch} from 'react-router';
import './App.css';

import Dropdown from './components/Dropdown';

import NavBar from './components/NavBar';
import About from './pages/About';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Cake from './pages/Cake';
import {skewGallery} from '..';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <div className="App">
      <div className="inset-x-0 top-0 left-0 ">
        <NavBar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/collections" component={Collections} />
        <Route path="cakes/:id" component={Cake} />
      </Switch>
    </div>
  );
}
function Gallery() {
  let skewImage = useRef(null);
  useEffect(() => {
    skewGallery(skewImage);
  }, []);
  return (
    <div ref={(el) => (skewImage = el)}>
      <Collections />
    </div>
  );
}

export default App;
