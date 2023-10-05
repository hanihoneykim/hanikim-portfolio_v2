import { Box, HStack, VStack } from "@chakra-ui/react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";

export default function App(){
    return (
        <>
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
        </>
    
    )
}