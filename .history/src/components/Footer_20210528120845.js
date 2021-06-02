import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <div className="m-5 flex  rounded-md animate-bounce">
        <InstagramIcon className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 cursor-pointer m-2 rounded-lg hover:bg-red-800" />
        <YouTubeIcon className=" bg-red cursor-pointer m-2 rounded-lg " />
        <FacebookIcon className=" bg-blue-800hover:bg-blue-700  cursor-pointer m-2 rounded-lg " />
      </div>
      <p
        className="rounded-md bg-white
      "
      >
        Copyright Ⓒ 2021 Tibetan Baker All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
