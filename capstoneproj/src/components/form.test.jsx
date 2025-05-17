import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';
import { BookingForm } from "./BookingForm";
import { fetchAPI } from "../api";
function initializeTimes() {
    return fetchAPI(new Date())
}
function UpdateTimes(selectedDate) {
    const DateObj = new Date(selectedDate)
    return fetchAPI(DateObj)

  }

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make A Reservation");
    expect(headingElement).toBeInTheDocument();
})

describe("Returns a list of available times",() => {
    it("Should return a list of times",() =>{
        const result = initializeTimes()
        expect(Array.isArray(result)).toBe(true)
    })

})

describe("Returns a new list of times based on selected date",() => {
    it("Should return a list of times",() =>{
        const result = UpdateTimes("2025-5-15")
        expect(Array.isArray(result)).toBe(true)
    })

})


test('date input field has correct attributes', () => {
  const { getByLabelText } = render(<BookingForm />);
  const inputField = getByLabelText(/resdate/i);
  
  expect(inputField).toHaveAttribute('required');
  expect(inputField).toHaveAttribute('type', 'text'); // Change 'text' to the appropriate type
});
test('time input field has correct attributes', () => {
  const { getByLabelText } = render(<BookingForm />);
  const inputField = getByLabelText(/restime/i);
  
  expect(inputField).toHaveAttribute('required');
  expect(inputField).toHaveAttribute('type', 'text'); // Change 'text' to the appropriate type
});
test('guest input field has correct attributes', () => {
  const { getByLabelText } = render(<BookingForm />);
  const inputField = getByLabelText(/resguest/i);
  
  expect(inputField).toHaveAttribute('required');
  expect(inputField).toHaveAttribute('type', 'text'); // Change 'text' to the appropriate type
});
test('ocassion input field has correct attributes', () => {
  const { getByLabelText } = render(<BookingForm />);
  const inputField = getByLabelText(/resocc/i);
  
  expect(inputField).toHaveAttribute('required');
  expect(inputField).toHaveAttribute('type', 'text'); // Change 'text' to the appropriate type
});
