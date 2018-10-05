import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Create from './views/Create/Create'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Create} />
    </div>
  </BrowserRouter>
)

export default AppRouter
