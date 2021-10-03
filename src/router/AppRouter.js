import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom'

import { routes } from './routes'

function AppRouter() {
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

export default AppRouter
