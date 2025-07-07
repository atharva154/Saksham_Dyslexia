import React from 'react'
import Image from 'next/image'
import homepage from '../public/images/homepage.jpg'
import Navbar from '../components/Navbar'
import { FaBrain } from 'react-icons/fa'
import { MdOutlinePsychology } from 'react-icons/md'
import { IoMdHand } from 'react-icons/io'
import { BsLightbulb, BsBarChart, BsPeople, BsStars } from 'react-icons/bs'

const Page = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className='container mx-auto px-4 lg:px-8 mt-20'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 min-h-[calc(100vh-80px)] py-8 lg:py-16'>
          {/* Left Content */}
          <div className='flex flex-col items-start text-left lg:w-1/2 lg:pt-20'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Making Reading & Writing Fun for Every Child!
            </h1>
            <p className='text-lg md:text-xl text-gray-700 mb-8 max-w-xl'>
              Inspire your child&apos;s creativity and love for learning through our engaging educational platform.
            </p>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
              Get Started
            </button>
          </div>

          {/* Right Content */}
          <div className='lg:w-1/2 w-full'>
            <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] max-w-[600px] mx-auto'>
              <Image 
                src={homepage} 
                alt='Children reading and writing' 
                fill
                className='rounded-2xl shadow-2xl object-cover'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What is Dyslexia Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Understanding Dyslexia
          </h2>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <FaBrain className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">What is Dyslexia?</h3>
              <p className="text-gray-600">
                Dyslexia is a learning difference that primarily affects reading and writing abilities but doesnt impact general intelligence.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <MdOutlinePsychology className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Signs</h3>
              <p className="text-gray-600">
                Difficulty with reading, spelling, and word recognition. Strong creativity and problem-solving abilities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <IoMdHand className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">How We Help</h3>
              <p className="text-gray-600">
                Our platform provides specialized tools and exercises designed to support dyslexic learning patterns.
              </p>
            </div>
          </div>

          {/* Additional Info Box */}
          
        </div>
      </section>

      {/* Dyslexia Awareness & Insights Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Dyslexia Awareness & Insights
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Understanding dyslexia is the first step towards creating an inclusive environment where everyone can thrive.
          </p>

          {/* Statistics and Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Global Impact Card */}
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform">
              <BsPeople className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">700M+</h3>
              <p className="text-gray-700">People worldwide have dyslexia</p>
            </div>

            {/* Common Signs Card */}
            <div className="bg-purple-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform">
              <BsLightbulb className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-purple-600 mb-2">1 in 5</h3>
              <p className="text-gray-700">Students show signs of dyslexia</p>
            </div>

            {/* Early Identification Card */}
            <div className="bg-green-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform">
              <BsBarChart className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-600 mb-2">90%</h3>
              <p className="text-gray-700">Success rate with early support</p>
            </div>

            {/* Strengths Card */}
            <div className="bg-orange-50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform">
              <BsStars className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-orange-600 mb-2">Unique</h3>
              <p className="text-gray-700">Creative problem-solving abilities</p>
            </div>
          </div>

          {/* Common Signs and Impact */}
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg">
            {/* Left Column - Common Signs */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Common Signs & Symptoms</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-600">Difficulty with reading comprehension and fluency</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-600">Challenges with spelling and writing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-600">Memory and concentration difficulties</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Positive Outlook */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Strengths & Abilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">★</span>
                  </div>
                  <span className="ml-3 text-gray-600">Enhanced creative thinking and innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">★</span>
                  </div>
                  <span className="ml-3 text-gray-600">Strong problem-solving capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">★</span>
                  </div>
                  <span className="ml-3 text-gray-600">Excellent visual and spatial awareness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
     
    </main>
  )
}

export default Page
