import { useState } from 'react'
import { BiNews } from 'react-icons/bi'
import Ads from './components/Ads/Ads'
import Card from './components/Cards/Card'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import New from './components/New/New'
import Services from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Card/>
      <Categories/>
      <Ads/>
      <New/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
