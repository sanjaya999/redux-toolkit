import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>redux toolkit</h1>
      <Addtodo />
      <Todos/>
    </>
  )
}

export default App
