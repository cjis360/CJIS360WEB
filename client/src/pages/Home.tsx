import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SSVFramework from '@/components/SSVFramework';
import Industries from '@/components/Industries';
import Trust from '@/components/Trust';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <SSVFramework />
        <Industries />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
