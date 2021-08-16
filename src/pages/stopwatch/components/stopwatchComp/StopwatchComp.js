import React from 'react'
import './StopwatchComp.css'

function StopwatchComp(props) {
   return (
      <div className="stopwatch-container">
         <div className="stopwatch">
            <span>
               {props.time.m >= 10 ? props.time.m : '0' + props.time.m}
            </span>
            &nbsp;:&nbsp;
            <span>
               {props.time.s >= 10 ? props.time.s : '0' + props.time.s}
            </span>
            &nbsp;:&nbsp;
            <span>
               {props.time.ms >= 10 ? props.time.ms : '0' + props.time.ms}
            </span>
         </div>
      </div>
   )
}

export default StopwatchComp
