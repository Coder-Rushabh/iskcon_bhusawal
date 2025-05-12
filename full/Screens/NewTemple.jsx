import React from 'react'
import img from "../assets/Mandir.jpg"
function NewTemple() {
  return (
    <>
   
    <section
      class=" pt-4 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
      
        <h1
          class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]"
        >
         Witness the new temple construction in
          <span class="text-indigo-600"> Bhusawal </span>
        </h1>
        <p
          class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9"
        >
          New temple dedicated to Sri Sri Radha Krishna is being constructed in Bhusawal
        </p>
        <a
          href="javascript:;"
          class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
        >
          Know more
          <svg
            class="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div class="flex justify-center">
          <img
            src={img}
            alt="Dashboard image" class="rounded-t-3xl h-auto object-cover"
          />
        </div>
      </div>
    </section>



  <section class="lg:pt-20 pt-0  lg:pl-8 h-full">
    <div
      class="rounded-2xl bg-indigo-50 py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
          <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
            <div class="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
              <span class="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
              Investment app
            </div>
            <h1 class="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]">
              The new standard for <span class="text-indigo-600">Modern investor</span>
            </h1>
            <p class=" text-gray-500 text-lg text-center lg:text-left">
              When you’re ready to invest, quickly execute your orders with Complex and outdated.
            </p>
            <div
              class="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
              <input type="text" name="email" placeholder="Enter email to get started"
                class="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full" />
              <button
                class="bg-indigo-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full">Get
                Started</button>
            </div>
            <div class="flex items-center flex-col lg:flex-row">
              <div class="flex items-center">
                <img src="https://pagedone.io/asset/uploads/1694846673.png" alt="Rounded image "
                  class="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover" />
                <img src="https://pagedone.io/asset/uploads/1694846691.png" alt="Rounded image"
                  class="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover" />
                <img src="https://pagedone.io/asset/uploads/1694846704.png" alt="Rounded image"
                  class="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover" />
              </div>
              <span class="mt-3 text-base text-gray-600 font-medium lg:ml-3">People have joined</span>
            </div>
          </div>
          <div class="w-full xl:col-span-7  lg:col-span-6 block">
            <div class="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
              <img src="https://pagedone.io/asset/uploads/1694846193.png" alt="Dashboard image" class="rounded-l-3xl object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
                                                                           
    </>
  )
}

export default NewTemple