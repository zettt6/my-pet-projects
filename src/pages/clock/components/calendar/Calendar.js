import './Calendar.css'
import calendar from './calendar.svg'

function Calendar(props) {
   return (
      <div className="calendar">
         <div className="calendar-position">
            <div className="container-checkbox">
               <input
                  className="checkbox"
                  type="checkbox"
                  checked={props.checked}
                  onChange={props.calendarHandler}
               />
            </div>
         </div>
         <img alt="ops" src={calendar} />
      </div>
   )
}

export default Calendar
