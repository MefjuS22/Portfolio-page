import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Content from '../components/Content/Content';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
  return (
    <div id="top">
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroFour}></Content>
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </div>
  );
};

export default Home;
