import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-12 bg-light-bg/10 dark:bg-dark-bg/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://www.linkedin.com/in/ooozari/"
              target="_blank"
              className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/Ooozari"
              target="_blank"
              className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="mailto:uzairasiff1227@gmail.com"
              target="_blank"
              className="p-2 rounded-full hover:bg-light-bg/20 dark:hover:bg-dark-bg/20 transition-colors">
              <FiMail size={20} />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Uzair Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}