import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <div className="m-10 ">
        <InstagramIcon className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 cursor-pointer" />
        <YouTubeIcon className="hover:bg-red-500 cursor-pointer m-2" />
        <FacebookIcon className="hover:bg-blue-700 m-2" />
      </div>
      <p>Copyright Ⓒ 2021 Tibetan Baker All rights reserved.</p>
    </div>
  );
};

export default Footer;
