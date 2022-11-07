import { Button, HStack, Icon, Text, useTheme } from 'native-base';
import { PlusCircle } from 'phosphor-react-native';

export function NewCharacter() {

    const { colors } = useTheme();

  return (
    <Button
        bg='white'
        w='95%'
        h={10}
        borderWidth={1}
        borderRadius='sm'
        borderColor='gray.100'
        position='absolute'
        bottom={4}
        left='5%'
        _pressed={{
            bg:'#C4C4CC'
        }}
    >
        <HStack w='full' justifyContent='center'>
            <Icon as={<PlusCircle color={colors.secondary['700']} />} mr={3} />
            <Text fontSize='md' color='secondary.700'>Adicionar Personagem</Text>
        </HStack>
    </Button>
  );
}