import './ClockComp.css'

function ClockComp(props) {
   return (
      <div className="clock-around">
         <div className="clock">
            <span>{props.time}</span>
            {props.checked && <span className="date">{props.date}</span>}
         </div>
      </div>
   )
}

export default ClockComp
