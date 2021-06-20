import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router';
import './App.css';

import Dropdown from './components/Dropdown';

import NavBar from './components/NavBar';
import About from './pages/About';
import Cake from './pages/Cake';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const 

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
      <Collections setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Cake selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <div className="inset-x-0 top-0 left-0 ">
        <NavBar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/collections" component={Collections} /> */}
      </Switch>
    </div>
  );
}

export default App;
