import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f0] to-[#ffe8d6] font-sans text-gray-800 leading-relaxed">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white py-10 text-center rounded-2xl shadow-lg shadow-orange-300/30 mb-10">
          <div className="text-4xl mb-4">🕉️</div>
          <h1 className="text-4xl font-bold mb-2 text-shadow-md">Terms and Conditions</h1>
          <p className="text-lg opacity-90">Sri Sri Radha Murlidhar Temple - ISKCON Bhusawal</p>
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl mb-8">
          {/* Introduction */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Introduction
            </h2>
            <p className="mb-4 text-justify">
              Welcome to ISKCON Bhusawal (Sri Sri Radha Murlidhar Temple). These Terms and Conditions govern your use of our website, services, programs, and participation in temple activities. By accessing our services, you agree to comply with these terms.
            </p>
            
            <div className="bg-gradient-to-r from-[#fff5f0] to-[#ffe8d6] p-5 border-l-4 border-[#ff6b35] rounded-lg my-5">
              <p className="font-semibold">
                Our Mission: These terms are designed to facilitate spiritual growth and community connection while maintaining the sanctity and purpose of our temple activities in service to Lord Krishna.
              </p>
            </div>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Acceptance of Terms
            </h2>
            
            <p className="mb-4 text-justify">
              By accessing or using any services provided by ISKCON Bhusawal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </div>

          {/* User Conduct */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              User Conduct
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Expected Behavior</h3>
            <p className="mb-4 text-justify">
              As a participant in our spiritual community, we expect you to:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Respect the sanctity of the temple and its ceremonies</li>
              <li className="mb-2">Follow dress code and behavior guidelines when visiting the temple</li>
              <li className="mb-2">Treat all devotees, visitors, and staff with respect and kindness</li>
              <li className="mb-2">Use temple resources responsibly and appropriately</li>
              <li className="mb-2">Follow instructions from temple authorities during programs and events</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Prohibited Activities</h3>
            <p className="mb-4 text-justify">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc ml-8">
              <li className="mb-2">Disrupting temple activities or programs</li>
              <li className="mb-2">Engaging in commercial activities without prior permission</li>
              <li className="mb-2">Distributing unauthorized literature or materials on temple premises</li>
              <li className="mb-2">Misusing temple property or facilities</li>
              <li className="mb-2">Any illegal activities or behaviors contrary to Vaisnava principles</li>
            </ul>
          </div>

          {/* Donations and Payments */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Donations and Payments
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Donation Policy</h3>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">All donations to ISKCON Bhusawal are voluntary and used for spiritual purposes</li>
              <li className="mb-2">Donations are generally non-refundable unless specified otherwise</li>
              <li className="mb-2">Receipts for donations will be provided as per applicable laws</li>
              <li className="mb-2">The temple maintains transparency in the use of donated funds</li>
            </ul>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Event Fees</h3>
            <ul className="list-disc ml-8">
              <li className="mb-2">Some programs may have participation fees to cover expenses</li>
              <li className="mb-2">Refund policies for event fees will be specified during registration</li>
              <li className="mb-2">Special consideration may be provided for those unable to pay</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Intellectual Property
            </h2>
            
            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">Content Ownership</h3>
            <p className="mb-4 text-justify">
              All content provided by ISKCON Bhusawal, including but not limited to:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Spiritual texts, translations, and commentaries</li>
              <li className="mb-2">Audio and video recordings of lectures and kirtans</li>
              <li className="mb-2">Website content and digital materials</li>
              <li className="mb-2">Artwork and publications</li>
            </ul>
            <p className="mb-4 text-justify">
              is protected by copyright and other intellectual property laws. You may use this content for personal spiritual purposes but may not reproduce, distribute, or use it commercially without explicit permission.
            </p>

            <h3 className="text-xl text-[#d45a00] font-semibold mt-5 mb-3">User-Generated Content</h3>
            <p className="mb-4 text-justify">
              By submitting content to ISKCON Bhusawal (testimonials, photos, etc.), you grant us a non-exclusive, royalty-free license to use, reproduce, and display that content for spiritual and promotional purposes.
            </p>
          </div>

          {/* Privacy */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Privacy
            </h2>
            
            <p className="mb-4 text-justify">
              Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. Please review our Privacy Policy to understand our practices.
            </p>
          </div>

          {/* Modifications to Services */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Modifications to Services
            </h2>
            
            <p className="mb-4 text-justify">
              ISKCON Bhusawal reserves the right to:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Modify, suspend, or discontinue any services or programs</li>
              <li className="mb-2">Change event schedules, venues, or formats</li>
              <li className="mb-2">Update these Terms and Conditions as needed</li>
            </ul>
            <p className="mb-4 text-justify">
              We will make reasonable efforts to notify participants of significant changes to services or terms.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Limitation of Liability
            </h2>
            
            <p className="mb-4 text-justify">
              ISKCON Bhusawal shall not be liable for:
            </p>
            <ul className="list-disc ml-8 mb-5">
              <li className="mb-2">Any indirect, incidental, or consequential damages</li>
              <li className="mb-2">Loss or damage to personal property on temple premises</li>
              <li className="mb-2">Personal injury except where caused by our negligence</li>
              <li className="mb-2">Actions or conduct of other visitors or participants</li>
            </ul>
            
            <div className="bg-gradient-to-r from-[#fff5f0] to-[#ffe8d6] p-5 border-l-4 border-[#ff6b35] rounded-lg my-5">
              <p className="font-semibold">
                Participation in temple activities is at your own risk. Please take reasonable precautions for your safety and the safety of your belongings.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Termination
            </h2>
            
            <p className="mb-4 text-justify">
              ISKCON Bhusawal reserves the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Governing Law
            </h2>
            
            <p className="mb-4 text-justify">
              These Terms and Conditions shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Bhusawal, Maharashtra.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-9">
            <h2 className="text-3xl text-[#ff6b35] font-semibold mb-5 pb-3 border-b-2 border-[#ffe8d6]">
              Changes to Terms
            </h2>
            
            <p className="mb-4 text-justify">
              We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-[#f7931e] to-[#ff6b35] text-white p-6 md:p-8 rounded-xl mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">If you have any questions about these Terms and Conditions, please contact us:</p>
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
            <p className="mt-2">These terms are effective immediately and supersede all previous versions.</p>
          </div>

          {/* Closing Mantra */}
          <div className="text-4xl text-[#ff6b35] text-center my-6">
            <p>Hare Krishna Hare Krishna Krishna Krishna Hare Hare<br />
            Hare Rama Hare Rama Rama Rama Hare Hare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;