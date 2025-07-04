import { useState } from 'react'
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'
import SalePortion from './components/SalePortion/SalePortion'
import Divider from './components/Divider/Divider'
import BannerCarousel from './Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SalePortion />
      <HeadNavBar />
      <hr className="border-t border-gray-300 my-4" />

      <div className="flex">
        <Divider />
        <div className="flex-1">
          <BannerCarousel images={["src/assets/images/Frame1.png", "src/assets/images/Frame1.png"]} />
        </div>
      </div>

    </>
  )
}

export default App
