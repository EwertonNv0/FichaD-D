import { useState } from 'react';
import { Button, Heading, VStack } from 'native-base';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import { BasicInput } from '../components/BasicInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5'
import { AlertBox } from '../components/AlertBox';

export function NewCharacter({route, navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [charRegister, setCharResgister] = useState(false)
    const [avisoCadastro, setAvisoCadastro] = useState('')

    const [name, setName] = useState('')
    const [classe, setClass] = useState('')
    const [race, setRace] = useState('')
    const [level, setLevel] = useState('')

    const registerCharacter = async () => {
        if(isLoading) return

        setIsLoading(true)
        setAvisoCadastro('')

        if(name == '' || classe == '' || race == '' || level == '')
        {
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
                    <VStack h='90%'>
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
                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}