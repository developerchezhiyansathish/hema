import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Campaigns from "./components/Campaigns";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Campaigns />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
