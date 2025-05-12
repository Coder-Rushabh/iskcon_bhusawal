import React from 'react';
import img2 from '../assets/mandir.jpg'; // Update this path to your local image

function TempleIntro() {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-serif text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-4xl lg:mx-auto">
                        Vrindavan in Bhusawal
                    </h2>
                    <p className="text-base font-normal text-gray-500 lg:max-w-3xl lg:mx-auto mb-8">
                        The Sri Sri Radha Murlidhar Mandir, situated in Bhusawal, holds a special significance for the devotees of the International Society for Krishna Consciousness.
                    </p>
                    <p className="text-base font-normal text-gray-500 lg:max-w-3xl lg:mx-auto mb-8">
                        We conduct a variety of courses, seminars, and workshops. In fact, there’s something for everyone – the kids, the youth, the families. We also invite you to dine at our international restaurant, celebrate your occasion at the temple, or join us for any of our tours. Together, let’s enhance the spiritual dimension of our lives!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                <div className="relative w-full h-auto md:col-span-2">
  <div className="bg-[#d1a664] rounded-2xl flex flex-col md:flex-row justify-between flex-wrap overflow-hidden">
    <div className="p-5 xl:p-8 w-full md:w-1/2">
      <h3 className="text-xl font-bold xl:text-xl text-white py-5 w-full xl:w-64">
        New Temple Construction!
      </h3>
      <p className="text-xs font-normal text-white w-full mb-8 xl:w-64">
        New temple dedicated to Sri Sri Radha Murlidhar is being constructed in Bhusawal.
      </p>
      <button className="py-2 px-5 border border-solid border-white rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
        View More
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
    </div>
    <div className="relative w-full md:w-1/2 h-auto overflow-hidden">
      <img src={img2} alt="Temple Construction" className="w-full h-auto object-cover" />
    </div>
  </div>
</div>

                    <div className="relative w-full h-auto">
                        <div className="bg-[#c2935a] rounded-2xl p-5 xl:p-8 h-full">
                            <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Spiritual Study Center In Bhusawal</h3>
                            <p className="text-xs font-normal text-white mb-8">Connect with us to get in-depth essence of Bhagwad-Gita & Srimad Bhagvatam!</p>
                            <button className="py-2 px-5 border border-solid border-white rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                View More
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full h-auto">
                        <div className="bg-[#b3804f] rounded-2xl p-5 xl:p-8 h-full">
                            <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Cultivate Children from Young Age!</h3>
                            <p className="text-xs font-normal text-white mb-8">Our specially designed courses to help Children nourish.</p>
                            <button className="py-2 px-5 border border-solid border-white rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                View More
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TempleIntro;