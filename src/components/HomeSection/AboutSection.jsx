import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../../styles/global.css'

const AboutSection = () => {
  return (
    <section className="slanted-section">
      <div className="container mx-auto px-4 slanted-content">
        <h2 className="mb-5 text-3xl text-center font-extrabold text-[#b6b6b6] mt-10">About</h2>
        <p className="text-lg text-gray-700 mb-8 text-center justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At provident magnam eius tempore error amet ad. Reprehenderit placeat mollitia libero reiciendis cumque praesentium ratione, esse earum perspiciatis eveniet, optio dolorum.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/yourprofile" className="text-blue-600">LinkedIn</Link>
              <Link href="https://github.com/yourprofile" className="text-gray-800">GitHub</Link>
              <Link href="https://twitter.com/yourprofile" className="text-blue-400">Twitter</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
            <button className='button'>
                <Link href="https://github.com/yourgithubrepo" className="text-blue-600">GitHub Repository</Link>
            </button>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection
