import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/img1.jpg"
import Common from './Common'


function Home() {
  return (
    <>
      <Common name='Grow your buisness with ' imgsrc={web} visit='/service' btname="Get Started"/>
    </>
  )
}

export default Home