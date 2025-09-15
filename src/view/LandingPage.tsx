import { Hero,Skills,Education,Contact,Projects } from '@/components/shared'
import { Footer,Header } from '../layout'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}