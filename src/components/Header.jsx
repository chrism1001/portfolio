import React from 'react'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16">
          <nav className="w-full">
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg">Contact</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-600 to-gray-500 hover:from-slate-700 hover:to-gray-900 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md transition-all duration-200 text-xs sm:text-sm md:text-base lg:text-lg">
                Resume
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header