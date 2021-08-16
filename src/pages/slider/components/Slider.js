import './Slider.css'
import one from '../images/one.jpeg'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import left from '../svg/left.svg'
import right from '../svg/right.svg'

import { useState } from 'react'

function Slider() {
   const images = [
      { image: one },
      { image: two },
      { image: three },
      { image: four },
      { image: five },
   ]

   const [currentSlide, setCurrentSlide] = useState(0)
   const length = images.length

   function nextSlide() {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
   }

   return (
      <section className="slider">
         <img
            // onClick={prevSlide}
            className="arrow-left"
            src={left}
            alt="left"
         />
         {images.map((slide, index) => {
            return <img className="slide" src={slide.image} alt="image" />
         })}
         <img
            onClick={nextSlide}
            className="arrow-left"
            src={right}
            alt="right"
         />
      </section>
   )
}

export default Slider
