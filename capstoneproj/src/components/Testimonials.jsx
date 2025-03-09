import './styles.css'
import person from "../assets/download.jpg"
import { Review } from './Review'
export function Testimonials() {
    return(
        <div className="container-3">
            <h2 style={{textAlign:"center"}} className="testimonials-title">Testimonials</h2>
            <div className="testimonials">
                <Review pfp={person} name="John Pork" rating="4.0" review="The food is the best in town!"/>
                <Review pfp={person} name="Dilly Dally" rating="3.9" review="Unmatched Taste, mouthwatering food!"/>
                <Review pfp={person} name="Rat Milton" rating="4.0" review="Havent had such good food in a while!"/>
            </div>
        </div>
    )
}