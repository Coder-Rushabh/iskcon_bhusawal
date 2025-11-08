import React from 'react';
import img1 from '../assets/darshan/1.jpeg';
import img2 from '../assets/darshan/2.jpeg';
import img3 from '../assets/darshan/3.jpeg';
import img4 from '../assets/darshan/4.jpeg';
import img5 from '../assets/darshan/5.jpeg';
import img6 from '../assets/darshan/6.jpeg';
import img7 from '../assets/darshan/7.jpeg';
import img8 from '../assets/darshan/8.jpeg';
import img9 from '../assets/darshan/9.jpeg';
import gaur from '../assets/gaur.jpg';

const programs = [
  {
    day: 'Tuesday',
    title: 'Bhagavad Gita Class',
    description:
      'A deep discussion on Bhagavad Gita’s teachings, followed by Q&A, kirtan, and mahaprasad.',
    time: '7:00 PM - 9:30 PM',
    image: gaur,
  },
  {
    day: 'Friday',
    title: 'Youth Boys Meetup',
    description:
      'A special interactive session for students and young professionals focused on spirituality and self-growth.',
    time: '7:30 PM - 9:00 PM',
    image: gaur,
  },
  {
    day: 'Sunday',
    title: 'Bhagavatam Class & Sunday Feast',
    description:
      'An insightful discourse on Srimad Bhagavatam, followed by kirtan and delicious prasadam.',
    time: '8:00 AM - 10:00 AM',
    image: gaur,
  },
  {
    day: 'Sunday',
    title: 'Gopal Fun School',
    description:
      'Interactive spiritual education for children through engaging stories, songs, and fun activities.',
    time: '10:00 AM - 11:00 AM',
    image: gaur,
  },
  {
    day: 'Friday',
    title: 'Chetna Program',
    description:
      'A spiritual session designed exclusively for girls, focusing on self-improvement and devotion.',
    time: '4:00 PM - 6:30 PM',
    image: gaur,
  },
];

const DarshanGallery = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Darshan Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={img} alt={`Darshan ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl">View Image</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WeeklyPrograms = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Weekly Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {program.day} - {program.title}
              </h3>
              <p className="text-gray-600 text-lg">{program.description}</p>
              <p className="text-gray-700 font-semibold mt-3">Time: {program.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App = () => (
  <div>
    {/* <DarshanGallery /> */}
    <WeeklyPrograms />
  </div>
);

export default App;
