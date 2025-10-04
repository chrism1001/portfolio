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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16">
          <nav className="w-full">
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">Contact</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-600 to-gray-500 hover:from-slate-700 hover:to-gray-900 text-white px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm md:text-base lg:text-lg">
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