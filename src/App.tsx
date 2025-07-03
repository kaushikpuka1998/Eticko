import { useState } from 'react'
import './App.css'
import HeadNavBar from './components/HeadNavBar/HeadNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeadNavBar/>
    </>
  )
}

export default App
