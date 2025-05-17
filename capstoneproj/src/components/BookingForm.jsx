import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './ResForm.css'
import { submitAPI } from '../api'

export function BookingForm(props){
    const navigate = useNavigate()
    const goToConfirm = ()  => {
            navigate("/confirmed")
    }
    const oldAvailTimes = props.availableTimes
    let AvailTimes = []
    const bookings = JSON.parse(localStorage.getItem("bookings")) || []
    if(bookings.length>0){
        bookings.forEach((booking)=>{
            AvailTimes = oldAvailTimes.filter(value=> value != booking.time);
            console.log(AvailTimes)
        })
    }else{
        AvailTimes = props.availableTimes
    }
    const [date,setDate] = useState("")
    const [time,setTime] = useState(AvailTimes[0])
    const [guest,setGuest] = useState()
    const [occasion,setOcassion] = useState("")
    let formValid = date && time && guest>0 && occasion!=""
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
            alert("Booking Aldready Exists at this time, Select another Time Slot")
            
        }
        setDate("")
        setTime("")
        setGuest(0)
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
                <input id="resdate"type="date" value={date} onChange={(e)=>{handleDateChange(e.target.value)}} aria-label="Select Date" required></input>
                <label className={date ? "noLabel" : "Label"}>Select Date</label>
                <label htmlFor="restime">Time:</label>
                <select id="restime" value={time} onChange={(e)=>{setTime(e.target.value)}} required aria-label="Select Time">
                {AvailTimes.map((time)=>{
                    const lab = "Select " + time
                    return(
                        <option aria-label={lab} value={time}>{time}</option>
                    )
                })}
                </select>
                <label className={time ? "noLabel" : "Label"}>Select Valid Time Slot</label>
                <label htmlFor="resguest">No of guests:</label>
                <input required="required" id="resguest" type="number" value={guest} onChange={(e)=>{setGuest(e.target.value)}} aria-label="Select Guests" min="1" max="10"/>
                <label className={guest>0 ? "noLabel" : "Label"}>Guests cannot be 0!</label>
                <label htmlFor="resocc">Ocassion:</label>
                <select required id="resocc" value={occasion} aria-label="Select Ocassion" onChange={(e)=>{setOcassion(e.target.value)}}>
                    <option value="">Select Ocassion</option>
                    <option aria-label="Select Birthday" value="Birthday">Birthday</option>
                    <option aria-label="Select Anniversary" value="Anniversary">Anniversary</option>
                </select>
                <label className={occasion ? "noLabel" : "Label"}>Select An Occasion</label>
                <button type="submit"  disabled={!formValid} className={formValid ? "resconfirm" : "resdisabled" } onClick={handleSubmit} aria-label="Click To Submit">Make Reservation</button>
            </form>
        </>
    )
}