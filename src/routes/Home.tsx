import { Box, Center, Divider, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Flex w="100%" h="100vh" justifyContent={"center"} alignItems={"center"}>
            <Box h={"34rem"} w={96} borderRadius={50} bgColor={"gray.300"}>
                <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={6}>
                    <Text fontWeight={"600"} fontSize={30} color="black">Hani Drop</Text>
                    <Text mt={4} fontWeight={"900"} fontSize={24} color="black">'항상 성실한 백엔드 개발자'</Text>
                    <Text fontWeight={"900"} fontSize={22} color="black">를 받으시겠습니까?</Text>
                    <Img mt={4} src="../images/IMG_5986.JPG" objectFit='cover' w={96} h={72} />
                </Flex>
                <Box bgColor={"rgba(0,0,0,0.2)"} w={"100%"} h={0.5} mt={4} />
                <Flex justifyContent={"space-between"} alignItems={"center"} px={16} >
                    <Link to="/about">
                        <Text fontWeight={"600"} fontSize={28} color="#1E90FF" ml={4}>예</Text>
                    </Link>
                    <Box bgColor={"rgba(0,0,0,0.2)"} w={0.5} h={"70px"} ml={10} />
                    <Link to="/about">
                        <Text fontWeight={"600"} fontSize={28} color="#1E90FF" >물론이죠</Text>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}