import Video from '../assets/video.mp4';

function Header() {
  return (
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>
      <video autoplay loop muted>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default Header;
