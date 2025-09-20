import WeddProAbout from '../components/About/About'
import { Footer } from '../components/Footer'
import ContactForm from '../components/Main/components/ContactForm'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <WeddProAbout />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default About