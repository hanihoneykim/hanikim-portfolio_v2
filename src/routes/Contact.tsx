import { Box, Flex, Icon, Img, Text } from "@chakra-ui/react";
import HeaderContact from "../components/HeaderContact";
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Contact() {
    return (
        <Box w="100%" h="100vh" bgColor={"gray.300"}>
            <HeaderContact/>
            <Flex justifyContent="center" alignItems="center" w="100%" h="85vh" direction={"column"}>
                <Flex justifyContent="start" alignItems="center" direction={"column"} mb={10}>
                    <Img src="/images/IMG_5987.JPG" borderRadius='full' boxSize={40} objectFit='cover' />    
                    <Text mt={2} color="black" fontWeight={"700"} fontSize={30}>Hani Kim</Text>
                    <Text color="black" fontWeight={"700"} fontSize={24}>haeehani@gmail.com</Text>
                </Flex>
                <Flex bgColor={"black"} borderRadius={20} w={"34rem"} h={16} justifyContent="start" alignItems="center">
                    <ChakraLink href="https://github.com/hanihoneykim" target="_blank">
                        <Flex pl={10} justifyContent="start" alignItems="center">
                            <Img src="/images/github.png" boxSize={"10%"} objectFit='contain' />
                            <Text color="white" fontWeight={"700"} fontSize={20} ml={16}>github.com/hanihoneykim</Text>
                        </Flex>
                    </ChakraLink>
                </Flex>
                <Flex bgColor={"#22c998"} borderRadius={20} w={"34rem"} h={16} justifyContent="start" alignItems="center" mt={4}>
                    <ChakraLink href="https://velog.io/@hanihoneykim" target="_blank">
                        <Flex pl={10} justifyContent="start" alignItems="center">
                            <Img src="/images/velog.jpeg" boxSize={"10%"} objectFit='contain' />
                            <Text color="white" fontWeight={"700"} fontSize={20} ml={16}>velog.io/@hanihoneykim</Text>
                        </Flex>
                    </ChakraLink>
                </Flex>
            
            </Flex>
        </Box>
    )
}
