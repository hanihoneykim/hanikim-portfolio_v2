import { Box, Divider, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import Header from "../components/HeaderContact";
import HeaderAbout from "../components/HeaderAbout";

export default function About() {
    return (
        <>
            <Box w="100%" h="100vh" bgColor={"gray.300"}>
                <HeaderAbout />
                <Box w="100%" h="90vh" pt={14} px={14}>
                    <Grid h="90%" gap={10} gridTemplateColumns={"1fr 1.5fr 1.5fr"} gridTemplateRows={"1fr 1fr"}>

                        <GridItem rowSpan={2}>
                            <Img mt={40} src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/IMG_5987.JPG" borderRadius='full' boxSize='300px' objectFit='cover' />    
                        </GridItem>

                        <GridItem p={8} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Flex>
                                <Text fontSize={24} fontWeight={900}  mb={4} color="white">"비즈니스 성장을 통해 배우는 개발자"</Text>
                            </Flex>
                            <Text fontSize={16} fontWeight={500} mb={3} color="white">회사의 성장과, 팀원들과의 협업을 최우선으로 합니다.</Text>
                            <Text fontSize={16} fontWeight={500} mb={3} color="white">수년의 프리랜서 조명 디자이너 경험으로 몸담은 회사・팀의 성장이 곧 나의 성장이고, 발전이 곧 나의 공부임을 깨달았습니다.</Text>
                            <Text fontSize={16} fontWeight={500} mb={1} color="white">회사에 속한 개발자로서 팀원들과 함께 협업하여 수치로 증명되는 웹 성능 개선에 기여하고 싶습니다.</Text>
                            
                        </GridItem>

                        <GridItem bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={30} fontWeight={900} m={6} color="white">✏️ Nomad Coders - Challenges</Text>
                            <Divider mb={2} />
                            <Box px={10} pt={2} w="100%">
                                <Text fontSize={14} fontWeight={700} mb={4} color="white">• 에어비앤비 클론 (Python, React) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4} color="white">• 웹스크래퍼 (Python, HTML, CSS) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4} color="white">• 유튜브 클론 (Node.js, JavaScript) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4} color="white">• Momentum 클론 (JavaScript, CSS) </Text>
                                <Text fontSize={14} fontWeight={700} mb={4} color="white">• 카카오톡 클론 (CSS, HTML)</Text>


                            </Box>
                        </GridItem>

                        <GridItem p={4} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={28} fontWeight={900}  m={3} color="white">👩🏻‍💻 Who Am I?</Text>
                            <Grid  px={10} mt={7} h="80%" gridTemplateColumns={"1fr 2fr"}>
                                <GridItem>
                                    <Text fontSize={18} fontWeight={700} mb={4} color="white">이름 :</Text>
                                    <Text fontSize={18} fontWeight={700} mb={8} color="white">교육 :</Text>
                                </GridItem>
                                <GridItem>
                                    <Text fontSize={18} fontWeight={700} mb={4} color="white">김하은</Text>
                                    <Text fontSize={18} fontWeight={700} mb={1} color="white">• 용인대학교 뮤지컬연극학과</Text>
                                    <Text fontSize={18} fontWeight={700} mb={1} ml={3} color="white">공연제작 및 무대 디자인 졸업</Text>
                                    <Text fontSize={18} fontWeight={700} mb={3} ml={3} color="white">(2014.03-2018.02)</Text>
                                    <Text fontSize={18} fontWeight={700} mb={1} color="white">• 노마드코더 챌린지 교육과정 수료</Text>
                                    <Text fontSize={18} fontWeight={700} mb={1} ml={3} color="white">(2022.02-2023.08)</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem p={4} bg={"rgba(0,0,0,0.3)"} borderRadius={"20px"}>
                            <Text fontSize={36} fontWeight={900}  m={4} color="white">💻 Skills</Text>
                            <Flex mt={8} justifyContent={"center"} alignItems={"center"}>
                                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/python-logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />   
                                <Img mx={14} src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/django_logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />   
                                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/nodejs_logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />
                            </Flex>
                            <Flex mt={10} justifyContent={"center"} alignItems={"center"}>
                                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/html_logo.png" borderRadius='full' boxSize='83px' objectFit='cover' />   
                                <Img mx={14} src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/css_logo.png" borderRadius='full' boxSize='83px' objectFit='cover' />   
                                <Img src="https://hanihoneykim.github.io/hanikim-portfolio_v2/images/javascript-logo.png" borderRadius='full' boxSize='75px' objectFit='cover' />      
                            </Flex>   
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            
            
        </>
        
    )
}