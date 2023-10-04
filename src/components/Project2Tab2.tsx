import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";

export default function Project2Tab2 () {
    return (
        <Box mt={6} w="135vh" h="90vh">
            <Flex direction={"column"} justifyContent={"start"} mb={14}>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={22} color="whiteAlpha.800" bgColor={"rgba(0,0,0,0.6)"} w={40} h={10} borderRadius={10} mb={6}>Target(대상)</Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>● 10대 - 40대 까지의 넓은 연령층 </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>(↓ 아이유가 모델인 우리은행 달력 배포에 전연령층 고객이 지대환 관심을 보이고 있다는 기사 (출처: 서울경제)) </Text>
                <Img src="/images/news1.png" boxSize={"40%"} objectFit='contain' ml={20} mt={2} />
            </Flex>
            <Flex direction={"column"} justifyContent={"start"} mb={14}>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={22} color="whiteAlpha.800" bgColor={"rgba(0,0,0,0.6)"} w={40} h={10} borderRadius={10} mb={6}>Object(목표)</Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• Node.js를 이용한 직관적인 풀스텍 경험 </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• 재생바, 볼륨조절 기능 구현을 통해 특정 미디어파일에 접근, 조작하는 방법 학습</Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• AWS(S3)-MongoDB Atlas를 이용한 database 관리 경험</Text>
            </Flex>
        </Box>
    )
}