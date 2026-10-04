import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTools from "./components/ScrollTools";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <ScrollTools />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Services />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
