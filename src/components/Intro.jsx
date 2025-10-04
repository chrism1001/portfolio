function Intro() {
    const links = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/chrismejiacs/",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        },
        {
            name: "GitHub",
            url: "https://github.com/chrism1001",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        }
    ]

    return (
        <div className="h-full flex items-center justify-start lg:justify-center text-left">
            <div className="pt-12 px-4 sm:px-6 lg:px-8">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-gray-300">
                    Christopher Mejia
                </h1>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 text-gray-300">
                    Software Engineer
                </p>
                <div className="flex space-x-4 sm:space-x-6">
                    {links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-gray-400 transition-colors"
                        >
                            <img src={link.icon} alt={link.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Intro