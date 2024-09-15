import { Companies } from './components/Companies';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Testimonials } from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Companies />
      <Features />
      <Testimonials />
    </>
  );
}
