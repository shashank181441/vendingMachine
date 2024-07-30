import { useState } from 'react'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import Card from './components/Card'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='px-1'>
    <Navbar />
    <MainBody />
    {/* <Card/> */}
    <Cart />
    </div>
    </>
  )
}

export default App
