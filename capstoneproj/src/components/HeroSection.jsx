import { useNavigate } from "react-router-dom"
import restfood from "../assets/restauranfood.jpg"
import './styles.css'
export function HeroSection() {
    const navigate = useNavigate()
    const goToReserve = ()  => {
        navigate("/bookings")
    }  
    return(
        <div className="container">
            <div className="hero" >
                <section className="hero-text">
                    <h2 className="hero-title">Little Lemon</h2>
                    <h3 className="hero-subtitle" style={{fontFamily: "Arial",color:
                    "white"}}>Chicago</h3>
                    <article className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </article>
                    <button className="hero-button" onClick={goToReserve}>Reserve a table</button>
                </section>
                <div>
                    <img src={restfood} alt="restaurant-food" className="heroimg"/>
                </div>
            </div>
        </div>
    )
}