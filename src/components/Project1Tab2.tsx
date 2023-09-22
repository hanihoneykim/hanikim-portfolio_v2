import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";

export default function Project2Tab2 () {
    return (
        <Box mt={6} w="135vh" h="100vh">
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black">Target(대상)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={8}>● 자신을 표현하기 좋아하는 MZ세대 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 글과 사진을 활용한 작품활동을 하는 작가 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>(↓ 사진과 글을 다룬 SNS 사이트가 상이해 Link Tree를 활용하는 작가들) </Text>
                <Flex justifyContent={"start"}>
                    <Img src="/images/linktree1.jpg" boxSize={"20%"} objectFit='contain' ml={20} mt={2} />
                    <Img src="/images/linktree2.jpg" boxSize={"20%"} objectFit='contain' ml={2} mt={2} />
                </Flex>
            </Flex>
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black" mt={14}>Object(목표)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● Django 로 백엔드 구현하기 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● React 로 프론트 엔드 구현하기 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 백엔드 - 프론트엔드 연결의 경험 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 구글링을 활용한 새로운 기술 구현법 익히기</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black" mt={14}>Activities(구체적인 활동)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={8}>● photo / text / comment / user 모델로 sns 기능 구현하기</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 마이 페이지 구현하기</Text>
            </Flex>
        </Box>
    )
}