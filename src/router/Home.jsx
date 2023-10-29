
import React from 'react';

import { Box, Heading } from '@chakra-ui/react';


const Home = () => {
  

  // Definimos un estilo personalizado para nuestro título
  const customTitleStyle = {

    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000',
    marginBottom: '20px',
    marginTop: '20px',
    letterSpacing: '1px',
    transition: 'all 0.3s ease'

  };

  return (
    
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bg="transparent">
      
    
      <Heading as="h1" size="2xl" style={customTitleStyle}>

        Bienvenido a Mi Aplicación de Tareas

      </Heading>


    </Box>

  );

};


export default Home;
