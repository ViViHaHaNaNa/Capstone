import './styles.css'
import restfood from "../assets/restauranfood.jpg"
export function AboutUs() {
    return(
        <div className="container-4">
            <div className="aboutus-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <article className="aboutus-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
            </div>
            <div className="aboutus-img">
                <div className="img-wrapper img-top-left">
                    <img src={restfood} alt="restaurant-food"/>
                </div>
                <div className="img-wrapper img-bottom-right">
                    <img src={restfood} alt="restaurant-food"/>
                </div>
            </div>
        </div>
    )
}