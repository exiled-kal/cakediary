import {Route, Switch} from 'react-router';
import './App.css';

import Footer from './components/Footer';

import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-pink-300">
      <div className="sticky inset-x-0 top-0 left-0 ">
        <NavBar />
      </div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
