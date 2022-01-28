import { Flex, Image, Text, Button } from "@chakra-ui/react";
import axios from 'axios'
import { useState } from "react";

export default function Home() {
  const [sortudo, setSortudo] = useState('')

  function handleSearchName() {
    axios.get('/api/coquinha').then(response => {
      setSortudo(response.data.sortudo)
    })
  }

  return (
    <>
    <Flex
      flexDirection='column'
      bg='#BD2B26'
    >
      <Flex
        w='100%'
        h='60vh'
        margin='0 auto'
        maxW={1280}
        flexDirection='column'
        alignItems='center'
        mt='8'
      >
        <Image 
          w={[228, 418]}
          h={[75, 137]}
          src='/coquinha.png' 
        />
        <Text
          fontSize={['3xl', '5xl']}
          mt='10'
          textAlign='center'
        >
          Qual a coquinha da vez?
        </Text>
        <Text 
          fontWeight='bold' 
          fontSize={['5xl', '7xl']}
          mt='20'
        >
          { sortudo }
        </Text>
      </Flex>
    </Flex>
    <Flex p='0 1rem' w='100%' h='35vh' flexDirection='column' justifyContent='center' alignItems='center'>
      <Button 
        onClick={handleSearchName}
        p="4"
        w="100%"
        maxW={['300px', '400px']}
        h={['60px', '88px']}
        bg='#2B0605'
        fontSize={['2xl', '3xl']}
        alignContent='center'
        colorScheme='red'
      >
        Gerar sortudo!
      </Button> 
    </Flex>
    </>
  )
}
