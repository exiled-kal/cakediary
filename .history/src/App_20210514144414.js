
import { Switch } from 'react-router';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-pink-300">
      <div className="sticky inset-x-0 top-0 left-0 ">
        <NavBar />
      </div>
      <Switch>
        <Router></Router>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
