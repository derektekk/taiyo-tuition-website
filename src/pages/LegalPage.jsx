const LegalPage = () => {
  const sections = [
    {
      title: "Terms of Service",
      content: [
        "By using Taiyo Tuition's services, you agree to be bound by these terms and conditions.",
        "Our tutoring services are provided on an 'as is' basis, and we make no warranties regarding specific academic outcomes beyond our guarantee policy.",
        "Payment for services must be made according to the agreed schedule. Late payments may result in suspension of services.",
        "Students are expected to attend scheduled sessions punctually and prepared with necessary materials.",
        "Cancellations must be made at least 24 hours in advance to avoid charges."
      ]
    },
    {
      title: "Academic Guarantee",
      content: [
        "Taiyo Tuition guarantees a 45+ Study Score or your money back, subject to the following conditions:",
        "Students must attend at least 90% of scheduled tutoring sessions.",
        "Students must complete all assigned homework and practice materials.",
        "Students must sit for all practice exams and assessments as scheduled.",
        "The guarantee applies only to students who have been with us for a minimum of one full term.",
        "Refund claims must be submitted within 30 days of receiving official ATAR results."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Taiyo Tuition's liability is limited to the fees paid for our services during the current term.",
        "We are not responsible for outcomes that result from factors beyond our control, including but not limited to student attendance, effort, or external circumstances.",
        "We do not guarantee university admission or specific ATAR scores beyond our stated guarantee policy.",
        "Any claims against Taiyo Tuition must be made in writing within 30 days of the alleged incident."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All teaching materials, worksheets, and resources provided by Taiyo Tuition remain our intellectual property.",
        "Students may use materials for personal study purposes only and may not distribute or reproduce them.",
        "Recording of tutoring sessions is prohibited without prior written consent from all parties.",
        "Any original work created by students during tutoring sessions remains their intellectual property."
      ]
    },
    {
      title: "Code of Conduct",
      content: [
        "All students and staff are expected to maintain respectful and professional behavior during sessions.",
        "Discriminatory language, harassment, or inappropriate behavior will result in immediate termination of services.",
        "Students must respect the learning environment and not disrupt other students' education.",
        "Any concerns regarding conduct should be reported immediately to management."
      ]
    },
    {
      title: "Termination of Services",
      content: [
        "Either party may terminate the tutoring agreement with 14 days written notice.",
        "Taiyo Tuition reserves the right to terminate services immediately for breach of terms or inappropriate conduct.",
        "Upon termination, any unused fees will be refunded on a pro-rata basis within 30 days.",
        "Students are responsible for returning any materials provided by Taiyo Tuition upon termination."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-[80px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Legal Terms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important legal information, terms of service, and conditions for using Taiyo Tuition services
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 2024
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Taiyo Tuition. These terms and conditions outline the rules and regulations for the use of 
            Taiyo Tuition's services and website. By accessing and using our services, you accept these terms and 
            conditions in full and without reservation.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            If you disagree with these terms and conditions or any part of these terms and conditions, you must not 
            use our services. These terms apply to all users of our tutoring services, including students, parents, 
            and guardians.
          </p>
        </div>

        {/* Legal Sections */}
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

        {/* Additional Legal Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of New South Wales, 
            Australia. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction 
            of the courts of New South Wales.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If any provision of these terms is found to be invalid under any applicable law, such provisions shall be 
            deleted without affecting the remaining provisions herein.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Taiyo Tuition reserves the right to revise these terms and conditions at any time. By using our services, 
            you are agreeing to be bound by the current version of these terms and conditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We will notify users of any material changes to these terms via email or through prominent notice on our 
            website at least 30 days prior to the changes taking effect.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before initiating any legal proceedings, both parties agree to attempt to resolve disputes through good faith 
            negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with 
            the rules of the Australian Centre for International Commercial Arbitration (ACICA).
          </p>
          <p className="text-gray-600 leading-relaxed">
            This arbitration clause does not prevent either party from seeking interim relief in court where necessary 
            to prevent irreparable harm.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Contact</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions about these legal terms or need clarification on any provisions, please contact us:
          </p>
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> legal@taiyotuition.com
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> +61 123 456 789
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Address:</span> 9-11 Hamilton Place, Mount Waverly VIC 3149
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mt-6">
            We aim to respond to all legal inquiries within 48 hours during business days.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalPage 