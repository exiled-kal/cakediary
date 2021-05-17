import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-pink-300">
      <div>
        <NavBar />
      </div>
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
