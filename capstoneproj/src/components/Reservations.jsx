import MenuSection from "./MenuSection"
export default function Reservations() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || []
    if(bookings.length!==0){
        return(
            <>
                {bookings.map((booking)=>{
                    return(
                        <div className="reservation">
                            <h2>Date: {booking.date}</h2>
                            <h2>No of guest: {booking.noguest}</h2>
                            <h2>Occasion: {booking.occasion}</h2>
                            <h2>Time: {booking.time}</h2>
                        </div>
                    )
                })}
                <MenuSection />
            </>
            
        )
    }else{
        return(
            <>
                <h2 className="res" style={{marginTop:"3rem"}}>No reservations Made</h2>
                <MenuSection />
            </>
        )
    }
}