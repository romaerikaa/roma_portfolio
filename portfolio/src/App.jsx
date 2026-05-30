import { useEffect } from "react";
import FishMenu from "./main/FishMenu";
import Header from "./main/Header";
import "./App.css";
import Panorama from "./main/Panorama";
import About from "./main/About";
import Projects from "./main/Projects";
import Contact from "./main/Contact";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (
            entry.boundingClientRect.bottom < -80 ||
            entry.boundingClientRect.top > window.innerHeight + 80
          ) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black">
      <section id="home" className="relative h-screen overflow-hidden">
        <Panorama />
        <FishMenu />
        <Header />
      </section>

      <About />
      <Projects />
      <Contact />

      <footer className="w-full border-t border-cyan-300/20 bg-black/40 py-6 text-center text-white/70 backdrop-blur-md">
        <p className="text-lg font-semibold"> Roam © 2026</p>

        <p className="mt-2 text-sm text-cyan-200/70">
          Designed and developed by Roma Erika
        </p>
      </footer>
    </main>
  );
}

export default App;
