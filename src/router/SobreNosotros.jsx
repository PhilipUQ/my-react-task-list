import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, Container } from '@chakra-ui/react';
import '../styles/SobreNosotros.css';

function SobreNosotros() {

  return (

    <Container maxW="container.md"  p="6" borderRadius="md" >

      <Box textAlign="center" mb={6}>

        <Heading 

          as="h1" 
          size="2xl" 
          letterSpacing={"-.1rem"} 
          color="cyan.400"
          className="glowing-text" // Añadir la clase aquí
        >
          Sobre Nosotros

        </Heading>

      </Box>

      <Text fontSize="xl" mb={6} fontStyle="italic" color="gray.300">

        Esta aplicación es una lista de tareas que te ayudará a optimizar tu tiempo, recordar las cosas que tienes pendientes y gestionar actividades, ya sea del trabajo o de la rutina.
      </Text>

      <Text fontSize="lg" mb={4} fontWeight="bold" color="teal.300" textAlign="left">

        Estas son sus funcionalidades:

      </Text>

      <UnorderedList pl={8} spacing={3} color="purple.200" textAlign="left">

        <ListItem fontSize="md">Visualizar tus tareas a tiempo real</ListItem>

        <ListItem fontSize="md">Agregar nuevas tareas para mantenerte actualizado</ListItem>

        <ListItem fontSize="md">Editar las tareas que ya tienes</ListItem>

        <ListItem fontSize="md">Borrar las tareas que ya no necesites</ListItem>

      </UnorderedList>


      <Text mt={6} fontSize="lg" color="orange.300">

        Para crear la aplicación se hizo uso de las tecnologías React, React Forms, React Router Dom y localStorage.

      </Text>

    </Container>

  );

}


export default SobreNosotros;
