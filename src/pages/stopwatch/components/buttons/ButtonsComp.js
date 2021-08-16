import React from 'react'
import './ButtonsComp.css'

function ButtonsComp(props) {
   return (
      <div className="btn-container">
         {props.status === 0 ? (
            <button onClick={props.start} className="start">
               Start
            </button>
         ) : props.status === 1 ? (
            <div>
               <button onClick={props.reset} className="reset">
                  Reset
               </button>
               <button onClick={props.pause} className="pause">
                  Pause
               </button>
               <button onClick={props.lap} className="lap">
                  Lap
               </button>
            </div>
         ) : props.status === 2 ? (
            <div>
               <button onClick={props.reset} className="reset">
                  Reset
               </button>
               <button onClick={props.resume} className="resume">
                  Resume
               </button>
               <button onClick={props.lap} className="lap">
                  Lap
               </button>
            </div>
         ) : (
            <div>
               <button onClick={props.reset} className="reset">
                  Reset
               </button>
               <button onClick={props.pause} className="pause">
                  Pause
               </button>
               <button onClick={props.lap} className="lap">
                  Lap
               </button>
            </div>
         )}
      </div>
   )
}

export default ButtonsComp
