import { useState } from 'react';
import { Box, Button, CheckIcon, Heading, HStack, Select, Text, View, VStack } from 'native-base';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5'
import { AlertBox } from '../components/AlertBox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { BasicInput } from '../components/BasicInput';

export function NewCharacter({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(false)
    const [charRegister, setCharResgister] = useState(false)
    const [avisoCadastro, setAvisoCadastro] = useState('')

    const [name, setName] = useState('')
    const [classe, setClass] = useState('')
    const [race, setRace] = useState('')
    const [level, setLevel] = useState('')

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
                            activeStepIconBorderColor='#eb220e'
                            completedStepIconColor='#eb220e'
                            activeStepIconColor='#eb220e'
                            disabledStepNumColor='#000'
                            activeStepNumColor='#FFF'
                            marginBottom={0}
                            topOffset={0}
                        >
                            <ProgressStep
                                nextBtnText='Próximo'
                            >
                                <VStack>
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
                                </VStack>

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
                                            borderColor='gray.300'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size="5" />
                                            }}
                                        >
                                            <Select.Item label="UX Research" value="ux" />
                                            <Select.Item label="Web Development" value="web" />
                                            <Select.Item label="Cross Platform Development" value="cross" />
                                            <Select.Item label="UI Designing" value="ui" />
                                            <Select.Item label="Backend Development" value="backend" />
                                        </Select>
                                    </Box>
                                    {/* Apenas se a raça possuir uma variação */}
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Sub-Raça'
                                            placeholder='Sub-Raça'
                                            borderColor='gray.300'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size="5" />
                                            }}
                                        >
                                            <Select.Item label="UX Research" value="ux" />
                                            <Select.Item label="Web Development" value="web" />
                                            <Select.Item label="Cross Platform Development" value="cross" />
                                            <Select.Item label="UI Designing" value="ui" />
                                            <Select.Item label="Backend Development" value="backend" />
                                        </Select>
                                    </Box>
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Classe'
                                            placeholder='Classe'
                                            borderColor='gray.300'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size="5" />
                                            }}
                                        >
                                            <Select.Item label="UX Research" value="ux" />
                                            <Select.Item label="Web Development" value="web" />
                                            <Select.Item label="Cross Platform Development" value="cross" />
                                            <Select.Item label="UI Designing" value="ui" />
                                            <Select.Item label="Backend Development" value="backend" />
                                        </Select>
                                    </Box>
                                    {/* apenas se o personagem ja for acima do nivel 3 */}
                                    <Box>
                                        <Select
                                            mt={1}
                                            w='full'
                                            accessibilityLabel='Sub-Classe'
                                            placeholder='Sub-Classe'
                                            borderColor='gray.300'
                                            fontSize='md'
                                            _selectedItem={{
                                                bg: 'teal.600',
                                                endIcon: <CheckIcon size="5" />
                                            }}
                                        >
                                            <Select.Item label="UX Research" value="ux" />
                                            <Select.Item label="Web Development" value="web" />
                                            <Select.Item label="Cross Platform Development" value="cross" />
                                            <Select.Item label="UI Designing" value="ui" />
                                            <Select.Item label="Backend Development" value="backend" />
                                        </Select>
                                    </Box>
                                </VStack>
                            </ProgressStep>

                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                finishBtnText='Pronto!'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Lista com antecedentes em que tocando em um ele diz os bonus recebidos por ele</Text>
                                </View>
                            </ProgressStep>

                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                finishBtnText='Pronto!'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Lista com talentos em que tocando em um ele diz os bonus recebidos e outra lista com as Habilidades (arcanismo, historia, investigação...)</Text>
                                </View>
                            </ProgressStep>

                            <ProgressStep
                                nextBtnText='Próximo'
                                previousBtnText='Anterior'
                                finishBtnText='Pronto!'
                                previousBtnTextStyle={{
                                    color: '#eb220e'
                                }}
                            >
                                <View alignItems='center'>
                                    <Text>Pontos de vida e compra/distribuição de pontos</Text>
                                </View>
                            </ProgressStep>

                            <ProgressStep
                                nextBtnText='Próximo'
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