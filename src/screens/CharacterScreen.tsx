import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import { PencilLine } from 'phosphor-react-native';
import { AbilityBox } from '../components/AbilityBox';
import { AttributeContainer } from '../components/AttributeContainer';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import { useState } from 'react';

export function CharacterScreen() {
  
  const [strAtt, setStrAtt] = useState('');
  const [dexAtt, setDexAtt] = useState('');
  const [conAtt, setConAtt] = useState('');
  const [intAtt, setIntAtt] = useState('');
  const [wisAtt, setWisAtt] = useState('');
  const [chaAtt, setChaAtt] = useState('');

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
              <AttributeContainer atributo={strAtt} setAtributo={setStrAtt} w='25%' alignSelf='flex-start' title='Força' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={strAtt} />
                <AbilityBox title='Atletismo' atributo={strAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={dexAtt} setAtributo={setDexAtt} w='25%' alignSelf='flex-start' title='Destreza' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={dexAtt} />
                <AbilityBox title='Acrobacia' atributo={dexAtt} />
                <AbilityBox title='Furtividade' atributo={dexAtt} />
                <AbilityBox title='Prestidigitação' atributo={dexAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={conAtt} setAtributo={setConAtt} w='25%' alignSelf='flex-start' title='Constituição' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={conAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={intAtt} setAtributo={setIntAtt} w='25%' alignSelf='flex-start' title='Inteligência' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={intAtt} />
                <AbilityBox title='Arcanismo' atributo={intAtt} />
                <AbilityBox title='História' atributo={intAtt} />
                <AbilityBox title='Investigação' atributo={intAtt} />
                <AbilityBox title='Natureza' atributo={intAtt} />
                <AbilityBox title='Religião' atributo={intAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={wisAtt} setAtributo={setWisAtt} w='25%' alignSelf='flex-start' title='Sabedoria' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={wisAtt} />
                <AbilityBox title='Adestrar Animais' atributo={wisAtt} />
                <AbilityBox title='Intuição' atributo={wisAtt} />
                <AbilityBox title='Medicina' atributo={wisAtt} />
                <AbilityBox title='Percepção' atributo={wisAtt} />
                <AbilityBox title='Sobrevivência' atributo={wisAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' pt={4}>
              <AttributeContainer atributo={chaAtt} setAtributo={setChaAtt} w='25%' alignSelf='flex-start' title='Carisma' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resistência' atributo={chaAtt} />
                <AbilityBox title='Atuação' atributo={chaAtt} />
                <AbilityBox title='Enganação' atributo={chaAtt} />
                <AbilityBox title='Intimidação' atributo={chaAtt} />
                <AbilityBox title='Persuasão' atributo={chaAtt} />
              </VStack>
            </HStack>
          </VStack>
        </ScrollTemplate>
      </WhiteTemplate>
    </PrimaryTemplate>
  );
}