import { Center, FlatList, Heading, Text, useTheme, VStack } from 'native-base';
import { CharacterItem } from '../components/CharacterItem';
import { NewCharacterButton } from '../components/NewCharacterButton';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { SmileySad } from 'phosphor-react-native';
import { Loading } from '../components/Loading';

export function Home() {
    const { colors } = useTheme()

    const [listaPersonagens, setListaPersonagens] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        try {
            await AsyncStorage.getAllKeys()
                .then(async (keys) => {
                    await AsyncStorage.multiGet(keys)
                        .then(async (data) => {
                            const lista = data.map(personagem => {
                                return JSON.parse(personagem[1])
                            })

                            setListaPersonagens(lista)
                        })
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (isLoading) return <Loading />

    return (
        <PrimaryTemplate>
            <VStack flex={1}>
                <Heading color='white' alignSelf='center' fontSize='2xl' my={2}>
                    Seus Personagens
                </Heading>

                <WhiteTemplate>
                    <VStack h='90%'>
                        <FlatList
                            keyExtractor={item => String(item.id)}
                            data={listaPersonagens}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 50 }}
                            renderItem={
                                ({ item }) => <CharacterItem dataChar={item} />
                            }
                            ListEmptyComponent={() => (
                                <Center>
                                    <SmileySad color={colors.gray[200]} size={40} />
                                    <Text color='gray.200' fontSize='lg' textAlign='center'>
                                        Sem personagens cadastrados.
                                    </Text>
                                </Center>
                            )}
                        />
                    </VStack>

                    <NewCharacterButton />

                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}