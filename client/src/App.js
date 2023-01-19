// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/navpage/navbar';
import ConditionalRouting from "./components/conditionalRoute";

const App=() => {
  return(
   <>
   <Navbar/>
   <ConditionalRouting/>

   </>
  );
}

export default App;
