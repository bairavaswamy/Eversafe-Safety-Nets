import Footer from "./footer/Footer";
import FeatureCardsSection from "./home/FeatureCardsSection";
import HomeCarousel from "./home/HomeCarousel";
import Testimonials from "./home/Testimonials";
import WhyOurSolutionsMatter from "./home/WhyOurSolutionsMatter";
import Navbar from "./navbar/Navbar";

const Home = () =>{
  return(
    <>
    <Navbar/>
    <main id="main-content">
    <HomeCarousel/>
    <FeatureCardsSection />
    <WhyOurSolutionsMatter /> 
    <Testimonials />
    </main>
    <Footer/>
    </>)
}

export default Home;