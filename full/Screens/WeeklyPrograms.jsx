import React from "react";

const programs = [
  {
    day: "Tuesday",
    title: "Bhagavad Gita Class",
    description:
      "A deep discussion on Bhagavad Gita’s teachings, followed by Q&A, kirtan, and mahaprasad.",
    time: "7:00 PM - 9:30 PM",
    image: "../assets/gaur.jpg",
  },
  {
    day: "Friday",
    title: "Youth Boys Meetup",
    description:
      "A special interactive session for students and young professionals focused on spirituality and self-growth.",
    time: "7:30 PM - 9:00 PM",
    image: "../assets/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Bhagavatam Class & Sunday Feast",
    description:
      "An insightful discourse on Srimad Bhagavatam, followed by kirtan and delicious prasadam.",
    time: "8:00 AM - 10:00 AM",
    image: "../assets/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Gopal Fun School",
    description:
      "Interactive spiritual education for children through engaging stories, songs, and fun activities.",
    time: "10:00 AM - 11:00 AM",
    image: "../assets/gaur.jpg",
  },
  {
    day: "Sunday",
    title: "Chetna Program",
    description:
      "A spiritual session designed exclusively for girls, focusing on self-improvement and devotion.",
    time: "5:00 PM - 6:30 PM",
    image: "../assets/gaur.jpg",
  },
];

const WeeklyPrograms = () => {
  return (
    <section className="w-full min-h-screen bg-[#f3d4a5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">
          Weekly Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {program.day} - {program.title}
                </h3>
                <p className="text-gray-600 text-lg">{program.description}</p>
                <p className="text-gray-700 font-semibold mt-3">
                  Time: {program.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPrograms;
