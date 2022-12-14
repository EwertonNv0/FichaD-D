import { useEffect, useState } from 'react';
import { Box, Button, CheckIcon, Heading, HStack, Select, Text, View, VStack } from 'native-base';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5'
import { AlertBox } from '../components/AlertBox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { BasicInput } from '../components/BasicInput';
import { ButtonIcons } from '../components/ButtonIcons';
import { ArrowLeft, CaretLeft, MinusCircle, PlusCircle } from 'phosphor-react-native';
import { Filter } from '../components/Filter';
import { races } from '../utils/Races';
import { classes } from '../utils/Classes';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { backgrounds } from '../utils/Backgrounds';
import { BackButton } from '../components/BackButton';
import { feats } from '../utils/Feats';
import { FeatData } from '../interfaces/FeatData';
import { randAttributes, randBetween } from '../utils/Calcs';

export function NewCharacter({ route, navigation }) {

    // Formulario parte 01
    const [isLoading, setIsLoading] = useState(false)
    const [charRegister, setCharResgister] = useState(false)
    const [avisoCadastro, setAvisoCadastro] = useState('')

    const [errorStepOne, setErroStepOne] = useState(false)

    const [name, setName] = useState('')
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
        if (name == '') {
            setErroStepOne(true)
            setAvisoCadastro('Voc?? precisa inserir um nome')
            return
        }

        // VERIFICA O N??VEL
        if (!parseInt(level)) {
            setErroStepOne(true)
            setAvisoCadastro('Insira um n??vel v??lido')
            return
        }

        // VERIFICA A RA??A
        if (race == '') {
            setErroStepOne(true)
            setAvisoCadastro('Voc?? precisa escolher uma ra??a')
            return
        }

        // VERIFICA A SUB-RA??A
        if (listSubRace.length > 0 && subRace == '') {
            setErroStepOne(true)
            setAvisoCadastro('Voc?? precisa escolher uma sub-ra??a')
            return
        }

        // VERIFICA A CLASSE
        if (classe == '') {
            setErroStepOne(true)
            setAvisoCadastro('Voc?? precisa escolher uma classe')
            return
        }

        // VERIFICA A SUB-CLASSE
        if (listSubClasse.length > 0 && subClasse == '') {
            setErroStepOne(true)
            setAvisoCadastro(`Voc?? precisa escolher um(a) ${subClasseDescription}`)
            return
        }

        // VERIFICA A SUB-CLASSE
        if (listVariantClasse.length > 0 && varianteClasse == '') {
            setErroStepOne(true)
            setAvisoCadastro(`Voc?? precisa escolher um(a) ${variantDescription}`)
            return
        }


        setAvisoCadastro('')
        setErroStepOne(false)
    }

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

    // LIMPA DADOS DE CLASSE E RA??A
    useEffect(() => {
        setRace('')
        setClasse('')
    }, [])

    // ATUALIZA A LISTA DE SUB-RA??AS
    useEffect(() => {
        setSubRace('')
        setListSubRace([])
        if (race) {
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

        if (classe) {
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

        if (subClasse) {
            const subClasseAlvo = listSubClasse.find(r => r.id == parseInt(subClasse))

            if (subClasseAlvo && subClasseAlvo.variant) {
                setVariantDescriprion(subClasseAlvo.variantDescription)
                setListVarianteClasse(subClasseAlvo.variant)
            }
        }
    }, [subClasse])

    // Formul??rio parte 02
    const [background, setBackground] = useState('')
    const [descriptionBg, setDescriptionBg] = useState('')
    const [skillsBg, setSkillsBg] = useState('')
    const [toolsBg, setToolsBg] = useState('')
    const [langBg, setLangBg] = useState('')

    useEffect(() => {
        setDescriptionBg('')
        setSkillsBg('')
        setToolsBg('')
        setLangBg('')

        const findBg = backgrounds.find(bg => bg.id == parseInt(background))
        if (findBg && findBg.description) {
            setDescriptionBg(findBg.description)
            setSkillsBg(findBg.skills)
            setToolsBg(findBg.tools)
            setLangBg(findBg.language)
        }
    }, [background])

    // Formul??rio parte 03
    const [feat, setFeat] = useState('')
    const [selectedFeat, setSelectedFeat] = useState<FeatData>({} as FeatData)

    useEffect(() => {
        const findFeat = feats.find(ft => ft.id == parseInt(feat))

        if(findFeat)
        {
            setSelectedFeat(findFeat as FeatData)
        }
    }, [])

    // Formul??rio parte 04
    const defaultTotalPoints = 27
    const [statusSelected, setStatusSelected] = useState<'distributed' | 'roll' | 'pre'>('distributed')
    const [totalPoints, setTotalPoints] = useState(defaultTotalPoints)
    const [strenth, setStrenth] = useState(8)
    const [dexterity, setDexterity] = useState(8)
    const [constituition, setConstituition] = useState(8)
    const [intelligence, setIntelligence] = useState(8)
    const [wisdom, setWisdom] = useState(8)
    const [charisma, setCharisma] = useState(8)

    useEffect(() => {
        if(statusSelected == 'distributed')
        {
            setTotalPoints(defaultTotalPoints)
            setStrenth(8)
            setDexterity(8)
            setConstituition(8)
            setIntelligence(8)
            setWisdom(8)
            setCharisma(8)
        }
        else if(statusSelected == 'pre')
        {
            setTotalPoints(0)
            setStrenth(15)
            setDexterity(14)
            setConstituition(13)
            setIntelligence(12)
            setWisdom(10)
            setCharisma(8)
        }
        else
        {
            setTotalPoints(0)
            setStrenth(randAttributes())
            setDexterity(randAttributes())
            setConstituition(randAttributes())
            setIntelligence(randAttributes())
            setWisdom(randAttributes())
            setCharisma(randAttributes())
        }
    }, [statusSelected])

    const incrementAttribute = (state, set) => {
        if (statusSelected == 'roll' || statusSelected == 'pre') return
        if (totalPoints <= 0) return
        
        if (state < 15){
            if(state >= 13) setTotalPoints(totalPoints - 2)
            else setTotalPoints(totalPoints - 1)
            set(state + 1)   
        }
    }

    const decrementAttribute = (state, set) => {
        if (statusSelected == 'roll' || statusSelected == 'pre') return
        if (totalPoints >= defaultTotalPoints) return
        
        if (state > 8){
            if(state >= 14) setTotalPoints(totalPoints + 2)
            else setTotalPoints(totalPoints + 1)
            
            set(state - 1)
        }
    }

    // Formul??rio parte 05



    return (
        <PrimaryTemplate>
            <VStack flex={1}>

                <HStack>
                    <BackButton />

                    <Heading color='white' alignSelf='center' fontSize='2xl' my={4}>
                        Crie um novo personagem
                    </Heading>
                </HStack>

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
                            marginBottom={0}
                            progressBarColor='#ED220E20'
                            completedProgressBarColor='#ED220E'
                            activeStepIconBorderColor='#ED220E'
                            completedStepIconColor='#ED220E'
                            disabledStepIconColor='transparent'
                            activeStepIconColor='transparent'
                            disabledStepNumColor='#000000'
                            activeStepNumColor='#000000'
                            completedCheckColor='#FFFFFF'
                            topOffset={0}
                        >
                            {/* Formulario parte 01 */}
                            <ProgressStep
                                nextBtnText='Pr??ximo'
                                // onNext={validateStepOne}
                                errors={errorStepOne}
                            >
                                <VStack>
                                    <HStack justifyContent='space-between' mb={2}>
                                        <BasicInput
                                            w='75%'
                                            placeholder='Nome'
                                            accessibilityLabel='Nome'
                                            color='black'
                                            onChangeText={setName}
                                            value={name}
                                            _focus={{
                                                color: 'black',
                                                backgroundColor: 'transparent'
                                            }}
                                        />
                                        <BasicInput
                                            w='20%'
                                            accessibilityLabel='N??vel'
                                            placeholder='N??vel'
                                            textAlign='center'
                                            keyboardType='numeric'
                                            maxLength={2}
                                            onChangeText={setLevel}
                                            value={level}
                                            color='black'
                                            _focus={{
                                                color: 'black',
                                                backgroundColor: 'transparent'
                                            }}
                                        />
                                    </HStack>
                                    <Box>
                                        <Select
                                            mb={1}
                                            w='full'
                                            placeholder='Ra??a'
                                            accessibilityLabel='Ra??a'
                                            borderColor='gray.700'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: '#ED220EA9',
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
                                    {listSubRace.length > 0 &&
                                        <Box>
                                            <Select
                                                mb={1}
                                                w='full'
                                                placeholder='Sub-Ra??a'
                                                accessibilityLabel='Sub-Ra??a'
                                                borderColor='gray.700'
                                                fontSize='md'
                                                _selectedItem={{
                                                    bg: '#ED220EA9',
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
                                                bg: '#ED220EA9',
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
                                                    bg: '#ED220EA9',
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
                                                    bg: '#ED220EA9',
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
                                nextBtnText='Pr??ximo'
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
                                        h='380px'
                                        mt={5}
                                        p={4}
                                        borderWidth={1}
                                        borderColor='gray.500'
                                        borderRadius='md'
                                    >
                                        <ScrollTemplate>
                                            <Box mb={1}>
                                                <Text fontSize='sm'>
                                                    <Text
                                                        fontSize='sm'
                                                        fontWeight='bold'
                                                    >
                                                        Profici??ncia em Per??cia:&nbsp;
                                                    </Text>
                                                    { skillsBg }
                                                </Text>
                                            </Box>

                                            <Box mb={1}>
                                                <Text fontSize='sm'>
                                                    <Text
                                                        fontSize='sm'
                                                        fontWeight='bold'
                                                    >
                                                        Profici??ncia em Ferramenta:&nbsp;
                                                    </Text>
                                                    { toolsBg }
                                                </Text>
                                            </Box>

                                            <Box mb={1}>
                                                <Text fontSize='sm'>
                                                    <Text
                                                        fontSize='sm'
                                                        fontWeight='bold'
                                                    >
                                                        Idiomas:&nbsp;
                                                    </Text>
                                                    { langBg }
                                                </Text>
                                            </Box>

                                            <Box>
                                                <Text fontSize='sm' textAlign='justify'>
                                                    <Text
                                                        fontSize='sm'
                                                        fontWeight='bold'
                                                    >
                                                        Caracter??stica:&nbsp;
                                                    </Text>
                                                    {descriptionBg}
                                                </Text>
                                            </Box>
                                        </ScrollTemplate>
                                    </Box>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 03 */}
                            <ProgressStep
                                nextBtnText='Pr??ximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Select
                                        mt={1}
                                        w='full'
                                        accessibilityLabel='Talento'
                                        placeholder='Talento'
                                        borderColor='gray.700'
                                        fontSize='md'
                                        _selectedItem={{
                                            bg: 'teal.600',
                                            endIcon: <CheckIcon size='5' />
                                        }}
                                        onValueChange={setFeat}
                                        selectedValue={feat}
                                    >
                                        {feats.map(ft =>
                                            <Select.Item
                                                label={ft.name}
                                                value={`${ft.id}`}
                                                key={ft.id}
                                            >
                                            </Select.Item>)
                                        }
                                    </Select>

                                    <Box
                                        w='full'
                                        h='400px'
                                        mt={5}
                                        p={4}
                                        borderWidth={1}
                                        borderColor='gray.500'
                                        borderRadius='md'
                                    >
                                        <ScrollTemplate>
                                            <Text fontSize='sm' textAlign='justify'>
                                                {
                                                selectedFeat.description != ''
                                                ? selectedFeat.description
                                                :'Sem Descri????o'
                                                }
                                            </Text>
                                        </ScrollTemplate>
                                    </Box>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 04 */}
                            <ProgressStep
                                nextBtnText='Pr??ximo'
                                previousBtnText='Anterior'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View>
                                    <HStack mb='10%' justifyContent='center'>
                                        <Filter
                                            type='distributed'
                                            title='Compra'
                                            onPress={() => setStatusSelected('distributed')}
                                            isActive={statusSelected === 'distributed'}
                                            borderRadius='md'
                                        />

                                        <Filter
                                            type='roll'
                                            title='Rolagem'
                                            onPress={() => setStatusSelected('roll')}
                                            isActive={statusSelected === 'roll'}
                                            borderRadius='md'
                                        />
                                        
                                        <Filter
                                            type='pre'
                                            title='Pr??'
                                            onPress={() => setStatusSelected('pre')}
                                            isActive={statusSelected === 'pre'}
                                            borderRadius='md'
                                        />
                                    </HStack>

                                    <HStack
                                        alignItems='center'
                                        w='full'
                                        borderRadius={0}
                                        p={2}
                                    >
                                        <Box w='30%'>
                                            <Text fontSize='5xl' alignSelf='center'>
                                                { totalPoints }
                                            </Text>
                                        </Box>

                                        <Box w='70%'>
                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>For??a</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(strenth, setStrenth) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{strenth}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(strenth, setStrenth) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Destreza</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(dexterity, setDexterity) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{dexterity}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(dexterity, setDexterity) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Constitui????o</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(constituition, setConstituition) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{constituition}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(constituition, setConstituition) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Intelig??ncia</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(intelligence, setIntelligence) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{intelligence}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(intelligence, setIntelligence) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Sabedoria</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(wisdom, setWisdom) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{wisdom}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(wisdom, setWisdom) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>

                                            <HStack justifyContent='space-between' mb={2}>
                                                <Text fontSize='lg'>Carisma</Text>

                                                <HStack w='103px' justifyContent='space-between'>
                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<MinusCircle />}
                                                    onPress={() => { decrementAttribute(charisma, setCharisma) }}
                                                    />
                                                    }

                                                    <Text fontSize='lg' mx={4}>{charisma}</Text>

                                                    {statusSelected == 'distributed' &&
                                                    <ButtonIcons
                                                    as={<PlusCircle />}
                                                    onPress={() => { incrementAttribute(charisma, setCharisma) }}
                                                    />
                                                    }
                                                </HStack>
                                            </HStack>
                                        </Box>
                                    </HStack>
                                </View>
                            </ProgressStep>

                            {/* Formulario parte 05 */}
                            <ProgressStep
                                previousBtnText='Anterior'
                                finishBtnText='Pronto!'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Poder adicionar Equipamentos</Text>
                                </View>
                            </ProgressStep>
                        </ProgressSteps>
                    </VStack>
                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}