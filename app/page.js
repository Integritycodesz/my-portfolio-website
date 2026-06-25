import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Stats />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
