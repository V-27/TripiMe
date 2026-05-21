import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import International from './Components/Pages/International'
import Services from './Components/Pages/Services'
import Contact from './Components/Pages/Contact'
import Domestic from './Components/Pages/Domestic'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import WhatsApp from './Components/WhatsApp'
import ScrollTop from './Components/ScrollTop'

function App() {
  const [count, setCount] = useState(0)
  console.log('App rendered ✅')
  return (
    
    <>
    
    <Header/>

    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/services' element={<Services/>}/>
      <Route path = '/international' element={<International/>}/>
      <Route path = '/domestic' element={<Domestic/>}/>
      <Route path = '/contact' element={<Contact/>}/>

    </Routes>
    <WhatsApp/>
    <ScrollTop/>
    <Footer/>
    </>
  )
}

export default App
