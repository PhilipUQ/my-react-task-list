
import React from 'react'; 

import Header from './componentes/Header'; 

import TaskLis from './componentes/TaskList'; 

import CustomForm from './componentes/CustomForm';





/* import TaskForm from './componentes/TaskForm'; */




import './App.css';





function App() {

  console.log("se inicio la app"); // mirar en la consola



 
 

  
  

  return (

    <div>
      <div style={{ textAlign: 'center', position: 'relative' }}>

        <Header />

        <TaskLis />

        
      </div>
      
      
    </div>
    


  );
}

export default App;
