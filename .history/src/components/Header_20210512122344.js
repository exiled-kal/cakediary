import Video from '../assets/video.mp4';

function Header() {
  return (
    <header>
      <div>Welcome to my site!</div>
      <video autoplay loop muted>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default Header;
