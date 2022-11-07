import { useNavigation } from '@react-navigation/native';
import { Heading, VStack } from 'native-base';
import { CharacterItem } from '../components/CharacterItem';
import { NewCharacterButton } from '../components/NewCharacterButton';
import { ScrollTemplate } from '../components/ScrollTemplate';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';

export function Home() {

    const navigation = useNavigation();
    
    return (
        <PrimaryTemplate>
            <VStack flex={1}>
                <Heading color='white' alignSelf='center' fontSize='2xl' my={2}>
                    Seus Personagens
                </Heading>

                <WhiteTemplate>
                    <VStack h='90%'>
                        <ScrollTemplate>
                            <CharacterItem
                                onPress={navigation.navigate('charScreen')}
                            />
                            <CharacterItem />
                            <CharacterItem />
                        </ScrollTemplate>
                    </VStack>

                    <NewCharacterButton />

                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}