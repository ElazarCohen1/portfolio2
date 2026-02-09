import Image from "next/image";
import NavbarMenu from "./components/navBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import MentionsLegales from "./components/Mention_legale";
import Home2 from "./components/Home2";

export default function Home() {
  return (
     <>
        
        <div>  
        <section id='home' className='section'>
         <Home2 />
        </section>
         
        <section id='about' className='section'>
          <About />
        </section>
        
        <section id='portfolio' className='section'>
          <Portfolio />
        </section>
    
        <section id='contact' className='section'>
          <Contact />
        </section>
        
        <section>
          <MentionsLegales /> 
        </section>
    
        </div>
        
        </>
  );
}
