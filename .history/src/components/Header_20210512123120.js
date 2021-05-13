import Video from '../assets/video.mp4';

function Header() {
  return (
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>
      <img src=".../assets/logo.svg" class="h-7 sm:h-8" />
    </header>
  );
}

export default Header;
