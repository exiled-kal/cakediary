import Hero from '../components/Hero';
import Content from '../components/Content';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Collections from './Collections';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState
  return (
    <>
      <Hero />
      <Content />
      <Collections setSelectedImg={setSelectedImg} />
      <Dropdown />
      <Footer />
    </>
  );
};

export default Home;
