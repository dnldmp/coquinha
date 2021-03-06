import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../service/api";

export default function Home() {
  const [sortudo, setSortudo] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSearchName() {
    setIsLoading(true)
    api.get('sortudo').then(response => {
      setSortudo(response.data.sortudo)
      setIsLoading(false)
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
        h='58vh'
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
          p='0 0.5rem'
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
        isLoading={isLoading}
      >
        Gerar sortudo!
      </Button> 
    </Flex>
    </>
  )
}
