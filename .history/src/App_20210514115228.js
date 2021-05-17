import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-pink-300">
      <NavBar />
      <Hero />
      <Content />
      <Footer sticky top-0/>
    </div>
  );
}

export default App;
