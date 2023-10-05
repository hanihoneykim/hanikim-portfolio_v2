import { Box, HStack, VStack } from "@chakra-ui/react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";
import React from "react";

export default function Index(){
    return (
        <HashRouter basename="/">
            <ChakraProvider theme={theme}>
                <VStack spacing={0}>
                    <Outlet/>
                </VStack>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/1" element={<Project1 />} />
                    <Route path="/projects/2" element={<Project2 />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ChakraProvider>
        </HashRouter>
        
        
    
    )
}