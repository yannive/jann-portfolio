import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollTools from "./components/layout/ScrollTools";
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
