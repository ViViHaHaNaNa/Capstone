import time from '../assets/Recent.svg'
import './styles.css'
export function FoodCard(props){
    return(
        <div className="product-card">
            <img src={props.img} alt="Fresh Salad" className="product-image"/>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-title">{props.name}</h3>
                    <span className="product-price">{props.price}</span>
                </div>
                <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.Lorem ipsum dolor sit amet
                </p>
                <button className="delivery-button" aria-label="Click to order">
                    Order for Delivery
                    <img src={time} alt="Time" className="delivery-icon"/>
                </button>
            </div>
        </div>
    )
}