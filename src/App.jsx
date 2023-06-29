import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import ProductSection from './components/productsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <ProductSection />
    </>
  )
}

export default App
