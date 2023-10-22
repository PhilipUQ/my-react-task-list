
import React from 'react'; //importamos la libreria react
 
import Header from './componentes/Header'; //importamos el componente Header

import TaskList from './componentes/TaskList'; // importamos el componente TaskList

import './App.css' // importamos los estilos en el archivo App.css


function App() {

  console.log("aplicacion iniciada"); //quitar despues de hacer pruebas
  
  return (

    // centramos los componentes

    <div style={{ textAlign: 'center' }}> 

      <Header />

      <TaskList />

    </div>


  );

}

export default App;