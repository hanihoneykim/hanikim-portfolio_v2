import { Box, Divider, Flex, Img, Text, VStack } from "@chakra-ui/react";
import Header from "../components/HeaderContact";
import HeaderProjects from "../components/HeaderProjects";
import {HiNewspaper} from "react-icons/hi";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from '@chakra-ui/react';


export default function Project2() {
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
                            <Text color="black" fontWeight={"700"}>ICE CREAM</Text>
                        </Flex>
                    </Link>
                    
                </Flex>


                {/* project 1 */}
                <Flex p={10} h="117%" w="100%">
                    <Box borderRadius={20} h="100%" w="100%" bgColor="rgba(0,0,0,0.2)">
                        <Flex alignItems={"center"} p={4}>
                                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"red.600"} ml={4} />
                                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"yellow.600"} ml={2} />
                                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"green.600"} ml={2} />
                            </Flex>
                            <VStack w="90%" h="90%" ml={16} overflow={"auto"} overflowY={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                                <Box my={4}>
                                    <Text fontSize={20} fontWeight={"700"} color="black">[음악 스트리밍 서비스]</Text>
                                    <Text fontSize={56} fontWeight={"700"} color="black">ICE CREAM MUSIC</Text>
                                    <ChakraLink href="https://example.com" target="_blank">
                                        <Text fontSize={20} fontWeight={"700"} color="black">URL :</Text>
                                    </ChakraLink>
                                </Box>
                                <Divider bgColor="black"/>
                            
                            </VStack>
                    </Box>
                </Flex>
                

            </Flex>
            
        </Box>
        
    )
}