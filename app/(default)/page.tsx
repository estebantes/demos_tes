import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from '@/components/blocks'
import TextoCompartido from '@/components/texto-compartido'



export const metadata = {
  title: 'Inicio - TES',
  description: 'Nuestra misión y valores fundamentales.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Blocks />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
