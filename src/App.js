import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment/Appointment'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointmentDataTable from './components/Dashboard/AppointmentDataTable/AppointmentDataTable';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path='/home'>
            <Home />
        </Route>
        <Route path='/about'>
            <About />
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
        
         <PrivateRoute path='/appointment'>
            <Appointment />
        </PrivateRoute>
        <PrivateRoute path='/dashboard/appointment'>
            <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/doctor/dashboard'>
            
        </PrivateRoute>
        <PrivateRoute path='/doctor/appointment'>
            <AppointmentDataTable />
        </PrivateRoute>
        <PrivateRoute path='/doctor/patients'>
            
        </PrivateRoute>
        <PrivateRoute path='/doctor/prescriptions'>
            
        </PrivateRoute>
        <PrivateRoute path='/doctor/setting'>
            
        </PrivateRoute>
        <Route exact path='/'>
            <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
