import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import { PencilLine } from 'phosphor-react-native';
import { AbilityBox } from '../components/AbilityBox';
import { AttributeContainer } from '../components/AttributeContainer';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { getData, storeCharacter } from '../services/CharacterService';
import { CharacterData } from '../interfaces/CharacterData';

export function CharacterScreen({ route, navigation }) {

  const { id } = route.params
  const [character, setCharacter] = useState<CharacterData>({} as CharacterData)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)

  const updateAttributes = (character) => {
    if (character.attributes) {
      setStrAtt(character.attributes.strenth)
      setDexAtt(character.attributes.dexterity)
      setConAtt(character.attributes.constituition)
      setIntAtt(character.attributes.inteligency)
      setWisAtt(character.attributes.wisdom)
      setChaAtt(character.attributes.charisma)
    }
  }

  const saveData = () => {

    if (isLoadingUpdate) return

    setIsLoadingUpdate(true)

    const attributes = {
      strenth: strAtt,
      dexterity: dexAtt,
      constituition: conAtt,
      inteligency: intAtt,
      wisdom: wisAtt,
      charisma: chaAtt,
    }

    const charUpdated = {
      ...character,
      attributes: attributes
    }

    storeCharacter(id, charUpdated)
      .then(() => {
        setIsLoadingUpdate(false)
      })
  }

  const [strAtt, setStrAtt] = useState('');
  const [dexAtt, setDexAtt] = useState('');
  const [conAtt, setConAtt] = useState('');
  const [intAtt, setIntAtt] = useState('');
  const [wisAtt, setWisAtt] = useState('');
  const [chaAtt, setChaAtt] = useState('');

  useEffect(() => {
    getData(id)
      .then((char) => {
        setIsLoading(false)
        setCharacter(char as CharacterData)
        updateAttributes(char)
      })
  }, [])

  if (isLoading) return <Loading />

  return (
    <PrimaryTemplate>
      <HStack
        justifyContent='center'
        alignItems='center'
      >
        <Text fontWeight='bold' color='white' alignSelf='center' fontSize='2xl' my={2}>
          {character.name}
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
            {/* ---------------------------------------------------------- */}
            <Button
              onPress={saveData}
              isLoading={isLoadingUpdate}
            >
              Salvar
            </Button>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={strAtt} setAtributo={setStrAtt} w='25%' alignSelf='flex-start' title='For??a' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={strAtt} />
                <AbilityBox title='Atletismo' atributo={strAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={dexAtt} setAtributo={setDexAtt} w='25%' alignSelf='flex-start' title='Destreza' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={dexAtt} />
                <AbilityBox title='Acrobacia' atributo={dexAtt} />
                <AbilityBox title='Furtividade' atributo={dexAtt} />
                <AbilityBox title='Prestidigita????o' atributo={dexAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={conAtt} setAtributo={setConAtt} w='25%' alignSelf='flex-start' title='Constitui????o' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={conAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={intAtt} setAtributo={setIntAtt} w='25%' alignSelf='flex-start' title='Intelig??ncia' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={intAtt} />
                <AbilityBox title='Arcanismo' atributo={intAtt} />
                <AbilityBox title='Hist??ria' atributo={intAtt} />
                <AbilityBox title='Investiga????o' atributo={intAtt} />
                <AbilityBox title='Natureza' atributo={intAtt} />
                <AbilityBox title='Religi??o' atributo={intAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' py={4} borderBottomWidth={1} borderBottomColor='gray.100'>
              <AttributeContainer atributo={wisAtt} setAtributo={setWisAtt} w='25%' alignSelf='flex-start' title='Sabedoria' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={wisAtt} />
                <AbilityBox title='Adestrar Animais' atributo={wisAtt} />
                <AbilityBox title='Intui????o' atributo={wisAtt} />
                <AbilityBox title='Medicina' atributo={wisAtt} />
                <AbilityBox title='Percep????o' atributo={wisAtt} />
                <AbilityBox title='Sobreviv??ncia' atributo={wisAtt} />
              </VStack>
            </HStack>

            <HStack justifyContent='space-between' pt={4}>
              <AttributeContainer atributo={chaAtt} setAtributo={setChaAtt} w='25%' alignSelf='flex-start' title='Carisma' />

              <VStack w='70%'>
                <AbilityBox title='Teste de Resist??ncia' atributo={chaAtt} />
                <AbilityBox title='Atua????o' atributo={chaAtt} />
                <AbilityBox title='Engana????o' atributo={chaAtt} />
                <AbilityBox title='Intimida????o' atributo={chaAtt} />
                <AbilityBox title='Persuas??o' atributo={chaAtt} />
              </VStack>
            </HStack>
          </VStack>
        </ScrollTemplate>
      </WhiteTemplate>
    </PrimaryTemplate>
  );
}