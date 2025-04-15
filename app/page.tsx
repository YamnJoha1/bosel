import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Summer from '@/sections/Summer';
import Qoute from '@/sections/Qoute';
import FAQSection from '@/sections/FAQ';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-background text-foreground font-serif">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Summer />
      <Qoute />
      <FAQSection />
    </main>
  );
}