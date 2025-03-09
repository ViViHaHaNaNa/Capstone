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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.Placeholder do go crazy
                </p>
                <button className="delivery-button">
                    Order for Delivery
                    <img src={time} alt="Time" className="delivery-icon"/>
                </button>
            </div>
        </div>
    )
}