import { Box, Divider, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import Header from "../components/HeaderContact";
import HeaderAbout from "../components/HeaderAbout";

export default function About() {
    return (
        <>
            <Box w="100%" h="100vh" bgColor={"gray.300"}>
                <HeaderAbout />
                <Box w="100%" h="80vh" pt={14} px={14}>
                    <Grid h="100%" gap={10} gridTemplateColumns={"1fr 1.5fr 1.5fr"} gridTemplateRows={"1fr 1fr"}>

                        <GridItem rowSpan={2}>
                            <Img mt={40} src="/images/IMG_5987.JPG" borderRadius='full' boxSize='300px' objectFit='cover' />    
                        </GridItem>

                        <GridItem p={8} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Flex>
                                <Text fontSize={30} fontWeight={900}  m={4}>"배우는 개발자"</Text>
                                <Text fontSize={30} fontWeight={900}  m={4}>"성실한 개발자"</Text>
                            </Flex>
                            <Divider/>
                            
                        </GridItem>

                        <GridItem bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={36} fontWeight={900} m={2}>✏️ Education</Text>
                            <Box px={10} pt={2} w="100%">
                                <Text fontSize={18} fontWeight={700} mb={4}>Nomad Coders - Challenges</Text>
                                <Divider mb={4} />
                                <Text fontSize={14} fontWeight={700} mb={4}>● 에어비앤비 클론 (파이썬, 리액트) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4}>● 웹스크래퍼 (파이썬, HTML, CSS) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4}>● 유튜브 클론 (노드JS, JS) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4}>● Momentum 클론 (JS, CSS) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4}>● 카카오톡 클론 (CSS, HTML) </Text>


                            </Box>
                        </GridItem>

                        <GridItem p={4} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={36} fontWeight={900}  m={4}>👩🏻‍💻 Who Am I?</Text>
                            <Grid  px={10} mt={10} h="80%" gridTemplateColumns={"1fr 2fr"}>
                                <GridItem>
                                    <Text fontSize={18} fontWeight={700} mb={4}>이름 :</Text>
                                    <Text fontSize={18} fontWeight={700} mb={4}>생년월일 :</Text>
                                    <Text fontSize={18} fontWeight={700} mb={8}>학력 :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text fontSize={18} fontWeight={700} mb={4}>김하은</Text>
                                    <Text fontSize={18} fontWeight={700} mb={4}>1995년 03월 11일</Text>
                                    <Text fontSize={18} fontWeight={700} mb={1}>용인대학교 뮤지컬연극학과</Text>
                                    <Text fontSize={18} fontWeight={700} mb={4}>공연제작 및 무대 디자인 졸업</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem p={4} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={36} fontWeight={900}  m={4}>💻 Skills</Text>
                            <Flex mt={8} justifyContent={"center"} alignItems={"center"}>
                                <Img src="/images/python-logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />   
                                <Img mx={14} src="/images/django_logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />   
                                <Img src="/images/nodejs_logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />
                            </Flex>
                            <Flex mt={10} justifyContent={"center"} alignItems={"center"}>
                                <Img src="/images/html_logo.png" borderRadius='full' boxSize='83px' objectFit='cover' />   
                                <Img mx={14} src="/images/css_logo.png" borderRadius='full' boxSize='83px' objectFit='cover' />   
                                <Img src="/images/javascript-logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />      
                            </Flex>   
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            
            
        </>
        
    )
}