import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Video from './images/video.mp4';

function App() {
  return (
    <div className="bg-pink-300">
      <video
        className="video-container video-container-overlay"
        autoPlay="true"
        loop
        muted={muted}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <NavBar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
