
import React from 'react';

import Task from './Task';



function TaskList() {

  console.log('cargando tareas desde TaskList'); //para visualizar en consola


  let listaDeTareas = ["caminar 200000 km en media hora", "ir al centro a medio dia"]; //array con 2 tareas prediseñadas



  //por ahora se manejaran los estilos aqui y mas adelante importaremos de un TaskList.cssç

  const estilosDelFooter = {

    display: 'flex',

    justifyContent: 'space-between',

    alignItems: 'center'


  };



  return (

    <div>

      {listaDeTareas.map(tarea => <Task name={tarea} />)} {/* se crea una instancia de Task para cada tarea y se le pasa el nombre como un prop */}

      <div style={estilosDelFooter}>


        <p>tienes {listaDeTareas.length} tareas pendientes</p> {/* mas adelante se le agregara la funcion para que filtre las que no estan marcadas como completadas */}

        <button style={{ color: 'white', backgroundColor: 'red' }}>borrar todo</button>



      </div>



    </div>


  );


}


export default TaskList;