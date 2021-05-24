import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <div className="m-10 hover:bg-blue-300">
        <InstagramIcon />
        <YouTubeIcon />
        <FacebookIcon />
      </div>
      <p>Copyright Ⓒ 2021 Tibetan Baker All rights reserved.</p>
    </div>
  );
};

export default Footer;
