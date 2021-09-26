import { useState } from 'react/cjs/react.development'
import './Calculator.css'

function Calculator() {
   const [operator, setOperator] = useState('')
   const [inputText, setInputText] = useState(0)

   const [result, setResult] = useState(0)

   let btnData = [
      { value: 'AC', type: 'clean', className: 'btn grey-highligh' },
      {
         value: '+/-',
         type: 'posOrNeg',
         className: 'btn grey-highligh noactive',
      },
      { value: '%', type: 'procent', className: 'btn grey-highligh noactive' },
      { value: '÷', type: 'divide', className: 'btn orange-highligh' },

      { value: 7, type: 'num', className: 'btn' },
      { value: 8, type: 'num', className: 'btn' },
      { value: 9, type: 'num', className: 'btn' },

      { value: '×', type: 'multiply', className: 'btn orange-highligh' },

      { value: 4, type: 'num', className: 'btn' },
      { value: 5, type: 'num', className: 'btn' },
      { value: 6, type: 'num', className: 'btn' },

      { value: '-', type: 'minus', className: 'btn orange-highligh' },

      { value: 1, type: 'num', className: 'btn' },
      { value: 2, type: 'num', className: 'btn' },
      { value: 3, type: 'num', className: 'btn' },

      { value: '+', type: 'plus', className: 'btn orange-highligh' },

      { value: 0, type: 'num', className: 'btn zero' },

      { value: ',', type: 'decimal', className: 'btn noactive' },
      { value: '=', type: 'equel', className: 'btn orange-highligh' },
   ]

   /*
   вычисления подряд 
   операторы '+/-', '%'
   десятичная дробь
   */

   console.log(operator)
   console.log('result = ' + result)
   console.log('inputText = ' + inputText)

   function buttonHandler(btn) {
      switch (btn.type) {
         case 'num':
            let tempVar = inputText.toString() + btn.value
            setInputText(+tempVar)
            setResult(+tempVar)
            break
         case 'equel':
            calculate()
            break
         case 'clean':
            setResult(0)
            setInputText(0)
            setOperator('')
            break
         default:
            setResult(inputText)
            setInputText('')
            setOperator(btn.value)
      }
   }

   function calculate() {
      let tempVar = result

      if (operator === '+') {
         tempVar = tempVar + inputText
      } else if (operator === '-') {
         tempVar = tempVar - inputText
      } else if (operator === '×') {
         tempVar = tempVar * inputText
      } else if (operator === '÷') {
         tempVar = tempVar / inputText
      }
      // else if (operator === '+/-') {
      //    tempVar = tempVar * -1
      // }
      // else if (operator === '%') {
      //    tempVar = (tempVar / 100) * inputText
      //    setResult(tempVar)
      //    setInputText(tempVar)
      else setInputText(tempVar)

      setResult(tempVar)
      setInputText(tempVar)
   }

   return (
      <div className="Calculator">
         <div className="calc-wrapper">
            <div>
               <input
                  className="input"
                  type="text"
                  value={inputText}
                  onChange={() => {}}
               />
            </div>

            <div className="btns-container">
               {btnData.map((btn, index) => {
                  return (
                     <button
                        key={index.toString()}
                        className={btn.className}
                        onClick={() => buttonHandler(btn)}
                     >
                        {btn.value}
                     </button>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Calculator
