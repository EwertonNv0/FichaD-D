import { useState } from 'react';
import { Box, Button, Center, CheckIcon, Heading, HStack, Select, Text, View, VStack } from 'native-base';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5'
import { AlertBox } from '../components/AlertBox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { BasicInput } from '../components/BasicInput';
import { ButtonIcons } from '../components/ButtonIcons';
import { MinusCircle, PlusCircle } from 'phosphor-react-native';
import { more, less } from '../utils/Attributes';
import { Filter } from '../components/Filter';

export function NewCharacter({ route, navigation }) {

    // Formulario parte 01
    const [isLoading,     setIsLoading] = useState(false)
    const [charRegister,  setCharResgister] = useState(false)
    const [avisoCadastro, setAvisoCadastro] = useState('')

    const [name,   setName] = useState('')
    const [classe, setClass] = useState('')
    const [race,   setRace] = useState('')
    const [level,  setLevel] = useState('')

    // Formulário parte 02


    // Formulário parte 03


    // Formulário parte 04
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')

    const [strenth,       setStrenth] = useState(8)
    const [dexterity,     setDexterity] = useState(8)
    const [constituition, setConstituition] = useState(8)
    const [intelligence,  setIntelligence] = useState(8)
    const [wisdom,        setWisdom] = useState(8)
    const [charisma,      setCharisma] = useState(8)

    // Formulário parte 05


    // Formulário parte 06


    const registerCharacter = async () => {
        if (isLoading) return

        setIsLoading(true)
        setAvisoCadastro('')

        if (name == '' || classe == '' || race == '' || level == '') {
            setAvisoCadastro('Preencha todos os campos')
            return setIsLoading(false)
        }

        const id = md5(new Date())

        const char = {
            id: id,
            name: name,
            class: classe,
            race: race,
            level: level
        }

        try {
            const jsonValue = JSON.stringify(char)
            await AsyncStorage.setItem(id, jsonValue)
                .then(() => {
                    setCharResgister(true)

                    setTimeout(() => {
                        navigation.goBack()
                    }, 1000);
                })
        } catch (e) {
            // saving error
        }
    }

    return (
        <PrimaryTemplate>
            <VStack flex={1}>
                <Heading color='white' alignSelf='center' fontSize='2xl' my={2}>
                    Crie um novo personagem
                </Heading>

                <WhiteTemplate>
                    <VStack flex={1}>
                        <ProgressSteps
                            progressBarColor='transparent'
                            disabledStepIconColor='transparent'
                            completedProgressBarColor='transparent'
                            activeStepIconBorderColor='transparent'
                            completedStepIconColor='transparent'
                            activeStepIconColor='transparent'
                            disabledStepNumColor='transparent'
                            activeStepNumColor='transparent'
                            completedCheckColor='transparent'
                            marginBottom={0}
                            topOffset={0}
                        >

                            {/* Formulario parte 01 */}
                            <ProgressStep
                                nextBtnText='Próximo'
                            >
                                <View>
                                    {charRegister &&
                                        <AlertBox
                                            title='Cadastro de Personagem'
                                            content='Personagem Cadastrado com Sucesso'
                                            type='success'
                                        />
                                    }
                                    {avisoCadastro &&
                                        <AlertBox
                                            title='Cadastro de Personagem'
                                            content={avisoCadastro}
                                            type='error'
                                        />
                                    }
                                    <BasicInput
                                        placeholder='Nome do Personagem'
                                        onChangeText={setName}
                                        value={name}
                                        color='black'
                                    />

                                    <BasicInput
                                        placeholder='Classe'
                                        onChangeText={setClass}
                                        value={classe}
                                        color='black'
                                    />

                                    <BasicInput
                                        placeholder='Raça'
                                        onChangeText={setRace}
                                        value={race}
                                        color='black'
                                    />

                                    <BasicInput
                                        keyboardType='numeric'
                                        placeholder='Nível'
                                        onChangeText={setLevel}
                                        value={level}
                                        color='black'
                                    />

                                    <Button
                                        onPress={registerCharacter}
                                        mt={3}
                                        isLoading={isLoading}
                                    >
                                        Criar Personagem
                                    </Button>
                                </View>

                                <Text py={10}>Daqui pra baixo não precisa preeencher</Text>

                                <VStack>
                                    <HStack justifyContent='space-between' mb={2}>
                                        <BasicInput
                                            w='75%'
                                            placeholder='Nome'
                                            color='black'
                                            _focus={{
                                                color: 'black'
                                            }}
                                        />
                                        <BasicInput
                                            w='20%'
                                            placeholder='Nivel'
                                            keyboardType='numeric'
                                            maxLength={2}
                                            color='black'
                                            _focus={{
                                                color: 'black'
                                            }}
                                        />
                                    </HStack>
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Raça'
                                            placeholder='Raça'
                                            borderColor='gray.700'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size='5' />
                                            }}
                                        >
                                            <Select.Item label='UX Research' value='ux' />
                                            <Select.Item label='Web Development' value='web' />
                                            <Select.Item label='Cross Platform Development' value='cross' />
                                            <Select.Item label='UI Designing' value='ui' />
                                            <Select.Item label='Backend Development' value='backend' />
                                        </Select>
                                    </Box>
                                    {/* Apenas se a raça possuir uma variação */}
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Sub-Raça'
                                            placeholder='Sub-Raça'
                                            borderColor='gray.700'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size='5' />
                                            }}
                                        >
                                            <Select.Item label='UX Research' value='ux' />
                                            <Select.Item label='Web Development' value='web' />
                                            <Select.Item label='Cross Platform Development' value='cross' />
                                            <Select.Item label='UI Designing' value='ui' />
                                            <Select.Item label='Backend Development' value='backend' />
                                        </Select>
                                    </Box>
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Classe'
                                            placeholder='Classe'
                                            borderColor='gray.700'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size='5' />
                                            }}
                                        >
                                            <Select.Item label='UX Research' value='ux' />
                                            <Select.Item label='Web Development' value='web' />
                                            <Select.Item label='Cross Platform Development' value='cross' />
                                            <Select.Item label='UI Designing' value='ui' />
                                            <Select.Item label='Backend Development' value='backend' />
                                        </Select>
                                    </Box>
                                    {/* apenas se o personagem ja for acima do nivel 3 */}
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Sub-Classe'
                                            placeholder='Sub-Classe'
                                            borderColor='gray.700'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size='5' />
                                            }}
                                        >
                                            <Select.Item label='UX Research' value='ux' />
                                            <Select.Item label='Web Development' value='web' />
                                            <Select.Item label='Cross Platform Development' value='cross' />
                                            <Select.Item label='UI Designing' value='ui' />
                                            <Select.Item label='Backend Development' value='backend' />
                                        </Select>
                                    </Box>
                                </VStack>
                            </ProgressStep>

                            {/* Formulario parte 02 */}
                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Lista com antecedentes em que tocando em um ele diz os bonus recebidos por ele</Text>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 03 */}
                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Lista com talentos em que tocando em um ele diz os bonus recebidos e outra lista com as Habilidades (arcanismo, historia, investigação...)</Text>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 04 */}
                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View>
                                    <HStack mb='10%' justifyContent='center'>
                                        <Filter
                                            type='open'
                                            title='Compra de Pontos'
                                            onPress={() => setStatusSelected('open')}
                                            isActive={statusSelected === 'open'}
                                            borderLeftRadius='md'
                                        />

                                        <Filter
                                            type='closed'
                                            title='Rolagem de Pontos'
                                            onPress={() => setStatusSelected('closed')}
                                            isActive={statusSelected === 'closed'}
                                            borderRightRadius='md'
                                        />
                                    </HStack>

                                    <HStack
                                        alignItems='center'
                                        w='full'
                                        borderRadius={0}
                                        p={2}
                                    >
                                        <Box w='30%'>
                                            <Text fontSize='5xl' alignSelf='center'>24</Text>
                                        </Box>

                                        <Box w='70%'>
                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Força</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(strenth, setStrenth) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{strenth}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(strenth, setStrenth) }}
                                                    />
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Destreza</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(dexterity, setDexterity) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{dexterity}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(dexterity, setDexterity) }}
                                                    />
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Constituição</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(constituition, setConstituition) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{constituition}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(constituition, setConstituition) }}
                                                    />
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Inteligência</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(intelligence, setIntelligence) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{intelligence}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(intelligence, setIntelligence) }}
                                                    />
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Sabedoria</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(wisdom, setWisdom) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{wisdom}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(wisdom, setWisdom) }}
                                                    />
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Carisma</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    <ButtonIcons
                                                        as={<MinusCircle />}
                                                        onPress={() => { less(charisma, setCharisma) }}
                                                    />

                                                    <Text fontSize='lg' mx={4}>{charisma}</Text>

                                                    <ButtonIcons
                                                        as={<PlusCircle />}
                                                        onPress={() => { more(charisma, setCharisma) }}
                                                    />
                                                </HStack>
                                            </HStack>
                                        </Box>
                                    </HStack>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 05 */}
                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Poder adicionar Equipamentos</Text>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 06 */}
                            <ProgressStep
                                previousBtnText='Anterior'
                                finishBtnText='Pronto!'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Visão geral</Text>
                                </View>
                            </ProgressStep>
                        </ProgressSteps>
                    </VStack>
                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}