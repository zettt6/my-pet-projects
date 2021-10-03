import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom'

import './App.css'

import { routes } from './router/routes'

function App() {
   return (
      <Router>
         <Switch>
            {routes.map((route) => (
               <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
               />
            ))}
            <Redirect to="/error" />
         </Switch>
      </Router>
   )
}

export default App
