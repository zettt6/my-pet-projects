import { useState } from 'react/cjs/react.development'
import './Calculator.css'

function Calculator() {
   const [nums, setNums] = useState([])
   const [operators, setOperators] = useState([])
   const [inputText, setInputText] = useState(0)

   const [result, setResult] = useState('')

   let btnData = [
      { value: 'AC', type: 'clean', className: 'btn grey-highligh' },
      { value: '+/-', type: 'posOrNeg', className: 'btn grey-highligh' },
      { value: '%', type: 'procent', className: 'btn grey-highligh' },
      { value: '÷', type: 'divide', className: 'btn orange-highligh' },

      { value: '7', type: 'num', className: 'btn' },
      { value: '8', type: 'num', className: 'btn' },
      { value: '9', type: 'num', className: 'btn' },

      { value: '×', type: 'multiply', className: 'btn orange-highligh' },

      { value: '4', type: 'num', className: 'btn' },
      { value: '5', type: 'num', className: 'btn' },
      { value: '6', type: 'num', className: 'btn' },

      { value: '-', type: 'minus', className: 'btn orange-highligh' },

      { value: '1', type: 'num', className: 'btn' },
      { value: '2', type: 'num', className: 'btn' },
      { value: '3', type: 'num', className: 'btn' },

      { value: '+', type: 'plus', className: 'btn orange-highligh' },

      { value: '0', type: 'num', className: 'btn zero' },

      { value: ',', type: 'decimal', className: 'btn' },
      { value: '=', type: 'equel', className: 'btn orange-highligh' },
   ]

   // console.log(nums)
   // console.log(operators)
   // console.log('result = ' + result)
   // console.log('+' + result.charAt(0))

   function typeOfBtn(btn) {
      switch (btn.type) {
         case 'num':
            setInputText(btn.value)
            setNums([...nums, btn.value])
            break
         case 'equel':
            calculate()
            break
         case 'clean':
            setResult('')
            setNums([])
            setOperators([])
            setInputText(0)
            break
         default:
            setOperators([...operators, btn.value])
      }
   }

   function calculate() {
      let lastOperator = operators[operators.length - 1]
      let lastNum = +nums[nums.length - 1]
      let tempRes = result

      if (lastOperator === '') {
         // setNums([...nums, nums[nums.length - 1] + 'hey'])
         console.log('hi')
      } else if (lastOperator === '+') {
         tempRes = +nums[nums.length - 2] + lastNum
      } else if (lastOperator === '-') {
         tempRes = +nums[nums.length - 2] - lastNum
      } else if (lastOperator === '×') {
         tempRes = +nums[nums.length - 2] * lastNum
      } else if (lastOperator === '÷') {
         tempRes = +nums[nums.length - 2] / lastNum
      } else if (lastOperator === '%') {
         tempRes = (+nums[nums.length - 2] * lastNum) / 100
      }
      // else if (
      //    lastOperator === '+/-' &&
      //    lastNum.toString().charAt(-1) === ''
      // ) {
      //    tempRes = '-' + lastNum
      // }
      // else if (
      //    lastOperator === '+/-' &&
      //    lastNum.toString().charAt(-1) === '-'
      // ) {
      //    tempRes = '' + tempRes
      // }
      else return setInputText(tempRes)

      setNums([...nums, tempRes])
      setResult(`${tempRes}`)
      setInputText(tempRes)
      setOperators([''])
   }

   return (
      <div className="Calculator">
         <div className="calc-wrapper">
            <div>
               <input className="input" type="text" value={inputText} />
            </div>

            <div className="btns-container">
               {btnData.map((btn, index) => {
                  return (
                     <button
                        key={index.toString()}
                        className={btn.className}
                        onClick={() => typeOfBtn(btn)}
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

// switch (btn.type) {
//    case 'plus':
//       console.log('plus')
//       break
//    case 'minus':
//       console.log('minus')
//       break
//    case 'divide':
//       console.log('divide')
//       break
//    case 'multiply':
//       console.log('multiply')
//       break
//    case 'clean':
//       console.log('clean')
//       break
//    case 'procent':
//       console.log('procent')
//       break
//    case 'posOrNeg':
//       console.log('posOrNeg')
//       break
//    case 'equel':
//       console.log('equel')
//       break
//    case 'decimal':
//       console.log('decimal')
//       break
//    default:
//       console.log(btn.value)
// }

{
   /* <button className="btn grey-highligh" id="clean">
                  AC
               </button>
               <button className="btn grey-highligh" id="negOrPos">
                  +/-
               </button>
               <button className="btn grey-highligh" id="procent">
                  %
               </button>
               <button className="btn orange-highligh" id="div">
                  ÷
               </button>
               <button className="btn">7</button>
               <button className="btn">8</button>
               <button className="btn">9</button>
               <button className="btn orange-highligh" id="mult">
                  ×
               </button>
               <button className="btn">4</button>
               <button className="btn">5</button>
               <button className="btn">6</button>
               <button className="btn orange-highligh" id="minus">
                  -
               </button>
               <button className="btn">1</button>
               <button className="btn">2</button>
               <button className="btn">3</button>
               <button className="btn orange-highligh" id="plus">
                  +
               </button>
               <button className="btn" id="zero">
                  0
               </button>
               <button className="btn" id="dot">
                  .
               </button>
               <button className="btn orange-highligh" id="equel">
                  =
               </button> */
}
