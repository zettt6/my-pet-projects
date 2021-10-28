import ColorFlipper from '../pages/colorFlipper/ColorFlipper'
import Counter from '../pages/counter/Counter'
import ClockRoot from '../pages/clock/Clock'
import Stopwatch from '../pages/stopwatch/Stopwatch'

import Calculator from '../pages/calculator/Calculator'
import Slider from '../pages/slider/Slider'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import MainPage from '../pages/projects/MainPage'

export const routes = [
   { path: '/', exact: true, component: MainPage },
   { path: '/colorFlipper', exact: true, component: ColorFlipper },
   { path: '/counter', exact: true, component: Counter },
   { path: '/clock', exact: true, component: ClockRoot },
   { path: '/stopwatch', exact: true, component: Stopwatch },

   { path: '/slider', exact: true, component: Slider },
   { path: '/calculator', exact: true, component: Calculator },
   { path: '/error', exact: true, component: PageNotFound },
]
