import { navItems } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(sectionIds);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Coding />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
