import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const FlipCard = ({ title, imageSrc, description, tech, github, demo }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="flip-card group w-96 h-[28rem] mx-auto perspective-1000 hover:scale-105 
                 transition-transform duration-700 ease-in-out cursor-pointer"
      onMouseEnter={() => setTimeout(() => setIsFlipped(true), 600)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} // For mobile
    >
      <div 
        className={`flip-card-inner relative w-full h-full transform-style-preserve-3d 
                   transition-transform duration-1000 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl 
                       overflow-hidden shadow-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-cover w-full h-full brightness-90 group-hover:brightness-110 
                     transition duration-500"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          {/* Hover overlay for front */}
          <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 
                         transition-opacity duration-300"></div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-dark-600 
                       to-dark-700 text-white backface-hidden rotate-y-180 p-6 rounded-xl 
                       flex flex-col justify-between shadow-lg border border-primary-500/20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-500">{title}</h3>
            <p className="text-sm text-dark-300 leading-relaxed mb-4">{description}</p>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs text-accent-400 mb-2 font-semibold">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((technology, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-dark-700 text-accent-300 px-3 py-1 rounded-full
                             border border-accent-500/30 transition-all duration-300
                             hover:bg-accent-500 hover:text-white transform hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isFlipped ? 'slideUp 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          {(github || demo) && (
            <div className={`mt-4 ${
              github && demo 
                ? 'flex justify-between space-x-4' 
                : 'flex justify-center'
            }`}>
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${github && demo ? 'flex-1' : 'px-8'} bg-primary-500 text-dark-700 px-4 py-2 rounded-lg 
                           text-center font-semibold transition-all duration-300 
                           hover:bg-primary-600 transform hover:scale-105 hover:shadow-lg`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
              )}
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${github && demo ? 'flex-1' : 'px-8'} bg-accent-500 text-white px-4 py-2 rounded-lg 
                           text-center font-semibold transition-all duration-300 
                           hover:bg-accent-600 transform hover:scale-105 hover:shadow-lg`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                  Demo
                </a>
              )}
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full 
                         animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-500 rounded-full 
                         animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
