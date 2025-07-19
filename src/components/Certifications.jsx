import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faDatabase, faBrain, faCode } from '@fortawesome/free-solid-svg-icons'
import { faJava, faHtml5 } from '@fortawesome/free-brands-svg-icons'

const Certifications = () => {
  const certifications = [
    {
      title: "HackronyX Hackathon",
      subtitle: "Top 10 Finalist",
      organization: "St. Vincent Pallotti College of Engineering & Technology, Nagpur",
      icon: faTrophy
    },
    {
      title: "AICTE OIB-SIP Internship",
      subtitle: "Data Analytics",
      organization: "Oasis Infobytes",
      date: "Oct 15 - Nov 20, 2024",
      icon: faDatabase
    },
    {
      title: "Core Concepts of Java",
      subtitle: "Programming Fundamentals",
      organization: "DevTown",
      date: "October 12, 2024",
      icon: faJava
    },
    {
      title: "Core Concepts of C++",
      subtitle: "Programming Fundamentals",
      organization: "DevTown",
      date: "August 29, 2024",
      icon: faCode
    },
    {
      title: "Machine Learning & Data Science",
      subtitle: "Real Life Projects [2023]",
      organization: "Udemy",
      date: "November 29, 2023 • 2.5 hours",
      icon: faBrain
    },
    {
      title: "HTML, CSS, and JavaScript",
      subtitle: "Web Development",
      organization: "Johns Hopkins University (Coursera)",
      date: "November 2, 2024",
      icon: faHtml5
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-dark-600">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wide">
            ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            CERTIFICATIONS & AWARDS
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card bg-dark-700 p-8 rounded-lg text-center shadow-lg 
                         transform transition-all duration-300 hover:scale-105"
            >
              <div className="cert-icon w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center 
                          mx-auto mb-6 shadow-md">
                <FontAwesomeIcon icon={cert.icon} className="text-dark-700 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-primary-500">
                {cert.title}
              </h3>
              <p className="text-sm text-accent-500 font-semibold">
                {cert.subtitle}
              </p>
              <span className="text-dark-300 text-sm block mb-2">
                {cert.organization}
              </span>
              {cert.date && (
                <small className="text-dark-500 text-xs">
                  {cert.date}
                </small>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

