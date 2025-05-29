import React from 'react'
import { motion } from 'motion/react'

const TutorsPage = () => {
  const tutors = [
    {
      id: 1,
      name: "Suchi Patel",
      role: "Founder & Lead Mathematics Tutor",
      subjects: ["Mathematical Methods", "Specialist Mathematics", "General Mathematics"],
      qualifications: [
        "Bachelor of Engineering (Honours)",
        "VCE Mathematics Expert",
        "5+ Years Teaching Experience"
      ],
      experience: "Suchi has helped over 200 students achieve their ATAR goals, with many reaching scores above 95. Her engineering background brings real-world applications to mathematical concepts.",
      specialties: ["ATAR Preparation", "Exam Strategies", "Problem Solving"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c108?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      role: "Senior Science Tutor",
      subjects: ["Chemistry", "Physics", "Biology"],
      qualifications: [
        "PhD in Chemical Engineering",
        "Licensed Secondary Teacher",
        "7+ Years Teaching Experience"
      ],
      experience: "Dr. Chen specializes in making complex scientific concepts accessible and engaging. Her students consistently achieve excellent results in VCE sciences.",
      specialties: ["Laboratory Skills", "Scientific Writing", "University Preparation"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-green-600"
    },
    {
      id: 3,
      name: "James Mitchell",
      role: "English & Literature Specialist",
      subjects: ["English", "Literature", "English Language"],
      qualifications: [
        "Master of Arts in English Literature",
        "Registered Teacher (VIT)",
        "4+ Years Teaching Experience"
      ],
      experience: "James brings creativity and analytical depth to English studies, helping students develop critical thinking and exceptional writing skills.",
      specialties: ["Creative Writing", "Text Analysis", "Essay Structure"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-purple-600"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "Mathematics & Statistics Tutor",
      subjects: ["Further Mathematics", "Mathematical Methods", "Statistics"],
      qualifications: [
        "Bachelor of Mathematics",
        "Data Science Certification",
        "3+ Years Teaching Experience"
      ],
      experience: "Maria excels at breaking down complex mathematical concepts into manageable steps, ensuring every student builds confidence and competence.",
      specialties: ["Data Analysis", "Statistical Modeling", "Applied Mathematics"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-indigo-600"
    },
    {
      id: 5,
      name: "Dr. Michael Thompson",
      role: "Physics & Mathematics Specialist",
      subjects: ["Physics", "Specialist Mathematics", "Mathematical Methods"],
      qualifications: [
        "PhD in Theoretical Physics",
        "Former University Lecturer",
        "8+ Years Teaching Experience"
      ],
      experience: "Dr. Thompson combines theoretical knowledge with practical applications, helping students understand complex physics concepts through real-world examples and mathematical modeling.",
      specialties: ["University Preparation", "Research Methods", "Advanced Problem Solving"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-teal-600"
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Humanities & Social Sciences Tutor",
      subjects: ["History", "Psychology", "English"],
      qualifications: [
        "Master of Arts in History",
        "Psychology Teaching Qualification",
        "6+ Years Teaching Experience"
      ],
      experience: "Emma specializes in helping students develop critical thinking and analytical writing skills across humanities subjects, with a focus on exam technique and essay structure.",
      specialties: ["Essay Writing", "Critical Analysis", "Study Techniques"],
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      color: "bg-rose-600"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-20 mt-[80px]" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Tutors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of expert educators who bring years of experience and passion for helping students achieve their academic goals
          </p>
        </header>

        {/* Tutors Grid */}
        <section aria-label="Our expert tutors available for tutoring">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <motion.article
                key={tutor.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image Section */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={tutor.image} 
                    alt={`${tutor.name} - ${tutor.role}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tutor.name)}&background=random&color=fff&size=400`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{tutor.name}</h3>
                    <p className="text-gray-200 text-sm font-medium">{tutor.role}</p>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <header className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-gray-900">{tutor.name}</h2>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Expert
                    </span>
                  </header>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Subjects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.slice(0, 2).map((subject, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                      {tutor.subjects.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{tutor.subjects.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {tutor.experience.length > 120 ? tutor.experience.substring(0, 120) + '...' : tutor.experience}
                  </p>
                  
                  <a
                    href='https://pdu2aawxpdr.typeform.com/to/o6rQPFyz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary/70 transition-colors duration-300 text-center block"
                    aria-label={`Learn more about ${tutor.name} and book a session`}
                  >
                    Learn More
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16" aria-labelledby="cta-heading">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss your academic goals and create a personalized study plan
            </p>
            <a
              href='https://pdu2aawxpdr.typeform.com/to/o6rQPFyz'
              target='_blank'
              rel='noopener noreferrer'
              className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/70 transition-colors duration-300 cursor-pointer"
              aria-label="Get started with Taiyo Tuition - opens enrollment form in new window"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TutorsPage 