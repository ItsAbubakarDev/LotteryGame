import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery></Lottery>
    </>
  )
}

export default App
