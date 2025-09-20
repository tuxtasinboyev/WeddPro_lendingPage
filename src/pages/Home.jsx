import PartnersSection from '../components/Blog/PartnersSection'
import { Footer } from '../components/Footer'
import Advantages from '../components/Main/components/Advantages'
import HowItWorks from '../components/Main/components/Advense'
import CustomerChatSection from '../components/Main/components/CustomerChatSection'
import FAQ from '../components/Main/components/Faq'
import Hero from '../components/Main/components/Hero'
import ResponsiveDesignSection from '../components/Main/components/ResponsiveDesignSection'
import HeroWeddPro from '../components/Main/features/HeroWeddPro'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks />
            <ResponsiveDesignSection />
            <HeroWeddPro />
            <CustomerChatSection />
            <PartnersSection />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home