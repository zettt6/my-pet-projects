import './CounterComp.css'

function CounterComp(props) {
   return (
      <div className="container-counter">
         <button onClick={props.decreaseCounter}>-</button>
         <h2
            className={
               props.count < 0
                  ? 'negative-count'
                  : props.count > 0
                  ? 'positive-count'
                  : ''
            }
         >
            {props.count}
         </h2>
         <button onClick={props.increaseCounter}>+</button>
      </div>
   )
}

export default CounterComp
