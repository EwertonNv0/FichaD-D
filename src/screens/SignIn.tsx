import { Box, Button, Heading, Icon, Image, Text, useTheme, VStack } from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Envelope, Key } from 'phosphor-react-native';
import { BasicInput } from '../components/BasicInput';
import { LoginRegister } from '../components/LoginRegister';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';

export function SignIn() {

  const { colors } = useTheme();

  return (
    <PrimaryTemplate>
      <VStack alignItems='center' px={8} pt={24}>
        <Box>
          <Image
            source={require('../assets/logo.png')}
            alt='Torre do Mago'
            w={24}
            h={24}
          />
        </Box>

        <Heading color='white' fontSize='xl' mt={2}>
          Acesse sua conta
        </Heading>

        <Box mt={5}>
          <BasicInput
            placeholder='Email'
            InputLeftElement={<Icon as={<Envelope color={colors.gray['200']} />} ml={4} />}
            isRequired
          />

          <BasicInput
            my={5}
            placeholder='Senha'
            InputLeftElement={<Icon as={<Key color={colors.gray['200']} />} ml={4} />}
            secureTextEntry
            isRequired
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
    </PrimaryTemplate>
  );
}