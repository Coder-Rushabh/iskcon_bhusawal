import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaRegClock,
  FaRegCalendarCheck,
  FaWhatsapp,
  FaQuoteLeft,
} from "react-icons/fa";
import gaur from "../assets/gaur.jpg";

// Contact Details
const contactDetails = {
  temple: "ISKCON Bhusawal",
  phone: "+91-77670-43798",
  email: "infoiskcon.bhusawal@gmail.com",
  whatsapp: "+919011219587",
  address: "Near Roop Darshan Photo Studio, Ram Mandir Ward, Bhusawal, Maharashtra 425201"
};

// Speaker Details
const speaker = {
  name: "HG Jagannath Bandhu Prabhuji",
  bio: "HG Jagannath Bandhu Prabhuji is a dedicated spiritual mentor and visionary leader at ISKCON Bhusawal. With years of experience in guiding youth, he specializes in presenting ancient Vedic wisdom in a contemporary and practical manner. He is deeply committed to helping young men develop strong character, find inner peace, and lead a life rooted in Krishna consciousness.",
  image: gaur // Using placeholder
};

// Activities
const activities = [
  {
    title: "Spiritual Lectures",
    description: "Deep insights into the Bhagavad-gita and Srimad Bhagavatam, offering practical solutions to modern life challenges through Vedic wisdom.",
    icon: <FaUserFriends className="text-3xl" />
  },
  {
    title: "Kirtan",
    description: "Soul-stirring devotional chanting that connects the heart with the divine, bringing peace and spiritual ecstasy.",
    icon: <FaQuoteLeft className="text-3xl" />
  },
  {
    title: "Prasadam",
    description: "Wholesome and sanctified vegetarian food (Krishna Prasadam) distributed to all participants, nourishing both body and soul.",
    icon: <FaRegCalendarCheck className="text-3xl" />
  }
];

// Placeholder Images for Gallery
const galleryImages = [
  { url: gaur, caption: "Spiritual Discourse" },
  { url: gaur, caption: "Ecstatic Kirtan" },
  { url: gaur, caption: "Prasadam Distribution" },
  { url: gaur, caption: "Youth Mentorship" }
];

function RegisterModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    notes: "",
  });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your registration for IYS Boys Meetup has been received.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transition-all transform duration-300">
        <div className="bg-amber-600 px-6 py-4 flex items-center justify-between text-white">
          <h3 className="text-xl font-bold">IYS Registration</h3>
          <button onClick={onClose} className="text-2xl hover:text-amber-200 transition">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition"
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition"
              onChange={(e) => setForm({...form, age: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition"
              onChange={(e) => setForm({...form, phone: e.target.value})}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition"
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
          <textarea
            placeholder="Additional Notes"
            rows="3"
            className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition"
            onChange={(e) => setForm({...form, notes: e.target.value})}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all"
          >
            Confirm Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default function IYSDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50/30 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={gaur} 
            alt="Hero Background" 
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in slide-in-from-bottom duration-1000">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Friday Youth Boys Meetup – <span className="text-amber-500">IYS Bhusawal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Empowering the next generation with Vedic wisdom, discipline, and spiritual strength.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            Join the Program
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Description Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Ignite Your <span className="text-amber-600">Spiritual Journey</span>
            </h2>
            <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              ISKCON Youth Services (IYS) Bhusawal is a dedicated platform for unmarried male youth to explore the profound depth of Krishna consciousness. Our program is designed to provide a holistic approach to self-development, blending ancient spiritual practices with practical life skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through engaging sessions focused on spirituality, discipline, and character building, we help young men navigate the complexities of modern life with a calm mind and a purposeful heart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-amber-100">
                <FaCalendarAlt className="text-amber-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Frequency</p>
                  <p className="font-bold">Every Friday</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-amber-100">
                <FaUserFriends className="text-amber-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Target Audience</p>
                  <p className="font-bold">Unmarried Male Youth</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={gaur} 
              alt="IYS Session" 
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-amber-50 hidden md:block">
              <p className="text-amber-600 font-bold text-2xl">IYS</p>
              <p className="text-gray-600 font-medium">Character • Devotion • Leadership</p>
            </div>
          </div>
        </section>

        {/* Program Details & Activities */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Program Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience a transformative blend of wisdom, music, and fellowship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 hover:border-amber-200 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Speaker Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[3rem] overflow-hidden shadow-2xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 text-white">
              <span className="inline-block px-4 py-1 bg-amber-500 rounded-full text-xs font-bold tracking-widest uppercase mb-6">Our Mentor</span>
              <h2 className="text-4xl font-serif font-bold mb-6">{speaker.name}</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 italic">
                "{speaker.bio}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 p-1">
                  <div className="w-full h-full bg-amber-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold">Spiritual Mentor</p>
                  <p className="text-blue-200 text-sm">ISKCON Bhusawal</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Glimpses of IYS</h2>
              <p className="text-gray-600">Moments of devotion, learning, and service.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md h-64">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-amber-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Connect with Us</h2>
                <p className="text-gray-600">Have questions about the program? Reach out to our team.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Address</p>
                    <p className="text-gray-600">{contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone & Email</p>
                    <p className="text-gray-600">{contactDetails.phone}</p>
                    <p className="text-gray-600">{contactDetails.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-lg transition-all transform hover:scale-105"
                >
                  <FaWhatsapp className="text-2xl" /> WhatsApp Us
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-lg transition-all transform hover:scale-105"
                >
                  <FaRegCalendarCheck className="text-2xl" /> Register Now
                </button>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-amber-800 mb-6">Program Schedule</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-amber-200 pb-3">
                    <span className="font-medium text-amber-900">Day</span>
                    <span className="font-bold text-amber-700">Every Friday</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-3">
                    <span className="font-medium text-amber-900">Time</span>
                    <span className="font-bold text-amber-700">7:30 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-3">
                    <span className="font-medium text-amber-900">Organizer</span>
                    <span className="font-bold text-amber-700">ISKCON Youth Services</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-amber-900">Venue</span>
                    <span className="font-bold text-amber-700">Temple Hall</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/50 rounded-xl border border-amber-200 italic text-amber-800 text-sm">
                  "The youth are the future of society. By providing them with spiritual values, we are building a better world."
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RegisterModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
