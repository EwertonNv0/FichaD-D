import { VStack, HStack, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export function CharacterItem( {dataChar, ...rest} ) {
  
  const navigation = useNavigation();

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
      onPress={() => {navigation.navigate('charScreen', {
        id: dataChar.id
      })}}
      {...rest}
    >
      <HStack w='full' justifyContent='space-between'>
        <VStack w='80%' justifyContent='space-between'>
          <Text fontSize='xl'>{dataChar.name}</Text>
          
          <Text fontSize='sm'>{dataChar.class}</Text>
        </VStack>

        <HStack w='20%' alignItems='center'>
          <Text fontSize='md'>Nvl. {dataChar.level}</Text>
        </HStack>
      </HStack>
    </Button>
  );
}