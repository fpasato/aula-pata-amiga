import styles from './styles.module.css';

const footerLinks = [
    {
        title: 'Navegação',
        links: [
            { name: 'Início', href: '#home' },
            { name: 'Sobre nós', href: '#about' },
            { name: 'Serviços', href: '#services' },
            { name: 'Nosso Espaço', href: '#space' },
            { name: 'Depoimentos', href: '#testimonials' },
        ]
    },
    {
        title: 'Serviços',
        links: [
            { name: 'Consulta Veterinária', href: '#services' },
            { name: 'Consultoria Nutricional', href: '#services' },
            { name: 'Higiene e Banho', href: '#services' },
            { name: 'Massagem e Alongamento', href: '#services' },
        ]
    },
    {
        title: 'Contato',
        links: [
            { name: 'Agendar Horário', href: '#contact' },
            { name: 'WhatsApp', href: '#contact' },
            { name: 'Telefone', href: '#contact' },
            { name: 'Como Chegar', href: '#contact' },
        ]
    },
    {
        title: 'Institucional',
        links: [
            { name: 'Nossa História', href: '#about' },
            { name: 'Trabalhe Conosco', href: '#' },
            { name: 'Seja Nosso Parceiro', href: '#' },
            { name: 'Política de Privacidade', href: '#' },
            { name: 'Termos de Uso', href: '#' },
        ]
    }
]

export function Footer() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className={styles.footer}>

            <div className={styles.top}>

                <div className={styles.brand}>
                    <h2>Pata Amiga</h2>
                    <p>
                        Cuidado e carinho para o seu melhor amigo.
                    </p>
                </div>
                <div className={styles.columns}>
                    {footerLinks.map((section) => (
                        <div key={section.title} className={styles.column}>
                            <h3>{section.title}</h3>

                            {section.links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => link.href.startsWith('#') ? handleScroll(e, link.href.slice(1)) : undefined}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className={styles.bottom}>

                <span>
                    © 2026 Pata Amiga. Todos os direitos reservados.
                </span>

            </div>

        </footer>
    )
}