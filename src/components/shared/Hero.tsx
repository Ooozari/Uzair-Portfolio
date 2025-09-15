'use client'
import Image from "next/image";
import { FiDownload, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { useEffect, useRef } from 'react'

export default function Hero() {
  // ✅ Explicit type for ref
  const cubeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let rotation = 0;
    // ✅ Explicit type for requestAnimationFrame
    let animationFrameId: number;

    const animate = () => {
      rotation += 0.5;
      cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
  
 <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-light-bg/5 dark:bg-dark-bg/5"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-screen gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
          <div className="flex items-center mb-6">

            <div className="w-16 h-16 rounded-full bg-blue-500/10 border-2 border-blue-500/30 p-1 mr-4 overflow-hidden">
              <Image
                src="/pp.png"
                alt="Uzair Asif"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Uzair Asif</h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="mr-1">📍</span>
                <span>
                  Faisalabad, Pakistan{' '}
                  <Image
                    src="/flag.png"
                    alt="Pakistan Flag"
                    width={28}
                    height={20}
                    className="inline-block align-middle"
                  />

                </span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frontend Web <span className="text-blue-500">Developer</span>
          </h1>

          <p className="text-lg mb-6 max-w-lg">
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating responsive, performant, and accessible websites.
            Currently focused on React ecosystem and Next.js applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download>
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                <FiDownload className="mr-2" />
                Resume
              </button>
            </a>

            <div className="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/ooozari/"
                target="_blank"
                className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Ooozari"
                target="_blank"
                className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="mailto:uzairasiff1227@gmail.com"
                target="_blank"
                className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - 3D Cube */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="relative"
            style={{
              width: 'clamp(10rem, 20vw, 13rem)',
              height: 'clamp(10rem, 20vw, 13rem)',
              perspective: '1000px',
            }}
          >
            <div
              ref={cubeRef}
              className="absolute w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <SiNextdotjs className="text-[clamp(2rem,5vw,3.75rem)] text-shadow-white" />
              </div>
              {/* Back */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `rotateY(180deg) translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <FaReact className="text-[clamp(2rem,5vw,3.75rem)] text-blue-400" />
              </div>
              {/* Left */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `rotateY(-90deg) translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <SiTailwindcss className="text-[clamp(2rem,5vw,3.75rem)] text-sky-400" />
              </div>
              {/* Right */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `rotateY(90deg) translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <FaHtml5 className="text-[clamp(2rem,5vw,3.75rem)] text-orange-500" />
              </div>
              {/* Top */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `rotateX(90deg) translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <FaReact className="text-[clamp(2rem,5vw,3.75rem)] text-cyan-400" />
              </div>
              {/* Bottom */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-2 border-white/50 shadow-lg rounded-lg"
                style={{
                  transform: `rotateX(-90deg) translateZ(clamp(80px, 15vw, 102px))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <FaCss3Alt className="text-[clamp(2rem,5vw,3.75rem)] text-[#2965f1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




