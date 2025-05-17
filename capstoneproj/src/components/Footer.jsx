import Logo from "../assets/Logo.svg"
import './styles.css'
import {Link} from 'react-router-dom'
export function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={Logo} className="footer-imgs"></img>
            </div>
            <div className="footer-content">
                <ul className="footerlist">
                    <li>Pages</li>
                    <li><Link to="/" aria-label="Home-Link">Home</Link></li>
                    <li><Link to="/about" aria-label="About-Link">About</Link></li>
                    <li><Link to="/menu" aria-label="Menu-Link">Menu</Link></li>
                    <li><Link to="/bookings" aria-label="Booking-Link">Booking</Link></li>
                    <li><Link to="/reservations" aria-label="Reservations-Link">Reservations</Link></li>
                </ul>
                <ul className="footerlist">
                    <li>Social Media</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Reddit</li>
                    <li>MySpace</li>
                    
                </ul>
            </div>
        </footer>
    )
}