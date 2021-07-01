import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <div className="m-5 flex  rounded-md animate-bounce">
        <InstagramIcon className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 cursor-pointer m-2 rounded-lg hover:bg-red-100" />
        <YouTubeIcon className=" bg-red-400 cursor-pointer m-2 rounded-lg hover:bg-red-600" />
        <FacebookIcon className=" cursor-pointer m-2 rounded-lg bg-blue-400 hover:bg-blue-700 " />
      </div>
      <div className="rounded-md w-">
        <p
          className="rounded-md bg-black
        "
        >
          Copyright Ⓒ 2021 Tibetan Baker All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
