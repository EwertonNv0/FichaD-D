import { Box, Button, Checkbox, HStack, Icon, Text, VStack } from 'native-base';
import { PencilLine } from 'phosphor-react-native';
import { AbilityBox } from '../components/AbilityBox';
import { AttributeContainer } from '../components/AttributeContainer';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';

export function CharacterScreen() {
  return (
    <PrimaryTemplate>
      <HStack
        justifyContent='center'
        alignItems='center'
      >
        <Text fontWeight='bold' color='white' alignSelf='center' fontSize='2xl' my={2}>
          Nome do Personagem
        </Text>

        <Box ml={2}>
          <Button
            px={2}
            py={2}
            bg='transparent'
            borderRadius='full'
            _pressed={{
              backgroundColor: 'gray.400'
            }}
          >
            <Icon as={<PencilLine color='white' />} />
          </Button>
        </Box>
      </HStack>

      <WhiteTemplate>
        <ScrollTemplate>
          <VStack w='full'>
            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Força' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
                <AbilityBox title='Atletismo' />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Destreza' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
                <AbilityBox title='Acrobacia' />
                <AbilityBox title='Furtividade' />
                <AbilityBox title='Prestidigitação' />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Constituição' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Inteligência' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
                <AbilityBox title='Arcanismo' />
                <AbilityBox title='História' />
                <AbilityBox title='Investigação' />
                <AbilityBox title='Natureza' />
                <AbilityBox title='Religião' />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Sabedoria' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
                <AbilityBox title='Adestrar Animais' />
                <AbilityBox title='Intuição' />
                <AbilityBox title='Medicina' />
                <AbilityBox title='Percepção' />
                <AbilityBox title='Sobrevivência' />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' pt={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Carisma' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' />
                <AbilityBox title='Atuação' />
                <AbilityBox title='Enganação' />
                <AbilityBox title='Intimidação' />
                <AbilityBox title='Persuasão' />
              </VStack>
            </HStack>
          </VStack>
        </ScrollTemplate>
      </WhiteTemplate>
    </PrimaryTemplate>
  );
}