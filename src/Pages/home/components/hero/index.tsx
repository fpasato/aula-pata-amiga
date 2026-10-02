

import styles from './styles.module.css'
import heroImage from '../../../../assets/home/hero.png';


const content = {
    eyebrow: "Cuidado e carinho para o seu melhor amigo",
    title: "Cuidado que faz seu pet se sentir em casa.",
    text: "Na Pata Amiga, cada pet recebe atenção, carinho e cuidados pensados para o seu bem-estar. Um espaço preparado para cuidar de quem faz parte da sua família.",
    trust: [
        "Atendimento personalizado",
        "Ambiente acolhedor"
    ]
}

export function Hero({ id }: { id?: string }) {
    return (
        <section id={id} className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.eyebrow}>
                    {content.eyebrow}
                </span>
                <h1>{content.title}</h1>
                <p>{content.text}</p>

                <div className={styles.actions}>
                    <button>Conheça nossos serviços</button>
                    <button className={styles.secondary}>
                        Fale conosco
                    </button>
                </div>
                <div className={styles.trust}>
                    {content.trust.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src={heroImage} alt="Foto de Pets" />
            </div>
        </section>
    )
}