import { useState } from 'react'
import './Clock.css'
import Calendar from './components/calendar/Calendar'
import ClockComp from './components/clockComp/ClockComp'
import moment from 'moment'
import clock from './clock.svg'

function Clock() {
   let timeNow = new Date().toLocaleTimeString()
   let date = new moment().format('ddd DD MMMM YYYY')

   const [time, setTime] = useState(timeNow)
   const [checked, setChecked] = useState(false)

   function updateTime() {
      timeNow = new Date().toLocaleTimeString()
      setTime(timeNow)
   }

   setInterval(updateTime, 1000)

   function calendarHandler() {
      setChecked(true)
      if (checked) {
         setChecked(false)
      } else setChecked(true)
   }

   return (
      <div className="Clock">
         <header className="header">
            <img alt="ops" src={clock} />
            <span>React Clock</span>
         </header>
         <Calendar checked={checked} calendarHandler={calendarHandler} />
         <ClockComp time={time} date={date} checked={checked} />
      </div>
   )
}

export default Clock
