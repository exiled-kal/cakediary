import Hero from '../components/Hero';
import Content from '../components/Content';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';


const Home = () => {
  // const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Hero />

      <Content />

      <Dropdown />
      <Footer />
    </>
  );
};

export default Home;