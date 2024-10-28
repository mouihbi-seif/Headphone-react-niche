import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Services from './components/services/Services';
import Banner from './components/banner/Banner';
import BannerText from './components/banner/BannerText';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <main className="overflow-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'black',
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Services />
        <Banner />
        <BannerText />
        <Blog />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
