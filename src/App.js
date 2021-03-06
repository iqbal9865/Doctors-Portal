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
import AllPatients from './components/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import MyBlogs from './components/MyBlogs/MyBlogs';
import ContactForm from './components/ContactForm/ContactForm';
import AddReview from './components/Dashboard/AddReview/AddReview';

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
        <Route path='/contact'>
            <ContactForm />
        </Route>
        <Route path='/blogs'>
            <MyBlogs />
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
        <PrivateRoute path='/addReview'>
            <AddReview />
        </PrivateRoute>
        <PrivateRoute path='/doctor/appointment'>
            
        </PrivateRoute>
        <PrivateRoute path='/doctor/patients'>
            <AllPatients></AllPatients>
        </PrivateRoute>

        <PrivateRoute path='/doctor/prescriptions'>
            
        </PrivateRoute>

        <PrivateRoute path='/doctor/addDoctor'>
            <AddDoctor></AddDoctor>
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
