import { BrowserRouter } from "react-router-dom"
import Nav from "./Nav"
import './styles.css'
export function Header() {
    return(
        <header className="navbar">
            <Nav />
        </header>
    )
}