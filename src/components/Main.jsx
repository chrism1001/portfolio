import Intro from './Intro.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'

function Main() {
    return (
        <div className="min-h-screen bg-gradient-to-l from-black to-gray-900">
            {/* Mobile Layout - Single Column */}
            <div className="lg:hidden">
                <Intro />
                <About />
                <Projects />
            </div>
            
            {/* Desktop Layout - Split Screen */}
            <div className="hidden lg:flex min-h-screen">
                {/* Left Side - Intro Section (Fixed) */}
                <div className="w-1/2 h-screen flex-shrink-0">
                    <Intro />
                </div>
                
                {/* Right Side - Scrollable Content */}
                <div className="w-1/2 h-screen overflow-y-auto">
                    <About />
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Main