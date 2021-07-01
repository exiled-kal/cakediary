import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import image1 from '../images/cake1.jpg';
import {motion} from 'framer-motion';
import {gsap} from 'gsap';
import {textIntro} from '../components/Animate';
import {useEffect, useRef} from 'react';

const About = () => {
  let intro = useRef(null);
  useEffect(() => {
    textIntro(intro);
  }, []);
  return (
    <motion.div className=" text-white h-screen">
      <div
        className=" flex justify-center items-center"
        style={{
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundImage: `url(${image1})`,
        }}
      >
        <img
          className="h-full w-80 rounded-xl m-6 "
          src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s800-c85.jpg"
          alt="mypics"
        />
      </div>
      <div className="m-5 ">
        <h1 className="text-2xl text-white ">About me</h1>

        <p>
          Hello Everyone. My name is{' '}
          <span
            className="font-sans md:font-serif text-black text-lg animate-bounce "
            
          >
            Sonam Paldon
          </span>{' '}
          and I am also known as the Tibetan Baker currently residing in the
          beautiful Bay Area. I grew up in India and moved to States in 2016. I
          have been professionally baking for few years.
        </p>
        <p>
          The best part about baking for me is decoration. I started doing
          custom cakes order only recently after we got hit with pandemic and
          gave me good time on hand to venture a new path.I enjoy baking and
          love decorating beautiful cakes. It is amazing to see how my cakes can
          bring excitement and joys in people's life and to be part of their
          beautiful celebration. I make everything from scratch with high
          quality ingredients and with lot of attention to details as you would
          have seen in photo gallery.{' '}
        </p>
        <p>
          What you can expect from me is very personal level of service and
          listen carefully to what you would like to add into your cake, give
          suggestions/ideas if needed and create a cake of your choice. I hope,
          I will get to bake for you and create a moment with your loved ones.
        </p>
        <p> Thank you. </p>
        <p className="font-sans md:font-serif text-black text-lg animate-bounce m-2">
          {' '}
          Sonam Paldon
          <InstagramIcon className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 cursor-pointer m-2 rounded-lg hover:bg-red-100" />
          <YouTubeIcon className=" bg-red-400 cursor-pointer m-2 rounded-lg hover:bg-red-600" />
          <FacebookIcon className=" cursor-pointer m-2 rounded-lg bg-blue-400 hover:bg-blue-700 " />
        </p>
      </div>
    </motion.div>
  );
};

export default About;
