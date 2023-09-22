import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";

export default function Project2Tab2 () {
    return (
        <Box mt={6} w="135vh" h="90vh">
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black">Target(대상)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={8}>● 10대 - 40대 까지의 넓은 연령층 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>(↓ 아이유가 모델인 우리은행 달력 배포에 전연령층 고객이 지대환 관심을 보이고 있다는 기사 (출처: 서울경제)) </Text>
                <Img src="/images/news1.png" boxSize={"40%"} objectFit='contain' ml={20} mt={2} />
            </Flex>
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black" mt={14}>Object(목표)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={8}>● NodeJS 를 이용한 백엔드 - 프론트엔드 연결의 직관적 경험 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● MongoDB 를 활용하여 데이터베이스 이해하기</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 구글링을 활용한 새로운 기술 구현법 익히기</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"start"}>
                <Text fontWeight={"700"} fontSize={20} color="black" mt={14}>Activities(구체적인 활동)</Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={8}>● 음악 플레이어 만들기 </Text>
                <Text fontWeight={"500"} fontSize={16} color="black" ml={20} mt={2}>● 음악 등록 기능 구현하기</Text>
            </Flex>
        </Box>
    )
}