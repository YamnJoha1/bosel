import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Qoute from '@/sections/Qoute';
import FAQSection from '@/sections/FAQ';
import Navbar from '@/components/Navbar';
import AboutSlider from '@/sections/AboutSlider';

export default function Home() {
  return (
    <main className="bg-background text-foreground font-serif">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <AboutSlider />
      <Qoute />
      <FAQSection />
    </main>
  );
}