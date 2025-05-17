import Logo from "../assets/Logo.svg"
import { HomePage } from "./HomePage"
import { AboutUs } from "./AboutUs"
import  MenuSection  from "./MenuSection"
import './styles.css'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
export default function Nav() {
    return(
    <>
        <div className="logo">
            <img src={Logo} alt="Little Lemon Logo"/>
        </div>
        <nav>
            <ul className="nav-links">
                <li><Link to="/" aria-label="Home-Link">Home</Link></li>
                <li><Link to="/about" aria-label="About-Link">About</Link></li>
                <li><Link to="/menu" aria-label="Menu-Link">Menu</Link></li>
                <li><Link to="/bookings" aria-label="Booking-Link">Booking</Link></li>
                <li><Link to="/reservations" aria-label="Reservations-Link">Reservations</Link></li>
            </ul>
        </nav>
        </>
    )
    
}