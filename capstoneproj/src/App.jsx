import { useReducer, useState } from 'react'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AboutUs } from './components/AboutUs'
import MenuSection from './components/MenuSection'
import { BookingPage } from './components/BookingPage'
import { fetchAPI, submitAPI } from './api'
import Reservations from './components/Reservations'
import { ConfirmedBooking } from './components/ConfirmedBooking'

function App() {
  const [count, setCount] = useState(0)
  // const [availableTimes,setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
  function initializeTimes() {
    return fetchAPI(new Date())
  }
  function UpdateTimes(selectedDate) {
    const DateObj = new Date(selectedDate)
    return fetchAPI(DateObj)

  }
  const timesReducer = (state,action) => {
    switch(action.type) {
      case 'UPDATE_TIMES':
        return UpdateTimes(action.selectedDate);
      case 'RESET_TIMES':
        return initializeTimes()
      default:
        return state
    }
  }
  const [availableTimes,dispatch] = useReducer(timesReducer,initializeTimes())
  function handleDateChange(selectedDate){
    console.log('Selected Date:', selectedDate); // Log the selected date for debugging
    dispatch({ type: 'UPDATE_TIMES', selectedDate });
  }
  function handleReset() {
    console.log("Reseting Times: ")
    dispatch({type:'RESET_TIMES'})
  }
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/menu" element={<MenuSection/>}></Route>
        <Route path="/bookings" element = {<BookingPage availableTimes={availableTimes} onDateChange={handleDateChange} onReset={handleReset}/>}></Route>
        <Route path="/reservations" element = {<Reservations />}></Route>
        <Route path="/confirmed" element = {<ConfirmedBooking />}></Route>
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
