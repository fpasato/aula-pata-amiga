import { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

import styles from './styles.module.css'
import image1 from '../../../../assets/logo.png'
import image2 from '../../../../assets/home/recepcao.png'
import image3 from '../../../../assets/home/fachada.png'
import image4 from '../../../../assets/home/sala-tosa.jpg'
import image5 from '../../../../assets/home/sala-hotel.jpg'

const images = [
    image1,
    image2,
    image3,
    image4,
    image5
]

const content = {
    eyebrow: "Sobre a",
    brand: "Pata Amiga",
    title: "Um cuidado pensado para cada pet.",
    text: "A Pata Amiga foi criada para oferecer cuidados de qualidade em um ambiente tranquilo e preparado para receber diferentes necessidades. Nosso trabalho busca proporcionar uma experiência segura para os pets e mais tranquilidade para seus tutores.",
    features: [
        "Atendimento atencioso",
        "Cuidados adaptados a cada pet",
        "Ambiente preparado e seguro"
    ]
};

export function About({ id }: { id?: string }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [direction, setDirection] = useState('next')

    return (
        <section id={id} className={styles.about}>
            <div className={styles.carousel}>
                <button onClick={() => {
                    setDirection('prev')
                    setCurrentImage((currentImage - 1 + images.length) % images.length)
                }}>
                    <FaChevronLeft />
                </button>

                <img
                    key={currentImage}
                    className={
                        direction === 'next'
                            ? styles.next
                            : styles.prev
                    }
                    src={images[currentImage]}
                    alt={`Imagem ${currentImage + 1}`}
                />

                <button onClick={() => {
                    setDirection('next')
                    setCurrentImage((currentImage + 1) % images.length)
                }}>
                    <FaChevronRight />
                </button>
            </div>

            <div className={styles.content}>
                <h2>
                    {content.eyebrow} <span style={{ color: 'var(--text)' }}>{content.brand}</span>
                </h2>

                <h3>{content.title}</h3>
                <p>{content.text}</p>

                <ul>
                    {content.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}