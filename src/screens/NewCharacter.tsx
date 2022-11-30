import { useEffect, useState } from 'react';
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
import { races } from '../utils/Races';
import { classes } from '../utils/Classes';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { backgrounds } from '../utils/Backgrounds';

export function NewCharacter({ route, navigation }) {

    // Formulario parte 01
    const [isLoading, setIsLoading] = useState(false)
    const [charRegister, setCharResgister] = useState(false)
    const [avisoCadastro, setAvisoCadastro] = useState('')

    const [errorStepOne, setErroStepOne] = useState(false)

    const [name,   setName] = useState('')
    const [classe, setClasse] = useState('')
    const [subClasse, setSubClasse] = useState('')
    const [varianteClasse, setVarianteClasse] = useState('')
    const [race, setRace] = useState('')
    const [subRace, setSubRace] = useState('')
    const [level, setLevel] = useState('')

    const [listSubRace, setListSubRace] = useState([])
    const [listSubClasse, setListSubClasse] = useState([])
    const [subClasseDescription, setSubClasseDescription] = useState('')
    const [listVariantClasse, setListVarianteClasse] = useState([])
    const [variantDescription, setVariantDescriprion] = useState('')

    const validateStepOne = () => {
        // VERIFICA O NOME
        if(name == ''){
            setErroStepOne(true)
            setAvisoCadastro('Você precisa inserir um nome')
            return
        }

        // VERIFICA O NÍVEL
        if(!parseInt(level)){
            setErroStepOne(true)
            setAvisoCadastro('Insira um nível válido')
            return
        }

        // VERIFICA A RAÇA
        if(race == ''){
            setErroStepOne(true)
            setAvisoCadastro('Você precisa escolher uma raça')
            return
        }

        // VERIFICA A SUB-RAÇA
        if(listSubRace.length > 0 && subRace == ''){
            setErroStepOne(true)
            setAvisoCadastro('Você precisa escolher uma sub-raça')
            return
        }

        // VERIFICA A CLASSE
        if(classe == ''){
            setErroStepOne(true)
            setAvisoCadastro('Você precisa escolher uma classe')
            return
        }

        // VERIFICA A SUB-CLASSE
        if(listSubClasse.length > 0 && subClasse == ''){
            setErroStepOne(true)
            setAvisoCadastro(`Você precisa escolher um(a) ${subClasseDescription}`)
            return
        }

        // VERIFICA A SUB-CLASSE
        if(listVariantClasse.length > 0 && varianteClasse == ''){
            setErroStepOne(true)
            setAvisoCadastro(`Você precisa escolher um(a) ${variantDescription}`)
            return
        }


        setAvisoCadastro('')
        setErroStepOne(false)
    }

    // Formulário parte 02
    const [background, setBackground] = useState('')
    const [descriptionBg, setDescriptionBg] = useState('')
    useEffect(() => {
        setDescriptionBg('')
        const findBg = backgrounds.find(bg => bg.id == parseInt(background))
        if (findBg && findBg.description) {
            setDescriptionBg(findBg.description)
        }
    },[background])

    // Formulário parte 03


    // Formulário parte 04
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')

    const [strenth, setStrenth] = useState(8)
    const [dexterity, setDexterity] = useState(8)
    const [constituition, setConstituition] = useState(8)
    const [intelligence, setIntelligence] = useState(8)
    const [wisdom, setWisdom] = useState(8)
    const [charisma, setCharisma] = useState(8)

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

    // LIMPA DADOS DE CLASSE E RAÇA
    useEffect(() => {
        setRace('')
        setClasse('')
    }, [])

    // ATUALIZA A LISTA DE SUB-RAÇAS
    useEffect(() => {
        setSubRace('')
        setListSubRace([])
        if(race)
        {
            const raca = races.find(r => r.id == parseInt(race))

            if (raca && raca.subRaces) {
                setListSubRace(raca.subRaces)
            }
        }
    }, [race])

    // ATUALIZA A LISTA DE SUB-CLASSES
    useEffect(() => {
        setSubClasse('')
        setVarianteClasse('')
        setListSubClasse([])
        setListVarianteClasse([])

        if(classe)
        {
            const class_alvo = classes.find(r => r.id == parseInt(classe))

            if (class_alvo && class_alvo.subClass) {
                setSubClasseDescription(class_alvo.subClassDescription)
                setListSubClasse(class_alvo.subClass)
            }
        }
    }, [classe])

    // ATUALIZA A LISTA DE VARIANTES DA SUB-CLASSE
    useEffect(() => {
        setVarianteClasse('')
        setListVarianteClasse([])
        
        if(subClasse)
        {
            const subClasseAlvo = listSubClasse.find(r => r.id == parseInt(subClasse))

            if (subClasseAlvo && subClasseAlvo.variant) {
                setVariantDescriprion(subClasseAlvo.variantDescription)
                setListVarianteClasse(subClasseAlvo.variant)
            }
        }
    }, [subClasse])

    return (
        <PrimaryTemplate>
            <VStack flex={1}>
                <Heading color='white' alignSelf='center' fontSize='2xl' my={2}>
                    Crie um novo personagem
                </Heading>

                <WhiteTemplate>
                    <VStack flex={1}>
                        <View>
                            {/* ALERTAS DE CADASTRO */}
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
                        </View>
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
                                // onNext={validateStepOne}
                                errors={errorStepOne}
                            >
                                <VStack>
                                    <HStack justifyContent='space-between' mb={2}>
                                        <BasicInput
                                            w='75%'
                                            placeholder='Nome'
                                            color='black'
                                            onChangeText={setName}
                                            value={name}
                                            _focus={{
                                                color: 'black'
                                            }}
                                        />
                                        <BasicInput
                                            w='20%'
                                            placeholder='Nivel'
                                            keyboardType='numeric'
                                            maxLength={2}
                                            onChangeText={setLevel}
                                            value={level}
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
                                            onValueChange={setRace}
                                            selectedValue={race}
                                        >
                                            {races.map(race =>
                                                <Select.Item
                                                    label={race.name}
                                                    value={`${race.id}`}
                                                    key={race.id}>
                                                </Select.Item>)}
                                        </Select>
                                    </Box>
                                    {/* Apenas se a raça possuir uma variação */}
                                    {listSubRace.length > 0 &&
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
                                                onValueChange={setSubRace}
                                                selectedValue={subRace}
                                            >
                                                {listSubRace.map(race =>
                                                    <Select.Item
                                                        label={race.name}
                                                        value={`${race.id}`}
                                                        key={race.id}>
                                                    </Select.Item>)}
                                            </Select>
                                        </Box>
                                    }
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
                                            onValueChange={setClasse}
                                            selectedValue={classe}
                                        >
                                            {classes.map(race =>
                                                <Select.Item
                                                    label={race.name}
                                                    value={`${race.id}`}
                                                    key={race.id}>
                                                </Select.Item>)}
                                        </Select>
                                    </Box>
                                    {/* apenas se o personagem ja for acima do nivel 3 */}
                                    {listSubClasse.length > 0 &&
                                        <Box>
                                            <Select
                                                mt={1}
                                                w='full'
                                                accessibilityLabel={subClasseDescription}
                                                placeholder={subClasseDescription}
                                                borderColor='gray.700'
                                                fontSize='md'
                                                _selectedItem={{
                                                    bg: 'teal.600',
                                                    endIcon: <CheckIcon size='5' />
                                                }}
                                                onValueChange={setSubClasse}
                                                selectedValue={subClasse}
                                            >
                                                {listSubClasse.map(classe =>
                                                    <Select.Item
                                                        label={classe.name}
                                                        value={`${classe.id}`}
                                                        key={classe.id}>
                                                    </Select.Item>)}
                                            </Select>
                                        </Box>
                                    }
                                    {listVariantClasse.length > 0 &&
                                        <Box>
                                            <Select
                                                mt={1}
                                                w='full'
                                                accessibilityLabel={variantDescription}
                                                placeholder={variantDescription}
                                                borderColor='gray.700'
                                                fontSize='md'
                                                _selectedItem={{
                                                    bg: 'teal.600',
                                                    endIcon: <CheckIcon size='5' />
                                                }}
                                                onValueChange={setVarianteClasse}
                                                selectedValue={varianteClasse}
                                            >
                                                {listVariantClasse.map(classe =>
                                                    <Select.Item
                                                        label={classe.name}
                                                        value={`${classe.id}`}
                                                        key={classe.id}>
                                                    </Select.Item>)}
                                            </Select>
                                        </Box>
                                    }
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
                                    <Select
                                        mt={1}
                                        w='full'
                                        accessibilityLabel='Antecedentes'
                                        placeholder='Antecedentes'
                                        borderColor='gray.700'
                                        fontSize='md'
                                        _selectedItem={{
                                            bg: 'teal.600',
                                            endIcon: <CheckIcon size='5' />
                                        }}
                                        onValueChange={setBackground}
                                        selectedValue={background}
                                    >
                                        {backgrounds.map(bg =>
                                            <Select.Item
                                                label={bg.name}
                                                value={`${bg.id}`}
                                                key={bg.id}
                                            >
                                            </Select.Item>)
                                        }
                                    </Select>
                                    <Box
                                        w='full'
                                        h={80}
                                        mt={10}
                                        p={4}
                                        borderWidth={1}
                                        borderColor='gray.500'
                                        borderRadius='md'
                                    >
                                        <ScrollTemplate>
                                            <Text fontSize='md'>
                                                {descriptionBg}
                                            </Text>
                                        </ScrollTemplate>
                                    </Box>
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