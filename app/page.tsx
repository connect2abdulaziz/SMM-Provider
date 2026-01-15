import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Cheap from "./components/Cheap";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Benefits />
      <Cheap />
      <FAQ />
      <Footer />
    </div>
  );
}
