import Video from '../assets/video.mp4';

function Header() {
  return (
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        Welcome to my site!
      </div>
      <autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </autoplay>
    </header>
  );
}

export default Header;
