import { Box, Flex, Img, Text } from "@chakra-ui/react";
import Header from "../components/HeaderContact";
import HeaderProjects from "../components/HeaderProjects";
import {HiNewspaper} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <Box w="100%" h="100vh" bgColor={"gray.300"}>
            <HeaderProjects/>
            <Flex w="100%" h="80vh">
                <Flex direction={"column"} alignItems={"center"} h="50vh" w={48} mt={10}>
                    <Link to="/projects/1">
                        <Flex direction={"column"} alignItems={"center"}>
                            <Img src="/images/photo.jpeg" borderRadius='full' boxSize={"120px"} objectFit='cover' />
                            <Text mt={2} color="black" fontWeight={"700"}>[SNS]</Text>
                            <Text color="black" fontWeight={"700"}>CURPAGE</Text>
                        </Flex>
                    </Link>
                    
                    <Link to="/projects/2">
                        <Flex direction={"column"} alignItems={"center"}>
                            <Img mt={10} src="/images/lp2.png" boxSize={32} objectFit='cover' />
                            <Text mt={2} color="black" fontWeight={"700"}>[Music Streaming]</Text>
                            <Text color="black" fontWeight={"700"}>Palette</Text>
                        </Flex>
                    </Link>
                    
                </Flex>


                {/* project 1 */}
                <Flex p={10} h="117%" w="100%">
                    <Box borderRadius={20} h="100%" w="100%">
                        
                    </Box>
                </Flex>

            </Flex>
            
        </Box>
        
    )
}