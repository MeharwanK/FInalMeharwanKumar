import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";
import Products from "./Products";
import { Services } from "./Services";
import Footer from "./Footer"



function WelcomePage() {
    return (
        <>
            <HeroSection />
            <Products/>
            <Services/>
            <Footer/>
            <ContactUs />

        </>
    );
}

export default WelcomePage;
