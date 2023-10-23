
import React, { useState, useEffect } from 'react';

import Tarea from './Task';




// funcion listaDeTareas donde se maneja el array de lista de tarea y los estados de las tareas

function listaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const [tituloDeTarea, setTituloDeTarea] = useState('');

  const [descripcionDeTarea, setDescripcionDeTarea] = useState('');



  console.log('cargando tareas desde TaskList'); // en consola


  /* const [editMode, setEditMode] = useState(null); */ 


    // se cargan las tareas desde el localStorage

  useEffect(() => {

    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {

      setTareas(JSON.parse(tareasGuardadas));

      
    }



  }, []);





  //funcion agregar nueva tarea


  const agregarNuevaTarea = () => {

    //validar si los inputbox no estan vacios

    if(tituloDeTarea === '' ||  descripcionDeTarea === '') {

        console.log("hay campos vacios no se puede agregar la tarea"); // alerta en consola

        return;

      }

      //se agrega una nueva tarea y tambien se agrega en el localStorage

    const nuevaTarea = { title: tituloDeTarea, description: descripcionDeTarea, completed: false };

    setTareas([...tareas, nuevaTarea] );

    localStorage.setItem('tareas', JSON.stringify( [...tareas, nuevaTarea] ));

    setTituloDeTarea('');

    setDescripcionDeTarea('');

    console.log(`la tarea ${tituloDeTarea} se agrego`);


  }




    //funcion para borrar una tarea,se borra una tarea y se actualiza el localStorage

  const borrarTarea = (indice) => {

    const nuevasTareas = [...tareas];

    nuevasTareas.splice(indice, 1);


    setTareas(nuevasTareas);

    localStorage.setItem('tareas',  JSON.stringify(nuevasTareas));
    
    console.log(`la tarea en ${indice} fue eliminada`);


  };
 




    // funcion para editar las tareas

  const editarTarea = (indice, nuevoTitulo, nuevaDescripcion) => {

    const tareasYaEditadas = [...tareas];


    tareasYaEditadas[indice].title  = nuevoTitulo;

    tareasYaEditadas[indice].description = nuevaDescripcion;

    setTareas(tareasYaEditadas);

    localStorage.setItem('tareas', JSON.stringify(tareasYaEditadas));


    console.log(`la tarea en ${indice} fue actualizada `);


  };




    //funcion para actualizar el valor del titulo en el estado

  const modificacionTitulo = (e) => {

    setTituloDeTarea(e.target.value);


  };



    //funcion para cambiar el valor de la descripcion en el estado

  const modificacionDescripcion = (e) => {

    setDescripcionDeTarea(e.target.value);

  };




    // funcion para borrar todas las tareas 

  const borrarTodasLasTareas = () => {

    setTareas([]); 


    localStorage.removeItem('tareas');

    console.log("todad la tareas fueron eliminasdas");


  };


    //botones y sus estilos, mas adelante se desarrollara el archivo css con los estilos

  const estilosDelFooter = {

    display: 'flex',

    justifyContent: 'space-between',

    alignItems: 'center',


  };



  return (
    <div>


      <div>

        <input type="text" placeholder="Título de la tarea" value={tituloDeTarea} onChange={modificacionTitulo} />

        <input type="text" placeholder="Descripción de la tarea" value={descripcionDeTarea} onChange={modificacionDescripcion} />

        <button onClick={agregarNuevaTarea}>+</button> {/* boton agregar nueva tarea */}


      </div>





      {tareas.map((tarea, indice) => <Tarea key={indice} tarea={tarea} indice={indice} borrarTarea={borrarTarea} editarTarea={editarTarea} />)}
      


      <div style={estilosDelFooter}>

    
        <p> Tienes {tareas.filter(tarea  => !tarea.completed).length} tareas pendientes  </p>  {/* contador de tareas pendientes */}

        <button onClick={borrarTodasLasTareas} style={{ color: 'white', backgroundColor: 'red' }}> Borrar todo  </button> {/* boton borrar todas las tareas */}


      </div>



    </div>





  );



}


export default listaDeTareas;
