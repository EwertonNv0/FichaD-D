import { Box, Button, Heading, Icon, Image, Text, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react';
import { BasicImput } from '../components/BasicImput';
import { LoginRegister } from '../components/LoginRegister';

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
          placeholder='Email'
        />

        <BasicImput
          my={5}
          placeholder='Senha'
          secureTextEntry
        />

        <LoginRegister
          title="Entrar"
        />

        <Button
          mt={5}
          py={0}
          borderWidth={0}
          bg='transparent'
          _pressed={{
            bg: 'gray.400'
          }}
        >
          <Text fontSize='sm' color='gray.200'>
            Não possuo conta.
          </Text>
        </Button>
      </Box>
    </VStack>
  );
}