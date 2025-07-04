import { useState } from 'react'
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'
import SalePortion from './components/SalePortion/SalePortion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SalePortion />
      <HeadNavBar />
    </>
  )
}

export default App
