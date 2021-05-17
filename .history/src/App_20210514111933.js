import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-pink-300">
      <video
        className="video-container video-container-overlay"
        autoPlay="true"
        loop
        muted={this.props.muted}
      >
        <source src={this.props.introVideo} type="video/mp4" />
      </video>
      <NavBar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
