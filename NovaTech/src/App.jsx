import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";

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
      </main>

    </>
  );
}