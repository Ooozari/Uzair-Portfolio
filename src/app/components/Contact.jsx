'use client'
import Image from "next/image";
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { LuMessageCircleMore } from "react-icons/lu";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    company: false,
    email: false,
    message: false
  })

  const handleFocus = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedFields(prev => ({ ...prev, [field]: false }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className='flex gap-2 justify-center items-center'>
            <Image
              src="/comments.png"
              alt="Comments"
              width={32}
              height={32}
              className="inline-block align-middle"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                Contact Me
              </h2>
              <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
            </div>

          </div>


        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Name"
              />
              {focusedFields.name && (
                <span className="absolute left-0 -top-5 text-xs text-blue-500 transition-all">
                  Name
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => handleFocus('company')}
                onBlur={() => handleBlur('company')}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Company (optional)"
              />
              {focusedFields.company && (
                <span className="absolute left-0 -top-5 text-xs text-blue-500 transition-all">
                  Company
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                placeholder="Email"
              />
              {focusedFields.email && (
                <span className="absolute left-0 -top-5 text-xs text-blue-500 transition-all">
                  Email
                </span>
              )}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors min-h-[120px]"
                placeholder="Message"
              />
              {focusedFields.message && (
                <span className="absolute left-0 -top-5 text-xs text-blue-500 transition-all">
                  Message
                </span>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <FiSend className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}