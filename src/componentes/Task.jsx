
import React from 'react';



function Task(props) { 

  console.log(`cargando las tareas ${props.name}`); 


  return (



    <div style={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center' }}>


        <div style={{display: 'flex', alignItems: 'center' }}> 



        <input type="checkbox" />

        <p>{props.name}</p> {/* se imprime solo la propiedad name del array de tareas en caso tal de que agregemos otras propiedades */}



        </div>




        <div style={{display: 'flex', gap: '1px' }}> 

        
        <button>Edit</button> {/* se agregara el icono de editar mas adelante y se manejaran los estilos con clases en css */}

        <button>Delete</button> {/* se agregara el icono de borrar mas adelante y se manejaran los estilos con clases en css */}



        </div>







    </div>

  );

}

export default Task;