const PrivacyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information such as name, email address, phone number, and academic details when you register for our services.",
        "Usage data including how you interact with our website and educational platform.",
        "Academic progress data to help track your learning journey and provide personalized tutoring.",
        "Communication records for quality assurance and customer service purposes."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide personalized tutoring services and educational support.",
        "To communicate with you about your academic progress and upcoming sessions.",
        "To improve our services and develop new educational programs.",
        "To process payments and manage your account.",
        "To send you relevant educational content and updates (with your consent)."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted tutors to provide you with quality educational services.",
        "We may disclose information when required by law or to protect our rights and safety.",
        "Anonymous, aggregated data may be used for research and improvement purposes."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All data transmission is encrypted using secure protocols.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices to ensure data protection."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt-out of marketing communications at any time.",
        "You can request a copy of the personal information we hold about you.",
        "You can request that we restrict or stop processing your personal information."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance your browsing experience and analyze website usage.",
        "You can control cookie settings through your browser preferences.",
        "Some cookies are essential for the proper functioning of our services.",
        "Third-party cookies may be used for analytics and advertising purposes."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-[80px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 2024
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Taiyo Tuition ("we," "our," or "us") is committed to protecting your privacy and ensuring that your personal 
            information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, 
            store, and protect your information when you use our tutoring services and website.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to provide our services and fulfill 
            the purposes outlined in this Privacy Policy. We will retain and use your information to the extent 
            necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Academic records and progress data may be retained for educational continuity purposes, but will be 
            anonymized when no longer needed for active tutoring services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our services are primarily designed for high school students preparing for their ATAR. We take additional 
            care when handling information from users under 18 years of age, and we encourage parents and guardians 
            to be involved in their child's online activities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For students under 18, we require parental consent before collecting any personal information, and parents 
            have the right to review, modify, or delete their child's information at any time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting 
            your information.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> privacy@taiyotuition.com
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> +61 123 456 789
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Address:</span> 9-11 Hamilton Place, Mount Waverly VIC 3149
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mt-6">
            We aim to respond to all privacy-related inquiries within 48 hours during business days.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
