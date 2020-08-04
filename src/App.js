import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/home'
import Layout from './components/Layout'
import CartConnected from './components/cart/CartConnected'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/cart'>
              <CartConnected />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  )
}

export default App
