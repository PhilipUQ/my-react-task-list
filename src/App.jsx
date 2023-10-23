
import React from 'react'; 

import Header from './componentes/Header'; 

import TaskLis from './componentes/TaskList'; 

import './App.css';




function App() {

  console.log("se inicio la app"); // TODO: quitar log de depuración

  
  return (

    <div style={{ textAlign: 'center' }}>

      <Header />

      <TaskLis />


    </div>

  );

  
}

export default App;
