import { useState } from 'react'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AboutUs } from './components/AboutUs'
import MenuSection from './components/MenuSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/menu" element={<MenuSection/>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route> */}
        {/* <Route path="/reservations" element={<Reservation></Reservation>}></Route> */}
        {/* <Route path="/orderonline" element={<OrderOnline></OrderOnline>}></Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
