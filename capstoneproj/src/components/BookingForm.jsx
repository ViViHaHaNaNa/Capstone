import { useState } from 'react'
import './ResForm.css'
export function BookingForm(props){
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const [guest,setGuest] = useState(1)
    const [occasion,setOcassion] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        console.log(date,guest,occasion,time);
        setDate("")
        setTime("")
        setGuest(1)
        setOcassion("")
    }
    return(
        <>
            <form>
                <label htmlFor="resdate">Date:</label> 
                <input id="resdate"type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
                <label htmlFor="restime">Time:</label>
                <select id="restime" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                {props.availableTimes.map((time)=>{
                    return(
                        <option value={time}>{time}</option>
                    )
                })}
                </select>
                <label htmlFor="resguest">No of guests:</label>
                <input id="resguest" type="number" value={guest} onChange={(e)=>{setGuest(e.target.value)}}  placeholder="1" min="1" max="10" />
                <label htmlFor="resocc">Ocassion:</label>
                <select id="resocc" value={occasion} onChange={(e)=>{setOcassion(e.target.value)}}>
                    <option value="Occ">Select Ocassion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <button className="resconfirm" onClick={handleSubmit}>Make Reservation</button>
            </form>
        </>
    )
}