import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './styles.module.css'

import consulta from '../../../../assets/home/clinica.png'
import banho from '../../../../assets/home/banho.png'
import nutricao from '../../../../assets/home/recepcao.png'
import convivencia from '../../../../assets/home/patio.png'
import tosa from '../../../../assets/home/sala-tosa.jpg'
import hotel from '../../../../assets/home/sala-hotel.jpg'

const heading = {
    title: 'Nossos Serviços',
    subtitle: 'Cuidamos da saúde, do bem-estar e de cada detalhe para que seu pet tenha uma vida mais saudável, tranquila e feliz'
}

const services = [
    {
        title: 'Consulta Veterinária',
        subtitle: 'Saúde e acompanhamento',
        description: 'Atendimento veterinário para acompanhar a saúde, prevenção e necessidades do seu pet.',
        image: consulta
    },
    {
        title: 'Banho',
        subtitle: 'Higiene e bem-estar',
        description: 'Banho completo com produtos adequados para deixar seu pet limpo, confortável e bem cuidado.',
        image: banho
    },
    {
        title: 'Tosa',
        subtitle: 'Cuidado e estética',
        description: 'Serviço de tosa realizado de acordo com as características e necessidades de cada pet.',
        image: tosa
    },
    {
        title: 'Nutrição',
        subtitle: 'Alimentação equilibrada',
        description: 'Orientação para uma alimentação adequada às necessidades e rotina do seu pet.',
        image: nutricao
    },
    {
        title: 'Hotelzinho',
        subtitle: 'Estadia e cuidados',
        description: 'Um espaço para seu pet ficar bem cuidado, com atenção, companhia e uma rotina tranquila durante a estadia.',
        image: hotel
    },
    {
        title: 'Convivência',
        subtitle: 'Diversão e socialização',
        description: 'Espaço para os pets brincarem, se movimentarem e aproveitarem momentos de interação.',
        image: convivencia
    }
]

export function Services({ id }: { id?: string }) {
    const [activeService, setActiveService] = useState(0)
    const service = services[activeService]

    return (
        <section id={id} className={styles.services}>
            <h2 className={styles.servicesTitle}>{heading.title}</h2>
            <p className={styles.servicesSubtitle}>{heading.subtitle}</p>

            <div className={styles.servicesCard}>
                <div className={styles.serviceList}>
                    {services.map((item, index) => (
                        <button
                            key={item.title}
                            className={`${styles.serviceContent} ${activeService === index ? styles.active : ''
                                }`}
                            onMouseEnter={() => setActiveService(index)}
                            onFocus={() => setActiveService(index)}
                        >
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <h3>{item.title}</h3>
                            <FaArrowRight />
                        </button>
                    ))}
                </div>

                <div className={styles.servicePreview}>
                    <img
                        src={service.image}
                        alt={service.title}
                        className={styles.serviceImage}
                    />

                    <div className={styles.serviceInfo}>
                        <span>{service.subtitle}</span>
                        <p>{service.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}