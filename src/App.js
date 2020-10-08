import React from 'react';
import './App.css';
import Header from './components/Header/Header';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Section from './components/Sections/Section';
import Persona from './components/Personas/Persona';

function App() {

  return (

    <div className='App'>
      <Header />
      <Section />
      <div className='sep-personas'><h1>Personas</h1></div>
      <Persona />

    </div>
      
  

  );
}

export default App;
