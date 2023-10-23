
import React, { useState, useEffect } from 'react';

import Tarea from './Task';

import useFuncionalidad from '../hooks/useFuncionalidad';




function listaDeTareas() {


  const { tareas, agregarNuevaTarea, borrarTarea, editarTarea, tituloDeTarea, setTituloDeTarea, descripcionDeTarea, setDescripcionDeTarea, borrarTodasLasTareas } = useFuncionalidad();


  
  //funcion para actualizar el valor del titulo en el estado

  const modificacionTitulo = (e) => {

    setTituloDeTarea(e.target.value);

  };
  

  
      //funcion para cambiar el valor de la descripcion en el estado

      const modificacionDescripcion = (e) => {

        setDescripcionDeTarea(e.target.value);
    
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
    
