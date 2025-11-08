import React, { useState, useEffect } from 'react';
import img1 from '../assets/img.jpg'; // Update this path to your local image
import img2 from '../assets/Mandir.jpg'; // Update this path to your local image

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: img1,
            text: [
                "Welcome to ISKCON Bhusawal", // Text for the first slide
                "Sri Sri Radha Murlidhar Mandir", // Second line in cursive
            ],
        },
        {
            image: img2,
            text: [
                "",
                "",
            ],
        },
        {
            image: img1,
            text: [
                "",
                "",
            ],
        },
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div id="default-carousel" className="relative w-full mt-5 overflow-x-hidden bg-[#f3d4a5]" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mx-auto max-w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <img
                            src={slide.image}
                            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                            alt={`Slide ${index + 1}`}
                        />
                        {/* Text for the slide */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                            <div className="text-white text-2xl md:text-4xl font-serif text-center">
                                {slide.text[0]}
                            </div>
                            <div className="text-white mb-5 text-2xl md:text-4xl font-dancing text-center">
                                {slide.text[1]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary-700' : 'bg-gray-300'}`}
                        aria-current={currentSlide === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Carousel;