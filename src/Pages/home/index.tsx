

import styles from './styles.module.css';
import { Header } from '../../components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Space } from './components/space';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/contact';
import { Footer } from '../../components/footer';

export function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <Hero id="home" />
            <About id="about" />
            <Services id="services" />
            <Space id="space" />
            <Testimonials id="testimonials" />
            <Contact id="contact" />
            <Footer />
        </div>
    )
}