import React from 'react'

import { Banner } from './banner'
import { AboutUs } from './aboutUs'
import { Portfolio } from './portfolio'
import { Cooperation } from './cooperation'
import { Partners } from './partners'
import { OurEvents } from '../../components/events'
import { Creative } from './creative'
import { OurCourses } from '../../components/courses'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Creative />
      <AboutUs />
      <OurCourses />
      <Portfolio />
      <Partners />
      <OurEvents />
      <Cooperation />
    </div>
  )
}

export default Home