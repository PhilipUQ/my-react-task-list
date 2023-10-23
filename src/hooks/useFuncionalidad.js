
import { useState, useEffect } from 'react';



const useFuncionalidad = () => {


    const [tareas, setTareas] = useState([]);

    const [tituloDeTarea, setTituloDeTarea] = useState('');
  
    const [descripcionDeTarea, setDescripcionDeTarea] = useState('');





  

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




      // funcion para borrar todas las tareas 

    const borrarTodasLasTareas = () => {

        setTareas([]); 
    
        localStorage.removeItem('tareas');
    
        console.log("todad la tareas fueron eliminasdas");
    
    };
    
    
    return { tareas, agregarNuevaTarea, borrarTarea, borrarTodasLasTareas, editarTarea, tituloDeTarea, setTituloDeTarea, descripcionDeTarea, setDescripcionDeTarea };

    
}


export default useFuncionalidad;
