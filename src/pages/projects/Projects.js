import { useHistory } from 'react-router-dom'
import './Projects.css'

import clock from './svg/clock.svg'
import colorFlipper from './svg/colorFlipper.svg'
import counter from './svg/counter.svg'
import stopwatch from './svg/stopwatch.svg'
import todo from './svg/todo.svg'
import slider from './svg/slider.svg'

function Projects() {
   let history = useHistory()

   return (
      <div className="Projects">
         <div
            className="cards projects-clock"
            onClick={() => history.push('/clock')}
         >
            <img alt="clock" src={clock} />
            <div className="cards-title">Clock</div>
         </div>

         <div
            className="cards projects-color-flipper"
            onClick={() => history.push('/colorflipper')}
         >
            <img src={colorFlipper} alt="colorFlipper" />
            <div className="cards-title"> Color Flipper</div>
         </div>

         <div
            className="cards projects-counter"
            onClick={() => history.push('/counter')}
         >
            <img alt="counter" src={counter} />
            <div className="cards-title"> Counter</div>
         </div>

         <div
            className="cards projects-stopwatch"
            onClick={() => history.push('/stopwatch')}
         >
            <img src={stopwatch} alt="stopwatch" />
            <div className="cards-title"> Stopwatch</div>
         </div>

         <div
            className="cards projects-todolist"
            onClick={() => history.push('/todolist')}
         >
            <img src={todo} alt="todolist" />
            <div className="cards-title">To Do List</div>
         </div>

         <div
            className="cards projects-todolist"
            onClick={() => history.push('/slider')}
         >
            <img src={slider} alt="slider" />
            <div className="cards-title">Slider</div>
         </div>
      </div>
   )
}

export default Projects
