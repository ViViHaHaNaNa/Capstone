import Logo from "../assets/Logo.svg"
import './styles.css'
export function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={Logo} className="footer-imgs"></img>
            </div>
            <div className="footer-content">
                <ul className="footerlist">
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                </ul>
                <ul className="footerlist">
                    <li>Contact</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                </ul>
                <ul className="footerlist">
                    <li>Social Media Links</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                    <li>Doormat</li>
                </ul>
            </div>
        </footer>
    )
}