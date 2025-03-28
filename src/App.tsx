import Nav from "./components/nav";
import Hero from "./components/hero";
import Blog from "./components/blog";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useRef } from "react";

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null!);
  const blogRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  // Función para hacer scroll a una sección
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Nav
        scrollToSection={scrollToSection}
        sections={{ heroRef, blogRef, projectsRef, contactRef }}
      />

      {/* Componentes con referencias */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default App;
