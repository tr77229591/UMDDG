import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/pages/login/login'
import Dashboard from './components/pages/dashboard/dashboard'
import AuthRoute from './components/authroute/authroute'
import Edit from './components/pages/users/edit'
import Merchant from './components/pages/merchant/merchant'
import React from 'react';

export default(
<BrowserRouter>
  <div>
   <AuthRoute></AuthRoute>
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/edit' component={Edit}></Route>
      <Route path='/merchant' component={Merchant}></Route>

    </Switch>
    </div>
</BrowserRouter>
)
