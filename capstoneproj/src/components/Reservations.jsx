import MenuSection from "./MenuSection"
import './Reservations.css'
export default function Reservations() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || []
    if(bookings.length!==0){
        return(
            <>  
                <div style={{marginTop:"2rem"}}>
                <h2 style={{textAlign:"center",marginBottom:"1rem",color:"#495E57"}}>Reservations</h2>
                {bookings.map((booking)=>{
                    return(
                        <div className="reservation">
                            <h3 className="resDetails">📆Date: <span className="resSpec">{booking.date}</span></h3>
                            <h3 className="resDetails">👥No of guest: <span className="resSpec">{booking.noguest}</span></h3>
                            <h3 className="resDetails">✨Occasion: <span className="resSpec">{booking.occasion}</span></h3>
                            <h3 className="resDetails">🕒Time: <span className="resSpec">{booking.time}</span></h3>
                        </div>
                    )
                })}
                <MenuSection />
                </div>
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