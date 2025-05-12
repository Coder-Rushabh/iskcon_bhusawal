import React from 'react'
import img1 from '../assets/darshan/1.jpeg'
import img2 from '../assets/darshan/2.jpeg'
import img3 from '../assets/darshan/3.jpeg'
import img4 from '../assets/darshan/4.jpeg'
import img5 from '../assets/darshan/5.jpeg'
import img6 from '../assets/darshan/6.jpeg'
import img7 from '../assets/darshan/7.jpeg'
import img8 from '../assets/darshan/8.jpeg'
import img9 from '../assets/darshan/9.jpeg'

function Darshan() {
  return (
    <div>

      <div class="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        <div class=" break-inside-avoid mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img1} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img2} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img3} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img4} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img5} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img6} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img7} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img8} alt="Gallery image" />
        </div>
        <div class=" break-inside-avoid  mb-8">
          <img class="h-auto max-w-full rounded-lg" src={img9} alt="Gallery image" />
        </div>
      </div>

    </div>
  )
}

export default Darshan