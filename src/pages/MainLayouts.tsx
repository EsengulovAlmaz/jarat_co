import { Route, Routes } from 'react-router-dom';

import StackedLayout from '../elements/layouts/StackedLayouts';
import Home from './home';
import AboutUs from './about_us';
import Courses from './courses';
import Partners from './partners';
import Events from './events';
import MoreEvents from './moreEvent';
import MorePortfolio from './morePortfolio';
import MoreCourse from './moreCourse';
import Portfolio from './portfolio';
import MorePartners from './morePartners';

const MainLayouts = () => {
  return (
    <StackedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events/:id" element={<MoreEvents />} />
        <Route path="/courses/:id" element={<MoreCourse />} />
        <Route path="/portfolio/:id" element={<MorePortfolio />} />
        <Route path="/partners/:id" element={<MorePartners />} />
      </Routes>
    </StackedLayout>
  );
};

export default MainLayouts;
