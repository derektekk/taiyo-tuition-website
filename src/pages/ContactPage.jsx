const ContactPage = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'contact@taiyotuition.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+61 123 456 789',
      description: 'Mon to Fri from 8am to 6pm'
    },
    {
      icon: '📍',
      title: 'Address',
      details: '9-11 Hamilton Place, Mount Waverly VIC 3149',
      description: 'Visit our learning center'
    },
    {
      icon: '⏰',
      title: 'Hours',
      details: 'Mon - Fri: 8am - 6pm',
      description: 'Weekend sessions available'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-20 mt-[80px]" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your academic journey? Get in touch with our expert tutors today
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Get in Touch + Call to Action */}
          <div className="space-y-12">
            {/* Contact Information */}
            <section className="bg-white rounded-2xl shadow-lg p-8" aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
              <address className="space-y-6 not-italic">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl" role="img" aria-label={info.title}>{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{info.title}</h3>
                      {info.title === 'Email' ? (
                        <a href={`mailto:${info.details}`} className="text-blue-600 font-medium text-lg hover:underline">
                          {info.details}
                        </a>
                      ) : info.title === 'Phone' ? (
                        <a href={`tel:${info.details}`} className="text-blue-600 font-medium text-lg hover:underline">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-blue-600 font-medium text-lg">{info.details}</p>
                      )}
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </address>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-50 rounded-2xl shadow-lg p-8" aria-labelledby="cta-heading">
              <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Contact us today to discuss your academic goals and book your free trial lesson
              </p>
              <nav className="flex flex-col gap-4" aria-label="Contact actions">
                <a
                  href="tel:+61123456789"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                  aria-label="Call us now at +61 123 456 789"
                >
                  Call Now
                </a>
                <a
                  href="mailto:contact@taiyotuition.com"
                  className="bg-gray-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-700 transition-colors duration-300 text-center"
                  aria-label="Send email to contact@taiyotuition.com"
                >
                  Send Email
                </a>
                <a
                  href='https://pdu2aawxpdr.typeform.com/to/o6rQPFyz'
                  target='_blank'
                  rel='noopener noreferrer'
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-700 transition-colors duration-300 text-center"
                  aria-label="Enroll now - opens in new window"
                >
                  Enroll Now
                </a>
              </nav>
            </section>
          </div>

          {/* Right Column: FAQ Section */}
          <aside>
            <section className="bg-white rounded-2xl shadow-lg p-8 h-fit" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Questions?</h2>
              <dl className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <dt className="font-semibold text-gray-900 mb-3 text-lg">How do I book a trial lesson?</dt>
                  <dd className="text-gray-600">Simply contact us directly via phone or email. We'll arrange a free trial lesson at your convenience and discuss your academic goals.</dd>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <dt className="font-semibold text-gray-900 mb-3 text-lg">What subjects do you offer?</dt>
                  <dd className="text-gray-600">We offer comprehensive tutoring in Mathematics, Physics, Chemistry, English, Biology, and History for HSC students. Visit our subjects page to learn more.</dd>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <dt className="font-semibold text-gray-900 mb-3 text-lg">Do you offer online sessions?</dt>
                  <dd className="text-gray-600">Yes! We offer both in-person and online tutoring sessions to accommodate your preferences and schedule.</dd>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <dt className="font-semibold text-gray-900 mb-3 text-lg">What is your guarantee policy?</dt>
                  <dd className="text-gray-600">Taiyo Tuition guarantees a 45+ Study Score, or your money back. With a cap of 10 students per tutorial, we provide personalized attention for optimal results.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 mb-3 text-lg">How much do your classes cost?</dt>
                  <dd className="text-gray-600">Our pricing varies depending on the subject and class format. Contact us directly for detailed pricing information and package options.</dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
