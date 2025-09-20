import { Hero,Skills,Education,Contact,Projects} from '@/components/shared'


export default function LandingPage() {
  return (
    <div>
      <Hero />
      
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}