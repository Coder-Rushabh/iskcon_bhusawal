import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f0] to-[#ffe8d6] font-sans text-gray-800 leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white py-10 text-center rounded-2xl shadow-lg shadow-orange-300/30 mb-10">
          <div className="text-4xl mb-4">🕉️</div>
          <h1 className="text-4xl font-bold mb-2 text-shadow-md">Privacy Policy</h1>
          <p className="text-lg opacity-90">Sri Sri Radha Murlidhar Temple - ISKCON Bhusawal</p>
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl mb-8">
          {/* Section 1 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Our Commitment to Your Privacy
            </h2>
            <p className="mb-4 text-justify">
              At ISKCON Bhusawal (Sri Sri Radha Murlidhar Temple), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, protect, and share information about you when you visit our website, attend our programs, or interact with our services.
            </p>
            
            <div className="bg-gradient-to-r from-[#fff5f0] to-[#ffe8d6] p-5 border-l-4 border-[#ff6b35] rounded-lg my-5">
              <p className="font-semibold">
                Our Mission: We collect and use your information solely to serve Krishna, spread Krishna consciousness, and provide you with spiritual services and community connection in accordance with our religious mission.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Information We Collect
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Personal Information You Provide</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2"><span className="font-semibold">Contact Details:</span> Name, email address, phone number, postal address</li>
              <li className="mb-2"><span className="font-semibold">Spiritual Information:</span> Spiritual name (if applicable), initiation status, spiritual interests</li>
              <li className="mb-2"><span className="font-semibold">Event Registration:</span> Program attendance, workshop enrollment, festival participation</li>
              <li className="mb-2"><span className="font-semibold">Donation Information:</span> Contribution details, payment information (processed securely)</li>
              <li className="mb-2"><span className="font-semibold">Communication Preferences:</span> Newsletter subscriptions, event notifications</li>
              <li className="mb-2"><span className="font-semibold">Seva (Service) Information:</span> Volunteer interests, skills, availability</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc ml-8">
              <li className="mb-2"><span className="font-semibold">Website Usage:</span> Pages visited, time spent, browser type, device information</li>
              <li className="mb-2"><span className="font-semibold">Cookies:</span> Small files stored on your device to improve website functionality</li>
              <li className="mb-2"><span className="font-semibold">IP Address:</span> Your internet connection identifier for security and analytics</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              How We Use Your Information
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Spiritual Services</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Providing spiritual guidance and counseling</li>
              <li className="mb-2">Organizing and managing temple programs and festivals</li>
              <li className="mb-2">Coordinating devotee services and community activities</li>
              <li className="mb-2">Maintaining spiritual community records</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Communication</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Sending newsletters with spiritual content and temple updates</li>
              <li className="mb-2">Notifying you about upcoming events, festivals, and programs</li>
              <li className="mb-2">Responding to your inquiries and support requests</li>
              <li className="mb-2">Sharing inspirational content and teachings</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Administrative Purposes</h3>
            <ul className="list-disc ml-8">
              <li className="mb-2">Processing donations and maintaining financial records</li>
              <li className="mb-2">Managing event registrations and attendance</li>
              <li className="mb-2">Coordinating volunteer activities and seva opportunities</li>
              <li className="mb-2">Improving our website and digital services</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Information Sharing and Disclosure
            </h2>
            
            <p className="mb-4 text-justify">
              We respect the confidentiality of your personal information and follow these principles:
            </p>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Within ISKCON Network</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">We may share information with other ISKCON centers for coordinating spiritual services</li>
              <li className="mb-2">Information may be shared with ISKCON leadership for pastoral care and spiritual guidance</li>
              <li className="mb-2">Event coordination with other temples and spiritual organizations</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Service Providers</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Payment processors for secure donation handling</li>
              <li className="mb-2">Email service providers for newsletters and communications</li>
              <li className="mb-2">Website hosting and technical support services</li>
              <li className="mb-2">Event management platforms for program registration</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Legal Requirements</h3>
            <p className="mb-4 text-justify">
              We may disclose information when required by law, court order, or to protect the rights and safety of our temple community.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Data Security and Protection
            </h2>
            
            <p className="mb-4 text-justify">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2"><span className="font-semibold">Secure Transmission:</span> SSL encryption for online communications and donations</li>
              <li className="mb-2"><span className="font-semibold">Access Controls:</span> Limited access to personal information on a need-to-know basis</li>
              <li className="mb-2"><span className="font-semibold">Regular Updates:</span> Keeping our systems and security measures current</li>
              <li className="mb-2"><span className="font-semibold">Staff Training:</span> Ensuring our team understands privacy responsibilities</li>
              <li className="mb-2"><span className="font-semibold">Physical Security:</span> Protecting paper records and computer systems at our temple</li>
            </ul>

            <div className="bg-gradient-to-r from-[#fff5f0] to-[#ffe8d6] p-5 border-l-4 border-[#ff6b35] rounded-lg my-5">
              <p className="font-semibold">
                Important: While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to be cautious when sharing sensitive information online.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Your Privacy Rights and Choices
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Access and Control</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2"><span className="font-semibold">Review Information:</span> Request access to the personal information we hold about you</li>
              <li className="mb-2"><span className="font-semibold">Update Details:</span> Correct or update your contact and preference information</li>
              <li className="mb-2"><span className="font-semibold">Unsubscribe:</span> Opt out of newsletters and promotional communications</li>
              <li className="mb-2"><span className="font-semibold">Delete Account:</span> Request removal of your information from our systems</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Communication Preferences</h3>
            <ul className="list-disc ml-8">
              <li className="mb-2">Choose which types of communications you receive</li>
              <li className="mb-2">Set frequency preferences for newsletters and updates</li>
              <li className="mb-2">Opt out of non-essential communications while maintaining service access</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Cookies and Website Analytics
            </h2>
            
            <p className="mb-4 text-justify">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Remember your preferences and login status</li>
              <li className="mb-2">Analyze website traffic and user behavior</li>
              <li className="mb-2">Improve website functionality and user experience</li>
              <li className="mb-2">Provide personalized content recommendations</li>
            </ul>

            <p className="mb-4 text-justify">
              You can control cookie settings through your browser preferences. Note that disabling cookies may limit some website functionality.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Children's Privacy
            </h2>
            
            <p className="mb-4 text-justify">
              We are committed to protecting children's privacy. Our services are generally directed to adults, but we do collect information about children in certain circumstances:
            </p>
            
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Children's program registration (with parental consent)</li>
              <li className="mb-2">Family event participation</li>
              <li className="mb-2">Educational activities and spiritual training</li>
            </ul>

            <p className="mb-4 text-justify">
              We require parental consent before collecting personal information from children under 13 years old and use such information only for the specified spiritual and educational purposes.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              International Transfers
            </h2>
            
            <p className="mb-4 text-justify">
              As part of the global ISKCON movement, your information may be transferred to and processed in other countries where ISKCON centers operate. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Changes to This Privacy Policy
            </h2>
            
            <p className="mb-4 text-justify">
              We may update this Privacy Policy periodically to reflect changes in our practices or for legal and regulatory reasons. We will notify you of significant changes by:
            </p>
            
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Posting the updated policy on our website</li>
              <li className="mb-2">Sending email notifications to registered users</li>
              <li className="mb-2">Announcing changes during temple programs</li>
            </ul>

            <p className="mb-4 text-justify">
              Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-[#f7931e] to-[#ff6b35] text-white p-6 md:p-8 rounded-xl mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">If you have questions, concerns, or requests regarding your privacy or this policy, please contact us:</p>
            <p className="mb-2"><strong>Sri Sri Radha Murlidhar Temple - ISKCON Bhusawal</strong></p>
            <p className="mb-4">Near Roop Darshan Photo Studio, Ram Mandir Ward<br />
            Bhusawal - 425201, Maharashtra, India</p>
            <p className="mb-2"><strong>Phone:</strong> +91 77670 43798, +91 90112 19587</p>
            <p className="mb-2"><strong>Email:</strong> iskcon.bhusawal@gmail.com</p>
            <p><strong>Website:</strong> https://iskcon-bhusawal.netlify.app/</p>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-600 italic mt-8 py-5 bg-gray-100 rounded-lg">
            <p><strong>Last Updated:</strong> September 18, 2025</p>
            <p className="mt-2">This policy is effective immediately and supersedes all previous versions.</p>
          </div>

          {/* OM Symbol */}
          <div className="text-4xl text-[#ff6b35] text-center my-6">
            <p>Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br />
            Hare Rama Hare Rama Rama Rama Hare Hare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;