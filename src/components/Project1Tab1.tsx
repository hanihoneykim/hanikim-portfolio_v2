import { Box, Img, Text, VStack } from "@chakra-ui/react";

export default function Project1Tab1 () {
    return (
        <Box mt={6}>
            <VStack>
                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/curpage3.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">메인 화면 - 사진</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/curpage2.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">메인 화면 - 글</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/curpage6.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">사진 화면</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/curpage5.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">글 화면</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/curpage7.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">마이 페이지</Text>
            </VStack>
        </Box>
    )
}