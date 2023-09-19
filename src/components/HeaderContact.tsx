import { Box, Center, Divider, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaUserAlt, FaCode, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderContact() {
    return (
        <HStack justifyContent={"space-between"} w="100%" h={14} bg="gray.500">
            <Flex alignItems={"center"}>
                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"red.600"} ml={4} />
                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"yellow.600"} ml={2} />
                <Box w={3.5} h={3.5} borderRadius={50} bgColor={"green.600"} ml={2} />

                <Link to="/about">
                    <HStack mt={2} ml={24} w={52} h="12" bgColor={"gray.400"} borderTopRadius={20}>
                        <Icon as={FaUserAlt} fontSize={22} ml={6} color="gray.500"/>
                        <Text ml={4} fontSize={20} fontWeight={"500"} color="black">About</Text>
                    </HStack>
                </Link>
                <Link to="/projects">
                    <HStack mt={2} ml={3} w={52} h="12" bgColor={"gray.400"} borderTopRadius={20}>
                        <Icon as={FaCode} fontSize={22} ml={6} color="gray.500"/>
                        <Text ml={4} fontSize={20} fontWeight={"500"} color="black">Projects</Text>
                    </HStack>
                </Link>
                <Link to="/contact">
                    <HStack mt={2} ml={3} w={52} h="12" bgColor={"gray.300"} borderTopRadius={20}>
                        <Icon as={FaPhoneAlt} fontSize={22} ml={6} color="gray.500"/>
                        <Text ml={4} fontSize={20} fontWeight={"500"} color="black">Contact</Text>
                    </HStack>
                </Link>
            </Flex>
        </HStack>
    )
}