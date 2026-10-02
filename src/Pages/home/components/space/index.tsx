import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

import fachada from '../../../../assets/home/fachada.png'
import recepcao from '../../../../assets/home/recepcao.png'
import patio from '../../../../assets/home/patio.png'
import clinica from '../../../../assets/home/clinica.png'
import banhoTosa from '../../../../assets/home/banho.png'

const spaceContent = {
    title: 'NOSSO ESPAÇO',
    description: 'Um ambiente preparado para receber pets com conforto, tranquilidade e cuidado em cada detalhe.',
    items: [
        {
            label: 'Fachada',
            image: fachada,
            alt: 'Fachada da Pata Amiga',
            title: 'Fachada',
            text: 'A entrada da Pata Amiga foi pensada para tornar a chegada mais tranquila e acolhedora para você e seu pet.'
        },
        {
            label: 'Recepção',
            image: recepcao,
            alt: 'Recepção da Pata Amiga',
            title: 'Recepção',
            text: 'Um espaço para receber os tutores, organizar os atendimentos e deixar os primeiros momentos mais confortáveis.'
        },
        {
            label: 'Clínica Veterinária',
            image: clinica,
            alt: 'Clínica Veterinária da Pata Amiga',
            title: 'Clínica Veterinária',
            text: 'Um ambiente destinado aos atendimentos e cuidados veterinários, com estrutura adequada para diferentes necessidades.'
        },
        {
            label: 'Banho e tosa',
            image: banhoTosa,
            alt: 'Área de banho e tosa',
            title: 'Banho e tosa',
            text: 'Área preparada para os cuidados de higiene e beleza, com espaço adequado para cada etapa do atendimento.'
        },
        {
            label: 'Convivência',
            image: patio,
            alt: 'Área de convivência',
            title: 'Convivência',
            text: 'Um espaço aberto para os pets se movimentarem, brincarem e aproveitarem o tempo na Pata Amiga.'
        }
    ]
}

export function Space({ id }: { id?: string }) {
    const sectionRef = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState(false)
    const [active, setActive] = useState<number | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.25 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    const [main, ...thumbs] = spaceContent.items

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${styles.space} ${visible ? styles.visible : ''}`}
        >
            <div className={styles.content}>
                <h2>{spaceContent.title}</h2>
                <p>{spaceContent.description}</p>
            </div>

            <nav
                className={styles.nav}
                onMouseLeave={() => setActive(null)}
            >
                {spaceContent.items.map((item, index) => (
                    <button
                        key={item.label}
                        type="button"
                        className={`${styles.navItem} ${active === index ? styles.active : ''}`}
                        onMouseEnter={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        onBlur={() => setActive(null)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className={styles.gallery}>
                <div className={`${styles.overview} ${active !== null ? styles.hidden : ''}`}>
                    <div className={styles.mainImage}>
                        <img src={main.image} alt={main.alt} />
                    </div>

                    <div className={styles.images}>
                        {thumbs.map((item) => (
                            <div key={item.label} className={styles.thumb}>
                                <img src={item.image} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                </div>

                {spaceContent.items.map((item, index) => (
                    <div
                        key={item.label}
                        className={`${styles.detail} ${active === index ? styles.show : ''}`}
                    >
                        <img src={item.image} alt={item.alt} />
                        <div className={styles.detailText}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}