import { Box } from "@chakra-ui/react";
import HeaderContact from "../components/HeaderContact";
import Header from "../components/HeaderContact";

export default function Contact() {
    return (
        <Box w="100%" h="100vh" bgColor={"gray.300"}>
            <HeaderContact/>
            <h1>contact</h1>
        </Box>
    )
}