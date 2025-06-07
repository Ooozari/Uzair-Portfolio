'use client'
import Image from "next/image"
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { LuLoaderCircle } from "react-icons/lu";

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

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, Email, and Message are required.")
      return
    }

    setLoading(true)

    const data = {
      access_key: "036c3694-be10-4e29-bf29-f955bffa0b64",
      ...formData
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      const result = await response.json()
      if (result.success) {
        setFormData({ name: '', company: '', email: '', message: '' })
        setFocusedFields({ name: false, company: false, email: false, message: false })
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      } else {
        alert('Submission failed. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message.')
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className='flex gap-2 justify-center items-center'>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'company', 'email', 'message'].map((field) => (
              <div className="relative" key={field}>
                {field === 'message' ? (
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors min-h-[120px]"
                    placeholder="Message"
                    required={field === 'message'}
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field)}
                    onBlur={() => handleBlur(field)}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none transition-colors"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1) + (field === 'company' ? ' (optional)' : '')}
                    required={field !== 'company'}
                  />
                )}
                {focusedFields[field] && (
                  <span className="absolute left-0 -top-5 text-xs text-blue-500 transition-all">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </span>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors min-w-[160px]"
              disabled={loading}
            >
              {loading ? (
                <LuLoaderCircle className="animate-spin text-lg" />
              ) : (
                <FiSend className="text-lg" />
              )}
              {success ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
