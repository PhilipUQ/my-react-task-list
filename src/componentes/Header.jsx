
import React from 'react';


function Header() {


  console.log("rederizando el componente header"); 

//por ahora se manejara el estilo aqui y mas adelante se implementara un archivo css y tambien se usara un html mas semantico, para evitar tantos div 
  
  return (

    <div >

      <h1>Lista de Tareas</h1>


      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <div style={{flex: 1, marginRight: '10px'}}>

            <input type="text"  placeholder="agrega una nueva tarea" style={{width: '100%', height: '32px' }} />


        </div>

        <div>

            <button>+</button> {/* se agregara el icono de + o de agregar mas adelanta */}


        </div>

        

        
      </div>

      

      
    </div>


  );

}

export default Header;