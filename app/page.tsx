import Hero from './views/Hero'
import Services from './views/Services'
import About from './views/About'
import WhyUs from './views/WhyUs'
import Contact from './views/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
    </main>
  );
}
