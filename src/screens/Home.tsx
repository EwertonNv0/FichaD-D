import { Heading, VStack } from 'native-base';
import { CharacterItem } from '../components/CharacterItem';
import { NewCharacter } from '../components/NewCharacter';
import { ScrollTemplate } from '../components/ScrollTemplate';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';

export function Home() {
    return (
        <PrimaryTemplate>
            <VStack flex={1}>
                <Heading color='white' alignSelf='center' fontSize='2xl' my={2}>
                    Seus Personagens
                </Heading>

                <WhiteTemplate>
                    <VStack h='90%'>
                        <ScrollTemplate>
                            <CharacterItem />
                            <CharacterItem />
                            <CharacterItem />
                        </ScrollTemplate>
                    </VStack>

                    <NewCharacter />
                </WhiteTemplate>
            </VStack>
        </PrimaryTemplate>
    );
}