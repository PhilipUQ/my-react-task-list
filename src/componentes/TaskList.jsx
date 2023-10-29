
import React, { useState, useEffect } from 'react';

import CustomForm from './CustomForm';

import Tarea from './Task';

 

import useFuncionalidad from '../hooks/useFuncionalidad';





function listaDeTareas() {

  const { tareas, agregarNuevaTarea, borrarTarea, editarTarea, tituloDeTarea, setTituloDeTarea, descripcionDeTarea, setDescripcionDeTarea, borrarTodasLasTareas } = useFuncionalidad();


  


  const botonDisparador = () => {

    agregarNuevaTarea();

  };


  
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

      const formStyle = {

        position: 'fixed',  
        top: '0',  
        right: '0',  
        margin: '1rem',  
        padding: '1rem',  
        boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',  
        borderRadius: '8px' 

      };
    
    
      return (
        <div>

          <div style={formStyle}>


            <h1> Formulario </h1>


            <CustomForm
            
            setTituloDeTarea={setTituloDeTarea}

            setDescripcionDeTarea={setDescripcionDeTarea}

            disparadorGuardarTarea={botonDisparador}


            />

          </div>    

       
    
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