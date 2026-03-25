import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const t = window.setTimeout(scroll, 0);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);
}

export default function HomePage() {
  useScrollToHash();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
