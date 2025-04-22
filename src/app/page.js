import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
 import HomePage from "../Components/Home";
import ContactSection from "../Components/pages/Contact";
import Projectspages from "../Components/pages/Projectpages";
import Aboutus from "../Components/pages/Aboutus";
import Donatepop from "../Components/pages/Donatepop"
import CertificatesSection from "./recognizaion/page";
import FloatingWhatsApp from "@/Components/floatingwhatsapp";
import DonateSection from "@/Components/pages/Payment";
export default function Home() {
  return (
    <div>
     <Navbar />
        <HomePage />
        {/* <ContactSection /> */}
        {/* <Projectspages /> */}
        {/* <Aboutus />        */}
        {/* <Donatepop /> */}
        {/* <CertificatesSection /> */}
        <DonateSection/>
      <Footer />
      <FloatingWhatsApp/>
    </div>
  );
}
