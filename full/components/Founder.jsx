import React from 'react';
import img from "../assets/2.jpg";

function Founder() {
  return (
    <div>
      <section className="py-5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32">
            <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 sm:leading-[3.25rem] lg:text-left">
                  Our Founder Acharya
                </h2>
              </div>
              <div className="grid gap-4 my-12 md:max-w-2xl max-w-lg mx-auto lg:max-w-full">
                <div className="flex gap-6">
                  <div className="block">
                    <h4 className="mb-2 text-xl font-medium text-gray-900">
                      HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI PRABHUPADA
                    </h4>
                    <p className="text-sm text-gray-600 font-normal leading-6">
                      Srila Prabhupada (1896-1977), was an extraordinary personality who dedicated his life for teaching the world about Krishna consciousness, ancient India’s most noble message of spiritual wisdom. In 1965, at the age of 69, he sailed from India to New York to share Lord Krishna’s message, on the order of his spiritual master Srila Bhaktisiddhanta Saraswati Thakura, representing a line of teachers dating back to Lord Krishna Himself.
                    </p>

                    <p className="mt-5 text-sm text-gray-600 font-normal leading-6">
                      Srila Prabhupadas most significant contribution, however, is his books. Highly respected by scholars for their authority, depth, and clarity, they are used as textbooks in numerous college courses. His writings have been translated into over fifty languages. The Bhaktivedanta Book Trust, established in 1972 to publish the works of His Divine Grace, has thus become the worlds largest publisher of books in the field of Indian religion and philosophy.

                      In just twelve years, despite his advanced age, Srila Prabhupada circled the globe fourteen times on lecture tours that took him to six continents. In spite of such a vigorous schedule, Srila Prabhupada continued to write prolifically. His writings constitute a veritable library of Vedic philosophy, religion, literature, and culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Update the image container */}
            <div className="w-full xl:col-span-7 lg:col-span-6">
              <div className="w-full sm:w-auto lg:w-[60.8125rem]">
                {/* Make the image responsive and smaller */}
                <img
                  src={img}
                  alt="Feature tailwind section"
                  className="w-full h-auto rounded-3xl object-cover  object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Founder;
