import { VStack, HStack, Text, Button } from 'native-base';

export function CharacterItem( {...rest} ) {
  return (
    <Button
      bg='white'
      borderRadius='sm'
      my={1}
      borderWidth={1}
      borderLeftWidth={3}
      borderTopColor='gray.100'
      borderRightColor='gray.100'
      borderBottomColor='gray.100'
      borderLeftColor='primary.700'
      justifyContent='space-between'
      _pressed={{
          bg:'#C4C4CC'
      }}
      {...rest}
    >
      <HStack w='full' justifyContent='space-between'>
        <VStack w='80%' justifyContent='space-between'>
          <Text fontSize='xl'>Nome do personagem</Text>
          
          <Text fontSize='sm'>Classe 1 / Classe 2 / Classe 3</Text>
        </VStack>

        <HStack w='20%' alignItems='center'>
          <Text fontSize='md'>Nvl. 20</Text>
        </HStack>
      </HStack>
    </Button>
  );
}