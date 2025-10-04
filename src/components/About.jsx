function About() {
    return (
        <div className="flex justify-start items-start text-left">
            <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-col">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-l md:text-2l mb-6 sm:mb-8 text-gray-300">ABOUT</h1>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                        I am committed to life long learning. I am a full stack software engineer, and I recently graduated from New Jersey Institute of Technology.
                        I have a deep passion for programming and data structures and algorithms.
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        When I am not being a Leetcode monkey, I enjoy playing chess, going out for a run, 
                        and going out to eat with my girlfriend.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About