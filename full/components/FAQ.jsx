import React from 'react';
import img from '../assets/1.jpeg'; // Update this path to your local logo image

function FAQ() {
  return (
    <div>
      <section className="py-12"> {/* Reduced vertical padding */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-8 gap-y-4 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"> {/* Reduced gap */}
            <div className="w-full lg:w-1/2">
              <img
                src={img}
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-4 lg:mb-8"> {/* Reduced margin-bottom */}
                  <h6 className="text-md text-center font-medium text-indigo-600 mb-1 lg:text-left"> {/* Smaller font size */}
                    FAQs
                  </h6>
                  <h2 className="text-2xl text-center font-bold text-gray-900 leading-[2.5rem] mb-4 lg:text-left"> {/* Smaller font size */}
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group" data-accordion="default-accordion">
                  <div
                    className="accordion pb-6 border-b border-solid border-gray-200 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-7 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5>How to create an account?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                      style={{ maxHeight: '100px' }}
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-600"> {/* Reduced font size */}
                        To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                      </p>
                    </div>
                  </div>

                  <div className="accordion py-6 border-b border-solid border-gray-200" id="basic-heading-two-with-arrow-always-open"> {/* Reduced padding */}
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between font-normal text-lg leading-7 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5>Have any trust issues?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm text-gray-500 font-normal"> {/* Reduced font size */}
                        Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                      </p>
                    </div>
                  </div>

                  <div className="accordion py-6 border-b border-solid border-gray-200" id="basic-heading-three-with-arrow-always-open"> {/* Reduced padding */}
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-7 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5>How can I reset my password?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-sm text-gray-500 font-normal"> {/* Reduced font size */}
                        You can reset your password by clicking 'Forgot password' on the login page, entering your registered email, and following the instructions sent to your email.
                      </p>
                    </div>
                  </div>

                  <div className="accordion py-6" id="basic-heading-four-with-arrow-always-open"> {/* Reduced padding */}
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-7 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5>What is the payment process?</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden pr-4"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-sm text-gray-500 font-normal"> {/* Reduced font size */}
                        Payments can be made using various methods such as credit/debit cards, bank transfers, or online payment systems. Follow the checkout process for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
