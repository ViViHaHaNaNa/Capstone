import './styles.css'

export function Review(props) {
    return(
        <div className="Review">
            <div className="review-photo">
                <img src={props.pfp} className="pfp"/>
            </div>
            <div className="review-info">
                <h3>{props.name}</h3>
                <p>{props.review}</p>
                <p>{props.rating}/4.0</p>
            </div>
        </div>

    )
}