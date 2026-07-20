import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Əsas məzmuna keç
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
