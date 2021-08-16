import { useState } from 'react'
import './Counter.css'
import CounterComp from './component/CounterComp'

function Counter() {
   const [count, setCount] = useState(0)

   const increaseCounter = () => {
      setCount(count + 1)
   }

   const decreaseCounter = () => {
      setCount(count - 1)
   }
   return (
      <div className="Counter">
         <h1>Counter</h1>
         <CounterComp
            count={count}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
         />

         <button
            onClick={() => {
               setCount(0)
            }}
         >
            Reset
         </button>
      </div>
   )
}

export default Counter
