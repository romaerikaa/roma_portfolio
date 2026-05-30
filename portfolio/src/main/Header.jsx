import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 
         
         text-white 
      rounded-3xl
      bg-cyan-500/20
      backdrop-blur-md
      border border-cyan-300/40
      shadow-[0_0_30px_rgba(0,255,255,0.35)] 
      
      ${
    showHeader
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-10 pointer-events-none"
    }`}>
     <nav className="site-nav flex items-center text-white font-semibold">

      <a href="#home" className="hover:text-cyan-200 transition">
        Home
      </a>

      <a href="#about" className="hover:text-cyan-200 transition">
        About
      </a>

      <a href="#projects" className="hover:text-cyan-200 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-cyan-200 transition">
        Contact
      </a>

    </nav>
    </header>
  );
}
