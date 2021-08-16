import { useState } from 'react'
import './ColorFlipper.css'

function ColorFlipper() {
   const [bgColor, setBgColor] = useState({
      red: 0,
      green: 255,
      blue: 255,
   })

   function changeBgColor() {
      setBgColor({
         red: Math.floor(Math.random() * 255),
         green: Math.floor(Math.random() * 255),
         blue: Math.floor(Math.random() * 255),
      })
   }

   return (
      <div
         className="color-flipper"
         style={{
            backgroundColor: `rgb(${bgColor.red}, ${bgColor.green}, ${bgColor.blue})`,
         }}
      >
         <div className="color-flipper-title">
            <h1>
               Background color: <br /> rgb({bgColor.red}, {bgColor.green},{' '}
               {bgColor.blue}){' '}
            </h1>
         </div>
         <button onClick={changeBgColor}>Click me</button>
      </div>
   )
}

export default ColorFlipper
