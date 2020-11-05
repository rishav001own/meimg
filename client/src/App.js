import React from 'react';
import './App.css';
import Navbar from './components/navbar/Nav';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/"></Route>
    </BrowserRouter>
  );
}

export default App;
