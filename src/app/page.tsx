'use client'

import Image from "next/image";
import HeroSection from "./component/HeroSection";
import WhyChooseUs from "./component/WhyChooseUs";
import OthersServices from "./component/OthersServices";
import Testimonials from "./component/Testimonials";
import "./globals.css"
import ImmigrationAndTravelServices from "./component/ImmigrationAndTravelServices";
import ContactForm from "./component/ContactUs";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <HeroSection/>
        <ImmigrationAndTravelServices/>
        <WhyChooseUs/>
        <OthersServices/>
        <Testimonials/>
        <ContactForm/>
    </motion.div>
    </>
  );
}
