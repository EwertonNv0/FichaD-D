import { Box, Button, Center, Checkbox, HStack, Icon, Input, Text, VStack } from 'native-base';
import { PencilLine } from 'phosphor-react-native';
import { AttributeBox } from '../components/AttributeBox';
import { AttributeContainer } from '../components/AttributeContainer';
import { Label } from '../components/Label';
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
            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Força' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
                <Checkbox value="atletics">Atletismo</Checkbox>
              </VStack>
            </HStack>

            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Destreza' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
                <Checkbox value="acrobatics">Acrobacia</Checkbox>
                <Checkbox value="stealth">Furtividade</Checkbox>
                <Checkbox value="prestidigitation">Prestidigitação</Checkbox>
              </VStack>
            </HStack>

            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Constituição' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
              </VStack>
            </HStack>

            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Inteligência' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
                <Checkbox value="arcanism">Arcanismo</Checkbox>
                <Checkbox value="history">História</Checkbox>
                <Checkbox value="investigation">Investigação</Checkbox>
                <Checkbox value="nature">Natureza</Checkbox>
                <Checkbox value="religion">Religião</Checkbox>
              </VStack>
            </HStack>

            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Sabedoria' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
                <Checkbox value="animalHandling">Adestrar Animais</Checkbox>
                <Checkbox value="intuition">Intuição</Checkbox>
                <Checkbox value="medicin">Medicina</Checkbox>
                <Checkbox value="perception">Percepção</Checkbox>
                <Checkbox value="survivor">Sobrevivência</Checkbox>
              </VStack>
            </HStack>

            <HStack justifyContent='space-around' mb={4}>
              <AttributeContainer w='25%' alignSelf='flex-start' title='Carisma' />

              <VStack w='70%'>
                <Checkbox value="testSave">Teste de Resistência</Checkbox>
                <Checkbox value="acting">Atuação</Checkbox>
                <Checkbox value="cheat">Enganação</Checkbox>
                <Checkbox value="intimidation">Intimidação</Checkbox>
                <Checkbox value="persiation">Persuasão</Checkbox>
              </VStack>
            </HStack>
          </VStack>
        </ScrollTemplate>
      </WhiteTemplate>
    </PrimaryTemplate>
  );
}