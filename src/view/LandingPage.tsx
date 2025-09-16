import { Hero,Skills,Education,Contact,Projects, Code } from '@/components/shared'
import { Footer,Header } from '../layout'

export default function LandingPage() {
  return (
    <div>
      <Code />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}