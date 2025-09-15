import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaTools } from 'react-icons/fa'
import { SiNextdotjs, SiFrontendmentor, SiTailwindcss, SiMysql, SiBackendless } from 'react-icons/si'
import { VscVscodeInsiders } from "react-icons/vsc";
import Image from "next/image";
import { BiCodeAlt } from 'react-icons/bi'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Skills",
      icon: < SiFrontendmentor className="text-2xl" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-2xl" /> },
        { name: "React.js", icon: <FaReact className="text-blue-500 text-2xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400 text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-2xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      ]
    },
    {
      title: "Backend Skills",
      icon: <SiBackendless className="text-2xl" />,
      skills: [
        { name: "Next.js API", icon: <SiNextdotjs className="text-black dark:text-white text-2xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
      ]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: "Git Bash", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white text-2xl" /> },
        { name: "DevTools", icon: <BiCodeAlt className="text-blue-500 text-2xl" /> },
        { name: "VS Code", icon: <VscVscodeInsiders className="text-blue-500 text-2xl" /> }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-light-bg/10 dark:bg-dark-bg/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
           <div className='flex gap-2 justify-center items-center'>
                      <Image
                        src="/skill.png"
                        alt="skill"
                        width={46}
                        height={46}
                      />
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                          Skills
                        </h2>
                        <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
                      </div>
          
                    </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-light-bg dark:bg-dark-bg p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 bg-blue-500/10 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-center border-1 border-white px-2 py-2 rounded-sm">
                    <div className="mr-3">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}