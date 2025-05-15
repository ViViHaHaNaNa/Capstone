import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './ResForm.css'
import { submitAPI } from '../api'

export function BookingForm(props){
    const navigate = useNavigate()
    const goToConfirm = ()  => {
            navigate("/confirmed")
    }

    const [date,setDate] = useState("")
    const [time,setTime] = useState(props.availableTimes[0])
    const [guest,setGuest] = useState(1)
    const [occasion,setOcassion] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        console.log(date,guest,occasion,time);
        const res = {
            date:date,
            noguest:guest,
            occasion,
            time,
        }
        if(submitAPI(res)){
            goToConfirm()
        }else{
            alert("Booking Aldready Exists at this time")
        }
        setDate("")
        setTime("")
        setGuest(1)
        setOcassion("")
    }
    function handleDateChange(date){
        setDate(date)
        const selectedDate = date
        props.onDateChange(selectedDate)
    }
    return(
        <>
            <form>
                <label htmlFor="resdate">Date:</label> 
                <input id="resdate"type="date" value={date} onChange={(e)=>{handleDateChange(e.target.value)}} aria-label="Select Date"></input>
                <label htmlFor="restime">Time:</label>
                <select id="restime" value={time} onChange={(e)=>{setTime(e.target.value)}} aria-label="Select Time">
                {props.availableTimes.map((time)=>{
                    const lab = "Select " + time
                    return(
                        <option aria-label={lab} value={time}>{time}</option>
                    )
                })}
                </select>
                <label htmlFor="resguest">No of guests:</label>
                <input id="resguest" type="number" value={guest} onChange={(e)=>{setGuest(e.target.value)}}  aria-label="Select Guests" placeholder="1" min="1" max="10"/>
                <label htmlFor="resocc">Ocassion:</label>
                <select id="resocc" value={occasion} aria-label="Select Ocassion" onChange={(e)=>{setOcassion(e.target.value)}}>
                    <option value="Occ">Select Ocassion</option>
                    <option aria-label="Select Birthday" value="Birthday">Birthday</option>
                    <option aria-label="Select Anniversary" value="Anniversary">Anniversary</option>
                </select>
                <button className="resconfirm" onClick={handleSubmit} aria-label="Click To Submit">Make Reservation</button>
            </form>
        </>
    )
}