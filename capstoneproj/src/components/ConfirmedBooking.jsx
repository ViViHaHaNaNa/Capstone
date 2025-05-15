import MenuSection from './MenuSection.jsx'
import { useNavigate } from "react-router-dom"
import { FaCheck } from 'react-icons/fa';
import './ConfirmedBooking.css'
const ConfirmedIcon = () => (
  <div style={{
    backgroundColor: '#4CAF50',
    width: '8vw',
    height: '8vw',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }} className='check'>
    <FaCheck color="white" size="4vw"/>
  </div>
);

export function ConfirmedBooking() {
    const navigate = useNavigate()
    const goToReserves = () => {
        navigate("/reservations")
    }
    return(
        <>
            <div className='confirmedContent'>
                <ConfirmedIcon />
                <h2 className='confirmHeading'>Your Booking is confirmed!</h2>
                <button onClick={goToReserves} className="viewRes">View Reservations</button>
            </div>
            <MenuSection></MenuSection>
        </>
    )
}