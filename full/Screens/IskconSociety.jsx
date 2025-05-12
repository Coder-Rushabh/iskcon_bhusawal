import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/gaur.jpg"
import wwt from "../assets/wwt.jpg"
import ffl from "../assets/ffl.jpg"


const IskconSociety = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-[url({img1})] bg-cover bg-center flex flex-col items-center justify-center text-center px-6">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">What is ISKCON?</h1>
          <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
            The International Society for Krishna Consciousness (ISKCON) is a global movement dedicated to spreading the teachings of Lord Krishna and promoting a spiritual way of life.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">A Global Spiritual Movement</h2>
        <p className="text-lg text-gray-600 mt-4">
          ISKCON was founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. The movement is based on the teachings of the ancient Vedic scriptures, particularly the Bhagavad Gita and Srimad Bhagavatam.
        </p>
      </section>

      {/* Three-Column Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 py-12">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={img1} className="rounded-lg" alt="Bhakti Yoga" />
          <h3 className="text-xl font-semibold mt-4">Bhakti Yoga</h3>
          <p className="text-gray-600 text-center mt-2">
            Devotional service to Krishna through chanting, prayer, and meditation.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={wwt} className="rounded-lg" alt="Temples Worldwide" />
          <h3 className="text-xl font-semibold mt-4">Temples Worldwide</h3>
          <p className="text-gray-600 text-center mt-2">
            ISKCON has over 600 temples, spreading Krishna Consciousness globally.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={ffl} className="rounded-lg" alt="Food Distribution" />
          <h3 className="text-xl font-semibold mt-4">Food for Life</h3>
          <p className="text-gray-600 text-center mt-2">
            ISKCON’s initiative to serve free vegetarian meals to those in need.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#d1a664] py-12 text-center">
        <h2 className="text-3xl font-bold text-white">Join the ISKCON Movement</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
          Experience spiritual bliss through Krishna Consciousness. Join us in devotion, service, and community upliftment.
        </p>
        <Link to="/contact" className="mt-6 inline-block bg-white text-[#d1a664] font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200">
          Get Involved
        </Link>
      </section>
    </div>
  );
};

export default IskconSociety;
