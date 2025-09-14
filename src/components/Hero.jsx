import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "ADIL PASHA "
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-on-scroll">
            <h3 className="text-primary-500 text-xl md:text-2xl font-normal mb-4">
              Hello, I'm
            </h3>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {displayText}
              {showCursor && <span className="text-primary-500 animate-pulse">|</span>}
              <br />
              <span className="text-primary-500 text-gradient">JAVA DEVELOPER</span>
            </h1>
            
            <p className="text-dark-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm currently a B.Tech student at Presidency University, Bangalore. I'm passionate about 
              AI engineering, automation, and modern web development. My core strengths include the 
              ability to learn rapidly, collaborate with teams, and take initiative on tech-forward solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-block px-8 py-4 bg-primary-500 text-dark-700 font-semibold rounded-lg 
                         transition-all duration-300 hover:bg-transparent hover:text-primary-500 
                         border-2 border-primary-500 hover:shadow-lg transform hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="/AdilsResume.pdf" alt="Adil Pasha's Resume"
                download="AdilsResume.pdf"
                className="inline-block px-8 py-4 bg-transparent text-primary-500 font-semibold 
                         rounded-lg border-2 border-primary-500 transition-all duration-300 
                         hover:bg-primary-500 hover:text-dark-700 hover:shadow-lg transform hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/adilpasharazvi"
                className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center 
                         text-dark-700 transition-all duration-300 hover:bg-primary-600 
                         transform hover:-translate-y-1 hover:shadow-lg animate-float"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
              <a
                href="http://github.com/adilpasha2/"
                className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center 
                         text-dark-700 transition-all duration-300 hover:bg-primary-600 
                         transform hover:-translate-y-1 hover:shadow-lg animate-float"
                style={{ animationDelay: '0.2s' }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center animate-on-scroll">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary-500 
                           overflow-hidden shadow-2xl transform transition-transform duration-500 
                           hover:scale-105 hover:border-primary-400">
                <img
                  src="/images/nanmaka.jpg"
                  alt="Adil Pasha S A"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full 
                           animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full 
                           animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary-400 rounded-full 
                           animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce-slow"></div>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
