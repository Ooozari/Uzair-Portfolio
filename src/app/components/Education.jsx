import { FcGraduationCap } from "react-icons/fc";
import Image from "next/image";
export default function Education() {
  return (
    <section id="education" className="py-20 bg-light-bg/10 dark:bg-dark-bg/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">

          <div className='flex gap-2 justify-center items-center'>
            <div className="flex justify-center items-center gap-2">
              <Image
                src='/graduation-hat.png'
                alt='education hat'
                width={42}
                height={42}
                className="inline-block align-middle"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                  Education
                </h2>
                <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
              </div>
            </div>

          </div>
        </div>


        <div className="max-w-3xl mx-auto bg-light-bg dark:bg-dark-bg p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">National Textile University, Faisalabad</h3>
          <p className="text-lg mb-4">Bachelor of Science, Computer Science</p>
          <p className="mb-4">2022 - Present</p>

          <h4 className="font-semibold mb-2">Related Coursework:</h4>
          <p className="mb-4">
            Web Development, Machine Learning, Data Science,
            System Design, Database Systems.
          </p>

          <p className="font-semibold">GPA: 3.54/4.00</p>
        </div>
      </div>
    </section>
  )
}