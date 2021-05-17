import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Video from './images/video.mp4';

function App() {
  return (
    <div className="bg-pink-300">
      
      <NavBar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
