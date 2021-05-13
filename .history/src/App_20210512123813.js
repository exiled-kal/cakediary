import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h2 className="text-red-500">
        Welcome to Tibetan Bakery Shop from Tibetan Baker
      </h2>
      <NavBar/>
      {/* <Header /> */}
    </div>
  );
}

export default App;
