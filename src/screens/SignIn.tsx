import { Box, Heading, Icon, Image, useTheme, VStack } from 'native-base';
import { Envelope } from 'phosphor-react';
import { BasicImput } from '../components/BasicImput';

export function SignIn() {

  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Box>
        <Image
          source={require('../assets/torre-mago-logo.png')}
          alt='Torre do Mago'
          w={32}
          h={32}
        />
      </Box>

      <Heading color='white' fontSize='xl'>
        Acesse sua conta
      </Heading>

      <Box mt={5}>
        <BasicImput
        InputLeftElement={<Icon as={<Envelope/>} />}
        />
        <BasicImput my={5}/>
      </Box>
    </VStack>
  );
}