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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/bookings">Booking</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
            </ul>
        </nav>
        </>
    )
    
}