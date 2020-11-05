import React from 'react';
import './App.css';
import Navbar from './components/navbar/Nav';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Signup from './components/pages/signup';
import Login from './components/pages/login';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </BrowserRouter>
  );
}

export default App;
