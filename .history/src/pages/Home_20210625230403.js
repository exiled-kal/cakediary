import Hero from '../components/Hero';
import Content from '../components/Content';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Collections from './Collections';

const Home = () => {
  return (
    <>
      <Hero />
      <Collections/>
      <Content />
      <Dropdown />
      <Footer />
    </>
  );
};

export default Home;
