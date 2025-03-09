import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import './styles.css'

export function Layout() {
    return(
        <>
            <Header/>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer/>
        </>
    )
}