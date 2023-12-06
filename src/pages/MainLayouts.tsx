import { Route, Routes } from 'react-router-dom'

import StackedLayout from '../elements/layouts/StackedLayouts'
import Home from './home'
import AboutUs from './about_us'
import Courses from './courses'
import Partners from './partners'
import Events from './events'
import MoreEvents from './moreEvent'

const MainLayouts = () => {
  return (
    <StackedLayout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<MoreEvents />} />
        </Routes>
    </StackedLayout>
  )
}

export default MainLayouts