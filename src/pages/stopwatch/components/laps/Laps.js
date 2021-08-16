import React from 'react'
import './Laps.css'

function Laps(props) {
   return (
      <div className="lap-list-container">
         <ul>
            {!!props.laps.length && (
               <button onClick={props.removeAllLaps}>Remove all laps</button>
            )}
            {props.laps.map((lap, index) => (
               <div key={index.toString()}>
                  <li>
                     {index + 1} lap &nbsp; {lap}
                  </li>
               </div>
            ))}
         </ul>
      </div>
   )
}

export default Laps
