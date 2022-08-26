import React from 'react'
import { Box, Image, Text, Flex} from '@chakra-ui/react'
import styles from './home.module.css'
import {ArrowForwardIcon } from '@chakra-ui/icons'

const Learning = () => {
  const LearnObj=[
    {img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg",
    heading:"Guides and templates",desc:"Learn how to introduce your team to time tracking and make the most of Harvest."},
    {img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg",
    heading:"Webinars",desc:"Watch a quick intro to Harvest or sign up for a live session with one of our Experts."},
    {img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg",
    heading:"Help Center",desc:"Find the answers to all your questions or get in touch with one of our friendly Experts."}
  ]
  return (
    <Box className={styles.bgimg}>
         <Box className={styles.border}></Box>
    <Flex width="88%" margin="auto" marginTop="6rem" gap="10rem" justifyContent="space-between" >
      <Box width="30rem"marginTop="6rem">
      <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">LEARNING RESOURCES</Text>
       <Text fontSize="39px" className={styles.feature_heading} lineHeight="48px">Supporting your team along the way</Text>
       </Box>
      <Box width="40rem">
        {LearnObj.map((el)=>(
          <Flex className={styles.learning_box} >
           <Image  className={styles.learning_box_img} src={el.img} />
            <Flex direction="column">
                <Text className={styles.feature_box_heading}>{el.heading}</Text>
                   <Text className={styles.feature_box_desc}>{el.desc}</Text>
                  </Flex>
        <ArrowForwardIcon w={8} h={8} marginTop="2rem" color="#fa5d00"/>
        </Flex>
        ))}
     </Box>
    </Flex>
    <Box className={styles.border} width="102%" marginLeft="-1%" marginTop="6rem"></Box>
    </Box>
  )
}

export default Learning