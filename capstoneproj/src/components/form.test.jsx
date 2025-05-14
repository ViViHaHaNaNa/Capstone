import { render, screen } from "@testing-library/react";
import BookingPage from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make A Reservation");
    expect(headingElement).toBeInTheDocument();
})