import { Banner } from './banner';
import { AboutUs } from './aboutUs';
import { Cooperation } from './cooperation';
import { Partners } from './partners';
import { OurEvents } from '../../components/events';
import { Creative } from './creative';
import { OurCourses } from '../../components/courses';
import { OurPortfolio } from '../../components/portfolio';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Creative />
      <AboutUs />
      <OurCourses />
      <OurPortfolio />
      <Partners />
      <OurEvents />
      <Cooperation />
    </div>
  );
};

export default Home;
