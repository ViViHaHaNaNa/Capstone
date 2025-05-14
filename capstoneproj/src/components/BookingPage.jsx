import {BookingForm} from './BookingForm'
export function BookingPage(props) {
    return (
        <>
        <div className="booking-page">
            <h2 className="res">Make A Reservation</h2>
            <BookingForm availableTimes={props.availableTimes} onDateChange={props.onDateChange}/>
        </div>
        </>
    )
}