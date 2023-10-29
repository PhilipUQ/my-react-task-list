import React from 'react';

import { Link } from 'react-router-dom';



function Menu() {

  const estiloMenu = {

    display: 'flex',
    justifyContent: 'space-around',
    background: '#eee',
    padding: '10px',
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',  
    borderRadius: '8px' 

  };

  return (

    <nav style={estiloMenu}>

      <Link to="/">Home</Link>

      <Link to="/tareas">Tareas</Link>

      <Link to="/sobrenosotros">Sobre Nosotros</Link>

    </nav>


  );
  

}

export default Menu;
