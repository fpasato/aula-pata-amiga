
import styles from './styles.module.css';
import logo from '../../assets/logo.png';

import { FaHome, FaPaw, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import { LuBookText } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";

export function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={styles.header}>
            <img
                src={logo}
                className={styles.logo}
                alt="Pata Amiga logo"
            />

            <nav className={styles.navigation}>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')}><FaHome /> Início</a>
                <a href="#space" onClick={(e) => handleScroll(e, 'about')}><FaPaw /> Nossa história</a>
                <a href="#services" onClick={(e) => handleScroll(e, 'services')}><LuBookText /> Serviços</a>
                <a href="#about" onClick={(e) => handleScroll(e, 'space')}><PiDogBold /> Para seu Pet</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}><FaPhoneVolume /> Contato</a>
            </nav>

            <div className={styles.navigation}>
                <a href="#"><FaFacebook /> Facebook</a>
                <a href="#"><FaInstagramSquare /> Instagram</a>
            </div>
        </header>
    )
}
