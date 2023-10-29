
import React from 'react';

import { ChakraProvider, useColorMode, Button } from "@chakra-ui/react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header'; 

import Home from './router/Home'; 

import SobreNosotros from './router/SobreNosotros'; 

import Menu from './router/Menu';

import Tareas from './router/Tareas';

import theme from './styles/modo';

import './App.css';




function App() {

  return (

    <ChakraProvider theme={theme}>

      <ColorSwitcher />

      <Router>

        <nav style={{ textAlign: 'center', position: 'relative' }}>

          <Header />
          <Menu />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/tareas" element={<Tareas />} />

            <Route path="/sobrenosotros" element={<SobreNosotros />} />


          
          </Routes>

        </nav>

      </Router>

    </ChakraProvider>


  );


}

const ColorSwitcher = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (

    <Button onClick={toggleColorMode}>

      Cambiar a modo {colorMode === "light" ? "Oscuro" : "Claro"}

    </Button>

  );


  
};



export default App;



