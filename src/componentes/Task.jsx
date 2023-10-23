
import React, { useState } from 'react';


//funcion Tarea recibe como parametros la tarea, el indie y la funciones borrarTarea y editarTarea

function Tarea({ tarea, indice,  borrarTarea, editarTarea }) {

    // los estados para la edicion de la tarea

  const [tareaAEdicion, setTareaAEdicion] = useState(false);

  const [nuevoTitulo, setNuevoTitulo] =  useState(tarea.title);

  const [nuevaDescripcion, setNuevaDescripcion] = useState(tarea.description);



    //se pasa una tarea a edicion
  const botonEditarTarea = () => {

    setTareaAEdicion(true);

    console.log("edicion de tarea");


  };







  // se actualiza el titulo y la descripcion de las tareas y se pasa la edicion de la tarea a falso

  const botonGuardarTarea = () => {


    //se valida que los inputbox no esten vacios

    if (nuevoTitulo !== '' && nuevaDescripcion !== '') {


      editarTarea(indice, nuevoTitulo, nuevaDescripcion);

      setTareaAEdicion(false);

      console.log("la edicion se completo");


    } else {


      console.log("hay campos vacios no se puede agregar la tarea"); // alerta en consola


    }

    


  };





  // se descartan los cambios y se regresa al estado original de la tarea, tambien desactiva al edicion pasandola a false

  const botonDescartarCambios = () =>  {


    setTareaAEdicion(false); 

    setNuevoTitulo(tarea.title);

    setNuevaDescripcion(tarea.description);

    console.log ("se descartaron los cambios");



  };




    //se hace el renderizado del componente 

  return (

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black', borderRadius: '10px', margin: '5px', padding: '10px' }}>



      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}> 


      {/* se maneja la logica condicional para la edicion de las tareas */}

        {tareaAEdicion ? (
          <>
            <input type="text" value={nuevoTitulo} onChange={e => setNuevoTitulo(e.target.value)} />

            <input type= "text" value={nuevaDescripcion} onChange={e => setNuevaDescripcion(e.target.value)} />


          </>

        ) : (
          <>
            <input type="checkbox"  checked={tarea.completed} onChange={() => {

              tarea.completed = !tarea.completed;

              editarTarea(indice, tarea.title, tarea.description);


            }} />

            <p style={{textDecoration: tarea.completed ? 'line-through' : 'none'}}> {tarea.title} </p> 

            <p style={{textDecoration: tarea.completed ? 'line-through' : 'none'}}> {tarea.description}  </p> 



          </>

        )}



      </div>




      
      <div style={{ display: 'flex', gap: '10px' }}>


        {tareaAEdicion ? (


          <>

            <button onClick={botonGuardarTarea}> Guardar </button> {/* boton guardar cambios */}

            <button onClick={botonDescartarCambios}> Descartar </button> {/* boton descartar cambios */}



          </>


        ) : (

          <button onClick={botonEditarTarea}> Editar </button> /* boton de edicion */



        )}




        <button onClick={()  => borrarTarea(indice)}> Borrar  </button> {/* boton para eliminar la tarea */}


      </div>


    </div>

  );




}



export default Tarea;