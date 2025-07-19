import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React.js", "Bootstrap", "ConvexDB", "Scikit-learn", "TensorFlow"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Arduino", "Raspberry Pi", "VS Code"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Leadership", "Problem Solving"]
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillCards = entry.target.querySelectorAll('.skill-category')
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate')
            }, index * 200)
          })
        }
      })
    }, observerOptions)

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20 bg-dark-700" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wide">
            MY EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-dark-600 p-8 rounded-xl text-center 
                       transform transition-all duration-500 hover:scale-105 hover:shadow-xl
                       animate-on-scroll opacity-0 translate-y-8"
            >
              <h3 className="text-primary-500 text-xl font-semibold mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag px-4 py-2 bg-dark-700 text-white text-sm rounded-full 
                             border border-accent-500 transition-all duration-300 
                             hover:bg-accent-500 hover:text-white hover:scale-110 cursor-pointer
                             transform hover:rotate-2"
                    style={{ 
                      animationDelay: `${(index * 4 + skillIndex) * 0.1}s` 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-600 to-dark-600 p-8 rounded-2xl border border-primary-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Next.js", "TypeScript", "Docker", "AWS", "GraphQL"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 
                           text-primary-400 rounded-lg border border-primary-500/30 
                           transition-all duration-300 hover:from-primary-500/30 hover:to-accent-500/30
                           hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
