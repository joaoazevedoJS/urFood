import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/404'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about-us" exact component={About} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  )
}