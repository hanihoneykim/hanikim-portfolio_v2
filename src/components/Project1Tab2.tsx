import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";

export default function Project2Tab2 () {
    return (
        <Box mt={6} w="135vh" h="100vh">
            <Flex direction={"column"} justifyContent={"start"} mb={14}>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={22} color="whiteAlpha.800" bgColor={"rgba(0,0,0,0.6)"} w={40} h={10} borderRadius={10}>Target(대상)</Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={8}>• 자신을 표현하기 좋아하는 MZ세대 </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• 글과 사진을 활용한 작품활동을 하는 작가 </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>(↓ 사진과 글을 다룬 SNS 사이트가 상이해 Link Tree를 활용하는 작가들) </Text>
                <Flex justifyContent={"start"}>
                    <Img src="/images/linktree1.jpg" boxSize={"20%"} objectFit='contain' ml={20} mt={2} />
                    <Img src="/images/linktree2.jpg" boxSize={"20%"} objectFit='contain' ml={2} mt={2} />
                </Flex>
            </Flex>
            <Flex direction={"column"} justifyContent={"start"} mb={14}>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={22} color="whiteAlpha.800" bgColor={"rgba(0,0,0,0.6)"} w={40} h={10} borderRadius={10} mb={6}>Object(목표)</Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• 한가지 게시글 CRUD를 넘어, 게시글을 CRUD 하며 다른 모델을 같이 CRUD 하는 방법 학습 (태그, 북마크, 팔로워/팔로우, 좋아요 등) </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• Serializers를 활용한 다양한 get 화면 구현 (사진 미리보기/ 전체보기, 마이페이지 등) </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• ChakraUI를 활용한 보다 효율적인 프론트엔드 구현 </Text>
                <Text fontWeight={"500"} fontSize={18} color="black" ml={20} mt={2}>• 프론트-백 패치 시 다양한 모습의 array가 들어왔을 때 원하는 데이터에 접근하는 법 학습</Text>
            </Flex>
        </Box>
    )
}