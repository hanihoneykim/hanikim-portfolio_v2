import { Box, HStack, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./HeaderContact";

export default function Root(){
    return (
    <VStack spacing={0}>
        <Outlet/>
    </VStack>
    )
}