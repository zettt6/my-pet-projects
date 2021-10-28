import { useState } from 'react'

import arrowLeft from './svg/left.svg'
import arrowRight from './svg/right.svg'

import './Slider.css'

function Slider() {
   const [currentSlide, setCurrentSlide] = useState(0)

   let sliderData = [
      {
         image: 'https://cs9.pikabu.ru/post_img/2019/07/12/11/og_og_1562955323241062083.jpg',
      },
      {
         image: 'https://images2.alphacoders.com/833/833534.png',
      },
      {
         image: 'https://s1.1zoom.me/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg',
      },
      {
         image: 'https://images7.alphacoders.com/799/thumb-1920-799035.jpg',
      },
      {
         image: 'https://www.meme-arsenal.com/memes/104248db28aeddecf0837cc9c7ef377d.jpg',
      },
      {
         image: 'https://poster.nicefon.ru/2018_03/26/1080x610/23369440c0e0f0b0acf0e0.jpg',
      },
   ]

   const nextSlide = () => {
      setCurrentSlide(
         currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
      )
      console.log(currentSlide)
   }

   const prevSlide = () => {
      setCurrentSlide(
         currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1
      )
   }

   return (
      <div className="Slider">
         <img
            className="arrow arrow-left"
            src={arrowLeft}
            alt="arrowLeft"
            onClick={prevSlide}
         />
         <div className="wrapper-slide-list">
            <div
               className="slide-list"
               style={{
                  transform: `translateX(calc(${currentSlide} * -600px))`,
               }}
            >
               {sliderData.map((slide, index) => {
                  return (
                     <img
                        className="slide"
                        key={index.toString()}
                        src={slide.image}
                        alt="ops"
                     />
                  )
               })}
            </div>
            <div className="dots-wrapper">
               {sliderData.map((slide, index) => {
                  return (
                     <div key={index.toString()}>
                        {index === currentSlide ? (
                           <div
                              className="dot"
                              onClick={() => {
                                 setCurrentSlide(index)
                              }}
                           ></div>
                        ) : (
                           <div className="dot active-dot"></div>
                        )}
                     </div>
                  )
               })}
            </div>
         </div>
         <img
            className="arrow arrow-right"
            src={arrowRight}
            alt="arrowRight"
            onClick={nextSlide}
         />
      </div>
   )
}

export default Slider
