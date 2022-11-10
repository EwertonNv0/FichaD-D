import { Button, Center, Heading, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { PencilLine } from 'phosphor-react-native';
import { AttributeBox } from '../components/AttributeBox';
import { Label } from '../components/Label';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';
import { ScrollTemplate } from '../components/template/ScrollTemplate';
import { WhiteTemplate } from '../components/template/WhiteTemplate';

export function CharacterScreen() {
  return (
    <PrimaryTemplate>
      <HStack>
        <Text fontWeight='bold' color='white' alignSelf='center' fontSize='2xl' my={2}>
          Nome do Personagem
        </Text>

        <Button
          px={0}
          // py={0}
        >
          <Icon as={<PencilLine color='white' />} />
        </Button>
      </HStack>

      <WhiteTemplate>
        <ScrollTemplate>
          <HStack>
            <VStack>
              <Center>
                <Label title='Força' />
                <AttributeBox />
                <Label title='Destreza' />
                <AttributeBox />
                <Label title='Constituição' />
                <AttributeBox />
                <Label title='Inteligência' />
                <AttributeBox />
                <Label title='Sabedoria' />
                <AttributeBox />
                <Label title='Carisma' />
                <AttributeBox />
              </Center>
            </VStack>

            <VStack>

            </VStack>
          </HStack>
        </ScrollTemplate>
      </WhiteTemplate>
    </PrimaryTemplate>
  );
}