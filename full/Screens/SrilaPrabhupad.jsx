import React from "react";
import srilaPrabhupada from "../assets/srila-prabhupada.png"
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.jpg'

const SrilaPrabhupada = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] bg-[url('https://hkmchennai.org/wp-content/uploads/2021/11/srila-prabhupada.png')] bg-cover bg-center flex flex-col items-center justify-center text-center px-6">
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Srila Prabhupada</h1>
                    <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto italic">
                        “If you simply chant Hare Krishna, your life will be sublime.”
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto py-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800">The Founder of ISKCON</h2>
                <p className="text-lg text-gray-600 mt-4">
                    His Divine Grace A.C. Bhaktivedanta Swami Prabhupada spread the teachings of Lord Krishna worldwide, establishing ISKCON and translating sacred scriptures like the **Bhagavad Gita As It Is**.
                </p>
            </section>

            {/* Timeline / Achievements */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">A Journey of Devotion</h2>

                <div className="relative border-l-4 border-[#d1a664] pl-8 space-y-8">

                    {/* 1896 - Birth */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🎂
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1896 - Birth</h3>
                            <p className="text-gray-600">Born as <strong>Abhay Charan De</strong> in Kolkata, India.</p>
                        </div>
                    </div>

                    {/* 1916 - Early Education */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            📖
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1916 - Early Education</h3>
                            <p className="text-gray-600">Completed studies at <strong>Scottish Church College</strong>, Kolkata, with deep interest in spirituality.</p>
                        </div>
                    </div>

                    {/* 1922 - Meeting His Guru */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🙏
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1922 - Meeting His Guru</h3>
                            <p className="text-gray-600">Met <strong>Srila Bhaktisiddhanta Saraswati</strong>, who instructed him to spread Krishna Consciousness in the West.</p>
                        </div>
                    </div>

                    {/* 1944 - Publishing Back to Godhead */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            📰
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1944 - Publishing Back to Godhead</h3>
                            <p className="text-gray-600">Founded the spiritual magazine <strong>Back to Godhead</strong>, which is still in circulation today.</p>
                        </div>
                    </div>

                    {/* 1965 - Journey to the West */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🚢
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1965 - Journey to the West</h3>
                            <p className="text-gray-600">Traveled to the USA on the cargo ship <strong>Jaladuta</strong>, enduring hardships to spread Krishna Consciousness.</p>
                        </div>
                    </div>

                    {/* 1966 - ISKCON Founded */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🏛️
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1966 - ISKCON Founded</h3>
                            <p className="text-gray-600">Established the <strong>International Society for Krishna Consciousness (ISKCON)</strong> in New York City.</p>
                        </div>
                    </div>

                    {/* 1972 - Publishing Bhagavad Gita */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            📚
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1972 - Publishing Bhagavad Gita</h3>
                            <p className="text-gray-600">Published <strong>Bhagavad Gita As It Is</strong>, which became the most widely read translation worldwide.</p>
                        </div>
                    </div>

                    {/* 1973 - Establishing Temples */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🏰
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1973 - Establishing Temples</h3>
                            <p className="text-gray-600">Founded temples worldwide, including <strong>Mayapur, Vrindavan, and Los Angeles</strong>.</p>
                        </div>
                    </div>

                    {/* 1977 - Departure */}
                    <div className="relative">
                        <div className="absolute -left-6 top-1 w-12 h-12 flex items-center justify-center bg-[#d1a664] text-white rounded-full shadow-lg">
                            🌿
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-[#d1a664]">1977 - Departure</h3>
                            <p className="text-gray-600">Left this world, leaving behind a <strong>global movement</strong> and over <strong>70 books</strong> of Vedic teachings.</p>
                        </div>
                    </div>

                </div>
            </section>


            {/* Image Gallery */}
            <section className="max-w-7xl mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Memorable Moments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <img src={s1} className="rounded-lg shadow-md" alt="Prabhupada 1" />
                    <img src={s2} className="rounded-lg shadow-md" alt="Prabhupada 2" />
                    <img src={s3} className="rounded-lg shadow-md" alt="Prabhupada 3" />
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#d1a664] py-12 text-center">
                <h2 className="text-3xl font-bold text-white">Follow the Teachings of Srila Prabhupada</h2>
                <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
                    Dive deeper into Krishna Consciousness and explore his divine wisdom in the Bhagavad Gita As It Is.
                </p>
                <a href="https://vedabase.io/en/" className="mt-6 inline-block bg-white text-[#d1a664] font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200">
                    Explore His Books
                </a>
            </section>
        </div>
    );
};

export default SrilaPrabhupada;
