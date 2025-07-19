import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChartLine } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "CodSoft",
      description: "Gained hands-on experience in ML algorithms and predictive modeling. Worked on real-world datasets and implemented various machine learning techniques for classification and regression problems.",
      icon: faBriefcase
    },
    {
      title: "Data Science Intern",
      company: "Oasis Infobytes",
      description: "Completed a 1-month AICTE-certified internship focusing on real-world data analysis and visualization. Worked with Python, pandas, and various visualization libraries.",
      icon: faChartLine
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-700">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wide">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            WORK EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-500"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`flex items-center animate-on-scroll opacity-0 translate-y-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Experience Content */}
                <div className={`w-full md:w-2/5 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-dark-600 p-6 rounded-xl shadow-lg border border-primary-500/20 
                                transform transition-all duration-300 hover:scale-105 hover:border-primary-500/40">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-accent-500 font-semibold mb-4">
                      {experience.company}
                    </h4>
                    <p className="text-dark-300 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                      <FontAwesomeIcon 
                        icon={experience.icon} 
                        className="text-primary-500 text-lg opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Icon - Centered */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                               w-16 h-16 bg-primary-500 rounded-full items-center justify-center 
                               shadow-lg border-4 border-dark-700 z-10">
                  <FontAwesomeIcon 
                    icon={experience.icon} 
                    className="text-dark-700 text-xl"
                  />
                </div>

                {/* Mobile Timeline Icon */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <FontAwesomeIcon 
                      icon={experience.icon} 
                      className="text-dark-700 text-lg"
                    />
                  </div>
                  <div className="flex-1 h-0.5 bg-primary-500/30"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/5"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-dark-600 to-dark-700 p-8 rounded-xl border border-primary-500/20">
            <h3 className="text-xl font-semibold text-primary-500 mb-4">
              Key Skills Developed
            </h3>
            <ul className="space-y-2 text-dark-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Machine Learning & Data Science
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Python Programming & Libraries
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Data Analysis & Visualization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                Problem Solving & Research
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-dark-600 to-dark-700 p-8 rounded-xl border border-primary-500/20">
            <h3 className="text-xl font-semibold text-primary-500 mb-4">
              Looking Forward
            </h3>
            <p className="text-dark-300 leading-relaxed mb-4">
              I'm actively seeking opportunities to apply my skills in machine learning, 
              web development, and data science to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Full-Stack Development", "AI/ML Engineering", "Data Science"].map((role, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm 
                           border border-primary-500/30"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
