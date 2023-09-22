import { Box, Img, Text, VStack } from "@chakra-ui/react";

export default function Project2Tab1 () {
    return (
        <Box mt={6}>
            <VStack>
                <Img src="/images/palette3.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">메인 화면</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="/images/palette2.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">음악 스트리밍 화면</Text>
            </VStack>
            <VStack mt={12}>
                <Img src="/images/palette1.png" boxSize={"80%"} objectFit='contain' />
                <Text fontSize={16} fontWeight={"500"} color="black">음악 등록 화면</Text>
            </VStack>
        </Box>
    )
}