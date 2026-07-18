import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Companies } from "@/components/Companies";
import { Investment } from "@/components/Investment";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Companies />
        <Investment />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
