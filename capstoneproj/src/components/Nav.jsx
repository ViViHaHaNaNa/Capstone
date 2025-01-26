import Logo from "../assets/Logo.svg"
export default function Nav() {
    return(
    <nav className="navbar">
        <img src={Logo} alt="Logo"></img>
        <ul className="pages">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Login</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
        </ul>
    </nav>
    )
    
}