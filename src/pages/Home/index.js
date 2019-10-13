import React from 'react'
import { ItemPost } from '../ItemPost'
import { App } from '../App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export function Home() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/App">App</Link>
          </li>
          <li>
            <Link to="/ItemPost">ItemPost</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/App">
            <App />
          </Route>
          <Route path="/ItemPost">
            <ItemPost />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
