import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Parcours from "./components/Parcours";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main id="contenu">
        <Hero />
        <Projects />
        <Experience />
        <Parcours />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}