import './Calculator.css'

function Calculator() {
   return (
      <div className="Calculator">
         <div class="calc-wrapper background">
            <div className="input-area">
               <input className="calc-input" type="text" />
            </div>
            <div className="btns-container">
               <div className="left-symbols-container">
                  <div className="first-row">
                     <button className="calc-btn">AC</button>
                     <button className="calc-btn">+/-</button>
                     <button className="calc-btn">%</button>
                  </div>
                  <br />
                  <div className="main-symbols">
                     <button className="calc-btn">7</button>
                     <button className="calc-btn">8</button>
                     <button className="calc-btn">9</button>
                  </div>
                  <br />
                  <div className="main-symbols">
                     <button className="calc-btn">4</button>
                     <button className="calc-btn">5</button>
                     <button className="calc-btn">6</button>
                  </div>
                  <br />
                  <div class="main-symbols">
                     <button className="calc-btn">1</button>
                     <button className="calc-btn">2</button>
                     <button className="calc-btn">3</button>
                  </div>
                  <br />
                  <div className="main-symbols">
                     <button class="null calc-btn">0</button>
                     <button className="calc-btn">,</button>
                  </div>
               </div>
               <div className="right-symbols-container">
                  <button className="calc-btn">÷</button>
                  <br />
                  <button className="calc-btn">×</button>
                  <br />
                  <button className="calc-btn">-</button>
                  <br />
                  <button className="plus calc-btn">+</button>
                  <br />
                  <button className="calc-btn">=</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Calculator
