import restfood from "../assets/restauranfood.jpg"
import bruchetta from "../assets/bruchetta.svg"
import salad from "../assets/greek salad.jpg"
import lemondessert from "../assets/lemon dessert.jpg"
import time from "../assets/Recent.svg"
import './styles.css'
import { FoodCard } from './FoodCard'
export default function MenuSection() {
    return(
        <>
        <div className="container-2">
            <div className="special">
                <h2 className="special-header">This weeks Specials!</h2>
                <button className="menu-button">Online Menu</button>
            </div>
            <div className="food-products">
                <FoodCard img={salad} name="Salad" price="$12.58"/>
                <FoodCard img={bruchetta} name="Bruchetta" price="$10.58"/>
                <FoodCard img={lemondessert} name="Lemon Dessert" price="$8.58"/>
            </div>
        </div>
        </>
    )
}