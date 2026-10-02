import styles from './styles.module.css'

import recepcao from '../../../../assets/home/recepcao.png'

const contactContent = {
    title: 'CONTATO',
    subtitle: 'Agende seu horário',
    descriptionStart: 'Cuide do seu pet com quem entende que cada animal tem',
    descriptionHighlight: 'suas necessidades.',
    image: recepcao,
    imageAlt: 'Recepção da Pata Amiga',
    badge: 'Atendimento com hora marcada',
    actions: {
        primary: {
            label: 'Chamar no WhatsApp',
            href: 'https://wa.me/5511999999999'
        },
        secondary: {
            label: 'Ver no mapa',
            href: 'https://maps.google.com/?q=Av.+Exemplo,+123+São+Paulo'
        }
    },
    hours: [
        { days: 'Seg a Sex', time: '8h às 18h' },
        { days: 'Sábado', time: '8h às 13h' }
    ],
    items: [
        {
            icon: '☎',
            label: 'Telefone',
            value: '(11) 99999-9999',
            href: 'tel:+5511999999999'
        },
        {
            icon: '✉',
            label: 'E-mail',
            value: 'contato@pataamiga.com',
            href: 'mailto:contato@pataamiga.com'
        },
        {
            icon: '⌖',
            label: 'Endereço',
            value: 'Av. Exemplo, 123 - São Paulo/SP',
            href: 'https://maps.google.com/?q=Av.+Exemplo,+123+São+Paulo'
        },
        {
            icon: '📸',
            label: 'Instagram',
            value: '@pataamiga.pet',
            href: 'https://instagram.com/pataamiga.pet'
        }
    ]
}

export function Contact({ id }: { id?: string }) {
    const { actions, hours, items } = contactContent

    return (
        <section id={id} className={styles.contact}>
            <div className={styles.content}>
                <h2>{contactContent.title}</h2>
                <span className={styles.subtitle}>{contactContent.subtitle}</span>

                <p>
                    {contactContent.descriptionStart}{' '}
                    <em>{contactContent.descriptionHighlight}</em>
                </p>

                <div className={styles.actions}>
                    <a
                        href={actions.primary.href}
                        className={styles.primary}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {actions.primary.label}
                        <span aria-hidden="true">→</span>
                    </a>

                    <a
                        href={actions.secondary.href}
                        className={styles.secondary}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {actions.secondary.label}
                    </a>
                </div>

                <ul className={styles.hours}>
                    {hours.map((hour) => (
                        <li key={hour.days}>
                            <span>{hour.days}</span>
                            <strong>{hour.time}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.side}>
                <div className={styles.mapContainer}>
                    <iframe
                        title="Localização Pata Amiga"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029251!2d-46.65851868440539!3d-23.56134998468288!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjkiUyA0NsKwMzknMjIuNyJX!5e0!3m2!1wpt-BR!2sbr!4v1620000000000!5m2!1wpt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                    <span className={styles.badge}>
                        {contactContent.badge}
                    </span>
                </div>

                <ul className={styles.list}>
                    {items.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={styles.card}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                            >
                                <span className={styles.icon} aria-hidden="true">{item.icon}</span>
                                <div>
                                    <span className={styles.label}>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                                <span className={styles.arrow} aria-hidden="true">↗</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}