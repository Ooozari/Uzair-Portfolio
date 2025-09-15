"use client";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { LuLoaderCircle } from "react-icons/lu";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex gap-2 justify-center items-center">
            <Image src="/comments.png" alt="Comments" width={32} height={32} />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                Contact Me
              </h2>
              <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Company (optional)"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Email"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors min-h-[120px]"
                placeholder="Message"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors min-w-[160px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
