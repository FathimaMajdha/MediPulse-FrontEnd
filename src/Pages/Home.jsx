import Faq  from "../Components/Faq";
import FeaturesShowcase from "../Components/FeaturesShowcase";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Working from "../Components/Working";
import Integrations from "../Components/Integrations";
import Pricing from "../Components/Pricing";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <FeaturesShowcase />
            <Working />
            <Testimonials />
            <Integrations />
            <Pricing />
            <Faq />
            <Footer />
        </main>
    );
}