import { useReducer, useState } from 'react'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AboutUs } from './components/AboutUs'
import MenuSection from './components/MenuSection'
import { BookingPage } from './components/BookingPage'

function App() {
  const [count, setCount] = useState(0)
  const [availableTimes,setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/menu" element={<MenuSection/>}></Route>
        <Route path="/reservations" element = {<BookingPage availableTimes={availableTimes}/>}></Route>
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
