import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Certificates from "@/components/Certificates"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="min-h-screen site-bg">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
