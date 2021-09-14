import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Projects from './pages/projects/Projects'

import './App.css'

import Counter from './pages/counter/Counter'
import ClockRoot from './pages/clock/Clock'
import ColorFlipper from './pages/colorFlipper/ColorFlipper'
import Stopwatch from './pages/stopwatch/Stopwatch'
import ToDoList from './pages/toDoList/ToDoList'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Slider from './pages/slider/Slider'
import Calculator from './pages/calculator/Calculator'

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/colorflipper" exact component={ColorFlipper} />
            <Route path="/counter" exact component={Counter} />
            <Route path="/clock" exact component={ClockRoot} />
            <Route path="/stopwatch" exact component={Stopwatch} />
            <Route path="/todolist" exact component={ToDoList} />
            <Route path="/slider" exact component={Slider} />
            <Route path="/calculator" exact component={Calculator} />

            <Route path="*" exact component={PageNotFound} />
         </Switch>
      </Router>
   )
}

export default App
