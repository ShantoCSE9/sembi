import Header from "@/components/Home/Header";
import Service from "@/components/Home/Service";
import WhatWeDo from "@/components/Home/WhatWeDo";
import ContactSection from "@/components/Navbar/Contact/ContactSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <Service/>
        <WhatWeDo/>
        <ContactSection/>
        
    </>
  ) 
}
