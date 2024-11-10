import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
  
       
       <Hero/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  );
}
