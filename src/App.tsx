import { useState } from 'react'
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'
import SalePortion from './components/SalePortion/SalePortion'
import Divider from './components/Divider/Divider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SalePortion />
      <HeadNavBar />
      <hr className="border-t border-gray-300 my-4" />
      <Divider />
    </>
  )
}

export default App
