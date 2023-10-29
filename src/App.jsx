
import React from 'react'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header'; 

import Home from './router/Home'; 

import SobreNosotros from './router/SobreNosotros'; 

import Menu from './router/Menu';

import Tareas from './router/Tareas';





/* import TaskForm from './componentes/TaskForm'; */




import './App.css';





function App() {

  console.log("se inicio la app"); // mirar en la consola



 
 

  
  

  return (

    <Router>

    <nav style={{ textAlign: 'center', position: 'relative' }}>

      <Header />

      <Menu />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/tareas" element={<Tareas/>} />

        <Route path="/sobrenosotros" element={<SobreNosotros/>} />

      </Routes>



    </nav>

  </Router>

);


}

export default App;

