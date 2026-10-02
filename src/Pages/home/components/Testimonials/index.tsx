import { useState } from 'react'
import styles from './styles.module.css'

import person1 from '../../../../assets/testimonials/people/person-1.jpeg'
import person2 from '../../../../assets/testimonials/people/person-2.jpeg'
import person3 from '../../../../assets/testimonials/people/person-3.jpeg'
import person4 from '../../../../assets/testimonials/people/person-4.jpeg'
import person5 from '../../../../assets/testimonials/people/person-5.jpeg'
import person6 from '../../../../assets/testimonials/people/person-6.jpeg'

import pet1 from '../../../../assets/testimonials/pets/pet-1.jpg'
import pet2 from '../../../../assets/testimonials/pets/pet-2.jpg'
import pet3 from '../../../../assets/testimonials/pets/pet-3.jpg'
import pet4 from '../../../../assets/testimonials/pets/pet-4.jpg'
import pet5 from '../../../../assets/testimonials/pets/pet-5.jpg'
import pet6 from '../../../../assets/testimonials/pets/pet-6.jpg'

const testimonialsContent = {
    title: 'DEPOIMENTOS',
    subtitle: 'Quem confia na Pata Amiga',
    description: 'O que os clientes dizem sobre nós.',
    items: [
        {
            name: 'Patrícia Oliveira',
            petName: 'Pipoca',
            petImage: pet1,
            personImage: person1,
            text: 'A Pipoca ficou bem tranquila durante o atendimento. Ela costuma estranhar lugares novos, então fiquei bem aliviada quando vi que ela se adaptou tão rápido.'
        },
        {
            name: 'Lucas',
            petName: 'Fiel',
            petImage: pet2,
            personImage: person3,
            text: 'Levei o Fiel para o banho e gostei bastante. O pelo ficou muito bonito e o atendimento foi bem tranquilo. Com certeza vou levar de novo.'
        },
        {
            name: 'Fernanda Martins',
            petName: 'Lola',
            petImage: pet3,
            personImage: person2,
            text: 'A Lola adorou. Quando cheguei para buscar, estava super tranquila. Gostei bastante do atendimento e do cuidado que tiveram com ela.'
        },
        {
            name: 'Bruno Almeida Santos',
            petName: 'Thor',
            petImage: pet4,
            personImage: person4,
            text: 'O Thor não para quieto um minuto, mas deu tudo certo. Foram pacientes com ele e me passaram bastante confiança durante o atendimento.'
        },
        {
            name: 'Camila',
            petName: 'Bibi',
            petImage: pet5,
            personImage: person5,
            text: 'Gostei muito de como ficou a tosa da Bibi. O corte ficou do jeito que eu queria e ela voltou para casa bem tranquila.'
        },
        {
            name: 'Renata Costa Ferreira',
            petName: 'Nina',
            petImage: pet6,
            personImage: person6,
            text: 'Já trouxe a Nina algumas vezes e sempre fui bem atendida. Ela já reconhece o lugar e fica bem tranquila quando chega. É bom saber que posso deixar ela aqui sem preocupação.'
        }
    ]
}

export function Testimonials({ id }: { id?: string }) {
    const [current, setCurrent] = useState(0)
    const { items } = testimonialsContent
    const item = items[current]

    const previous = () => setCurrent((prev) => (prev - 1 + items.length) % items.length)
    const next = () => setCurrent((prev) => (prev + 1) % items.length)

    return (
        <section id={id} className={styles.testimonials}>
            <div className={styles.header}>
                <h2>{testimonialsContent.title}</h2>
                <span className={styles.subtitle}>{testimonialsContent.subtitle}</span>
                <p>{testimonialsContent.description}</p>
            </div>

            <div className={styles.showcase}>
                <div className={styles.slider}>
                    <button
                        type="button"
                        className={styles.arrow}
                        onClick={previous}
                        aria-label="Depoimento anterior"
                    >
                        ←
                    </button>

                    <article key={current} className={styles.card}>
                        <div className={styles.petPhoto}>
                            <img src={item.petImage} alt={`${item.petName}, o pet`} />
                        </div>

                        <div className={styles.body}>
                            <span className={styles.quote}>“</span>
                            <p className={styles.text}>{item.text}</p>

                            <div className={styles.author}>
                                <img src={item.personImage} alt={item.name} />
                                <div>
                                    <strong>{item.name}</strong>
                                    <span>Tutor(a) do {item.petName}</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    <button
                        type="button"
                        className={styles.arrow}
                        onClick={next}
                        aria-label="Próximo depoimento"
                    >
                        →
                    </button>
                </div>

                <span className={styles.counter}>
                    {String(current + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
            </div>
        </section>
    )
}