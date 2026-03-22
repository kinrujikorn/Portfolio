import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

function Divider() {
  return <div className="section-divider max-w-md mx-auto" />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <About />
      <Divider />
      <BlogPreview />
      <Divider />
      <Contact />
    </>
  );
}
