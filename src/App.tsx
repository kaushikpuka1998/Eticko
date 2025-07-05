import { useState } from 'react'
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'
import SalePortion from './components/SalePortion/SalePortion'
import Divider from './components/Divider/Divider'
import LeftColumnBar from './components/LeftColumnBar/LeftColumnBar'
import BannerCarousel from './Carousel'
import Categoryortion from './components/Categoryortion/Categoryortion'


function App() {

  return (
    <>
      <SalePortion />
      <div className="body">
        <HeadNavBar />
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex">
          <LeftColumnBar />
          <Divider />
          <div className="flex-1">
            <BannerCarousel images={["src/assets/images/Frame1.png", "src/assets/images/Frame2.png", "src/assets/images/Frame3.png"]} />
          </div>
        </div>
      </div>
      <Categoryortion />
    </>
  )
}

export default App
