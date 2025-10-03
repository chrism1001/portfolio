function Intro() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-black to-gray-900">
            <div className="text-center max-w-2xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl mb-6 text-white">
                    Hello, I'm Christopher
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white">
                    I'm a full stack software engineer.
                </p>

                <button onClick={() => scrollToSection("about")} className="bg-gradient-to-r from-slate-600 to-gray-500 hover:from-slate-700 hover:to-gray-900 text-white py-2 px-20 transition-all duration-200 rounded-lg">
                    View my work
                </button>
            </div>
        </div>
    )
}

export default Intro