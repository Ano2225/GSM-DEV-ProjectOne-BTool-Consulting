import Image from "next/image";
import HeroSection from "./component/HeroSection";
import WhyChooseUs from "./component/WhyChooseUs";
import OthersServices from "./component/OthersServices";
import Testimonials from "./component/Testimonials";
import "./globals.css"
import ImmigrationAndTravelServices from "./component/ImmigrationAndTravelServices";
import ContactForm from "./component/ContactUs";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ImmigrationAndTravelServices/>
    <WhyChooseUs/>
    <OthersServices/>
    <Testimonials/>
    <ContactForm/>
    </>
  );
}
