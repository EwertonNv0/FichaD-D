import { useNavigation } from '@react-navigation/native';
import { FlatList, Heading, VStack } from 'native-base';
import { CharacterItem } from '../components/CharacterItem';
import { NewCharacterButton } from '../components/NewCharacterButton';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function Home() {

    const [listaPersonagens, setListaPersonagens] = useState([])

    const getData = async () => {
        try {
          await AsyncStorage.getItem('characters')
            .then((item) => {
              const characters = JSON.parse(item)

              console.log(characters)

              setListaPersonagens(characters)
            })
            .catch((error) => {
              console.log(error)
            })
          // return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
    }

    useEffect(() => {
        getData()
    },[])

    const navigation = useNavigation();
    
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
                            renderItem={
                                ({item}) => <CharacterItem dataChar={item} />
                            }
                        />
                    </VStack>

                    <NewCharacterButton />

                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}