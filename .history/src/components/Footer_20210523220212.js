import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <InstagramIcon />
      <YouTubeIcon />
      <p>Copyright Ⓒ 2021 Tibetan Baker All rights reserved.</p>
    </div>
  );
};

export default Footer;
