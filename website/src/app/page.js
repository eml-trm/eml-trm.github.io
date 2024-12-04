import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ContactForm from '../components/ContactForm'


export default function Home() {
  return (
    <main>
      <section id="home">
        <HomeSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  )
}

