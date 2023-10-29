
import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Flex, Spacer } from '@chakra-ui/react';

import '../styles/Menu.css';  


function Menu() {
  
  const estiloMenu = {
    background: 'gray.200',
    padding: { base: '2', md: '4' },
    borderRadius: 'md',
    boxShadow: 'md'

  };

  const linkStyles = {

    position: 'relative', 
    fontWeight: 'bold',
    fontSize: { base: 'xl', md: '2xl' },
    color: 'teal.500',
    borderRadius: 'full',
    padding: '1rem 2rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    _hover: {
      bg: 'teal.400',
      color: 'white',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 10px -5px teal.400',
    },
    _active: {
      bg: 'yellow', 
      color: 'black', 
      '.line': {
        animation: 'line-animation 0.4s ease-out both'  

      }



    },


  };

  // Añade líneas de acción dentro de cada Link
  const ActionLines = () => (
    <>
      <div className="line" style={{ transform: 'rotate(45deg)' }}></div>
      <div className="line" style={{ transform: 'rotate(-45deg)' }}></div>
      <div className="line" style={{ transform: 'rotate(90deg)' }}></div>
      <div className="line" style={{ transform: 'rotate(0deg)' }}></div>
    </>


  );

  return (
    <Flex as="nav" p={4} sx={estiloMenu} justifyContent="center">
      
      <Link as={RouterLink} to="/" {...linkStyles}>

        <ActionLines />  {/* Líneas de acción */}

        Home

      </Link>



      <Spacer />

      <Link as={RouterLink} to="/tareas" {...linkStyles}>

        <ActionLines />  {/* Líneas de acción */}

        Tareas

      </Link>
      
      <Spacer />

      <Link as={RouterLink} to="/sobrenosotros" {...linkStyles}>

        <ActionLines />  {/* Líneas de acción */}

        Sobre Nosotros

      </Link>

    </Flex>



  );


}

export default Menu;


