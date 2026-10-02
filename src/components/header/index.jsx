
import styles from './styles.module.css'

import logo from '../../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} alt="Pata Amiga logo" />

            <div className={styles.navigation}>
                <a href="/">Início</a>
                <a href="/">Adoção</a>
                <a href="/">Doação</a>
                <a href="/">Serviços</a>
                <a href="/">Contato</a>
            </div>

            <div className={styles.socialMedia}>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
            </div>



        </header>
    )
}
