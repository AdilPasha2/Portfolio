import FlipCard from './FlipCard'

const Projects = () => {
  const projects = [
    {
      title: "Intelligent Phishing Detection System",
      imageSrc: "/images/phishingpic1.jpg",
      description: "A machine learning model designed to detect phishing domains through optimized ML algorithms and features. Built using Python, scikit-learn, and advanced feature engineering techniques.",
      tech: ["Python", "Machine Learning", "Scikit-learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "Waste-to-Fertilizer Automation",
      imageSrc: "/images/wasteProj.jpg", 
      description: "An IoT-based system that monitors and converts organic waste into fertilizer efficiently using Arduino and sensors. Features real-time monitoring and automated control systems.",
      tech: ["Arduino", "IoT", "C++"],
      github: null,
      demo: null
    }
  ]

  return (
    <section id="projects" className="py-20 bg-dark-600">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wide">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            FEATURED PROJECTS
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Projects Grid - Original alignment with wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FlipCard {...project} />
            </div>
          ))}
        </div>

        {/* Additional Project Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-dark-700 to-dark-700 p-8 rounded-2xl border border-primary-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub profile to see my latest work and contributions.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary-500 text-dark-700 font-semibold 
                       rounded-lg transition-all duration-300 hover:bg-primary-600 
                       transform hover:scale-105 hover:shadow-lg"
            >
              View All Projects
            </a>
          </div>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Used" },
            { number: "2", label: "Open Source Contributions" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-dark-700/50 rounded-xl border border-primary-500/10
                       transform transition-all duration-300 hover:scale-105 hover:border-primary-500/30"
            >
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-dark-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
