import { useState } from 'react/cjs/react.development'
import './Calculator.css'

function Calculator() {
   const [operator, setOperator] = useState('')
   const [currentOutput, setCurrentOutput] = useState(0)

   const [result, setResult] = useState(0)

   let btnData = [
      { value: 'AC', type: 'clean', className: 'btn grey-highligh' },
      {
         value: '+/-',
         type: 'posOrNeg',
         className: 'btn grey-highligh ',
      },
      { value: '%', type: 'procent', className: 'btn grey-highligh ' },
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

      { value: ',', type: 'decimal', className: 'btn ' },
      { value: '=', type: 'equel', className: 'btn orange-highligh' },
   ]

   // вычисления подряд
   // оператор %
   // десятичная дробь

   console.log('result: ' + result)
   console.log('operator: ' + operator)
   console.log('currentOutput: ' + currentOutput)

   function clickHandler(btn) {
      let tempVar = ''
      switch (btn.type) {
         case 'num':
            // !!!

            tempVar += currentOutput.toString() + btn.value
            setCurrentOutput(+tempVar)

            break
         case 'equel':
            calculate()
            setOperator('')
            break
         case 'clean':
            setResult(0)
            setCurrentOutput(0)
            setOperator('')
            break
         case 'procent':
            tempVar = currentOutput / 100
            setCurrentOutput(tempVar)
            setOperator(btn.value)
            break
         case 'decimal':
            tempVar = currentOutput.toString() + '.'
            setCurrentOutput(tempVar)
            break
         case 'posOrNeg':
            tempVar = currentOutput * -1
            setCurrentOutput(tempVar)
            break
         default:
            // setResult(currentOutput)
            // // в инпуте должно отоборажаться последнее введеное число
            // setCurrentOutput('')
            calculate()
            setOperator(btn.value)
      }
   }

   function calculate() {
      let tempRes = result

      if (operator === '') {
         setResult(currentOutput)
      } else if (operator === '+') {
         tempRes = tempRes + currentOutput
      } else if (operator === '-') {
         tempRes = tempRes - currentOutput
      } else if (operator === '×') {
         tempRes = tempRes * currentOutput
      } else if (operator === '÷') {
         tempRes = tempRes / currentOutput
      }

      setCurrentOutput(tempRes)
   }

   return (
      <div className="Calculator">
         <div className="calc-wrapper">
            <div>
               <input
                  readOnly
                  className="input"
                  type="text"
                  value={currentOutput}
                  onChange={() => {}}
               />
            </div>
            <div className="btns-container">
               {btnData.map((btn, index) => {
                  return (
                     <button
                        key={index.toString()}
                        className={
                           operator === btn.value
                              ? btn.className + ' active-operator'
                              : btn.className
                        }
                        onClick={() => clickHandler(btn)}
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

/*
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
   операторы +/-, %
   десятичная дробь
   /*


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
         case 'procent':
            let res = inputText / 100
            setInputText(res)
            setResult(res)
            break
         case 'decimal':
            let ress = inputText.toString() + '.'
            setInputText(ress)
            setResult(ress)
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
      } else if (operator === '+/-') {
         tempVar = tempVar * -1
      } else if (operator === '%') {
         tempVar = (tempVar / 100) * inputText
      } else setInputText(tempVar)

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
*/
