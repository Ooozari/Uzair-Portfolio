'use client'
import { SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      title: "ShifaHub",
      description: "Healthcare platform to book appointments with doctors",
      features: [
        "Doctor appointment booking",
        "Patient management system",
        "Secure payment integration",
        "Admin dashboard"
      ],
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      images: ["/shifahub1.png", "/shifahub2.png", "/shifahub1.png"]
    },
    {
      title: "BitGazer",
      description: "Online trading platform for cryptocurrencies",
      features: [
        "Real-time price tracking",
        "Portfolio management",
        "Secure transactions",
        "Advanced charting"
      ],
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      images: ["/bitgazer1.jpg", "/bitgazer2.jpg", "/bitgazer3.jpg"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex gap-2 justify-center items-center">
            <Image src="/start-up.png" alt="start-up" width={28} height={28} />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                Projects
              </h2>
              <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const [currentIndex, setCurrentIndex] = useState(0)
              const showPrev = () => setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
              const showNext = () => setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))

              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200 light:bg-gray-100"></div>
                  <div className="relative bg-light-bg dark:bg-dark-bg p-6 rounded-lg border border-light-bg/20 dark:border-dark-bg/20 h-full">
                    {/* Image Slider */}
                    <div className="h-64  relative bg-gray-200 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
                      <Image
                        src={project.images[currentIndex]}
                        alt="project"
                        fill
                        className="object-cover rounded-lg"
                      />
                      <button onClick={showPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 text-sm rounded hover:bg-white/90">‹</button>
                      <button onClick={showNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 text-sm rounded hover:bg-white/90">›</button>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/2">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:w-1/2">
                        <h4 className="font-semibold mb-2">Tech Stack:</h4>
                        <div className="space-y-2">
                          {project.techStack.map((tech, i) => (
                            <div key={i} className="flex items-center">
                              <span className="mr-2">{tech.icon}</span>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
