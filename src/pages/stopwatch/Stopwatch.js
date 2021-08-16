import { useState } from 'react'
import './Stopwatch.css'
import ButtonsComp from './components/buttons/ButtonsComp'
import StopwatchComp from './components/stopwatchComp/StopwatchComp'
import Laps from './components/laps/Laps'

function Stopwatch() {
   const [time, setTime] = useState({ m: 0, s: 0, ms: 0 })
   const [interv, setInterv] = useState()
   const [status, setStatus] = useState(0)

   // start = 1
   // pause = 2
   // resume = 3
   // reset = 0

   const [laps, setLap] = useState([])

   function startHandler() {
      setStatus(1)
      run()
      setInterv(setInterval(run, 10))
   }

   function run() {
      if (updatedS >= 59) {
         updatedM++
         updatedS = 0
      }
      if (updatedMs >= 99) {
         updatedS++
         updatedMs = 0
      }
      updatedMs++
      return setTime({
         m: updatedM,
         s: updatedS,
         ms: updatedMs,
      })
   }

   function pauseHandler() {
      setStatus(2)
      clearInterval(interv)
   }

   function resetHandler() {
      setStatus(0)
      clearInterval(interv)
      setTime({
         ms: 0,
         s: 0,
         m: 0,
      })
      setLap([])
   }

   function resumeHandler() {
      setStatus(3)
      setInterv(setInterval(run, 10))
   }

   let updatedMs = time.ms
   let updatedS = time.s
   let updatedM = time.m

   function addLap() {
      setLap([...laps, `${updatedM} : ${updatedS} : ${updatedMs}`])
      console.log(laps)
   }

   function removeAllLaps() {
      setLap([])
   }

   return (
      <div className="Stopwatch">
         <StopwatchComp time={time} />
         <ButtonsComp
            time={time}
            status={status}
            start={startHandler}
            pause={pauseHandler}
            resume={resumeHandler}
            reset={resetHandler}
            lap={addLap}
         />
         <Laps lap={addLap} laps={laps} removeAllLaps={removeAllLaps} />
      </div>
   )
}

export default Stopwatch
