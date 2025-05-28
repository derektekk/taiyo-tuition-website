import { useState } from 'react'

const SubjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      category: 'stem',
      description: 'Advanced mathematics including calculus, algebra, and statistics',
      image: '/api/placeholder/300/200',
      atar: '85+'
    },
    {
      id: 2,
      name: 'Physics',
      category: 'stem',
      description: 'Comprehensive physics covering mechanics, thermodynamics, and quantum physics',
      image: '/api/placeholder/300/200',
      atar: '80+'
    },
    {
      id: 3,
      name: 'Chemistry',
      category: 'stem',
      description: 'Organic, inorganic, and physical chemistry fundamentals',
      image: '/api/placeholder/300/200',
      atar: '75+'
    },
    {
      id: 4,
      name: 'English',
      category: 'humanities',
      description: 'Advanced English literature, writing, and communication skills',
      image: '/api/placeholder/300/200',
      atar: '85+'
    },
    {
      id: 5,
      name: 'Biology',
      category: 'stem',
      description: 'Human biology, genetics, and molecular biology',
      image: '/api/placeholder/300/200',
      atar: '80+'
    },
    {
      id: 6,
      name: 'Modern History',
      category: 'humanities',
      description: 'Contemporary world history and historical analysis',
      image: '/api/placeholder/300/200',
      atar: '75+'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Subjects' },
    { id: 'stem', name: 'STEM' },
    { id: 'humanities', name: 'Humanities' }
  ]

  const filteredSubjects = selectedCategory === 'all' 
    ? subjects 
    : subjects.filter(subject => subject.category === selectedCategory)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 mt-[80px]" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Subjects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of subjects designed to help you achieve your ATAR goals
          </p>
        </header>

        {/* Category Filter */}
        <nav className="flex justify-center mb-12" aria-label="Subject category filter">
          <div className="bg-white rounded-full p-2 shadow-lg" role="tablist">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={`Filter by ${category.name}`}
                aria-pressed={selectedCategory === category.id}
                role="tab"
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Subjects Grid */}
        <section aria-label={`${selectedCategory === 'all' ? 'All' : selectedCategory} subjects available for tutoring`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject) => (
              <article
                key={subject.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600" role="img" aria-label={`${subject.name} subject illustration`}></div>
                <div className="p-6">
                  <header className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-gray-900">{subject.name}</h2>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      ATAR {subject.atar}
                    </span>
                  </header>
                  <p className="text-gray-600 mb-6">{subject.description}</p>
                  <a
                    href='https://pdu2aawxpdr.typeform.com/to/o6rQPFyz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-center block"
                    aria-label={`Learn more about ${subject.name} tutoring and enroll`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
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
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
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

export default SubjectsPage
