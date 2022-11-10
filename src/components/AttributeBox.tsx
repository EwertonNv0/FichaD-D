import { Box, HStack, Input, Text } from 'native-base';

export function AttributeBox({ atributo, setAtributo }) {

    const modificador = () => {
        const intMod = parseInt(atributo)
        if (isNaN(intMod)) {
            return ''
        }
        else {
            const mod = Math.floor((intMod - 10) / 2)
            return mod <= 0 ? mod : `+${mod}`
        }
    }

    return (
        <Box>
            <HStack
                bg='white'
                justifyContent='center'
                borderColor='black'
                borderRadius='md'
                borderWidth={2}
                w={16}
                h={16}
            >
                <Text
                    color='black'
                    fontSize='3xl'
                    alignSelf='center'
                >
                    {modificador()}
                </Text>
            </HStack>

            <HStack
                bg='white'
                left='15px'
                bottom='-12px'
                position='absolute'
                justifyContent='center'
                borderColor='black'
                borderRadius='lg'
                borderWidth={2}
                w={8}
                h={6}
            >
                <Input
                    keyboardType='numeric'
                    textAlign='center'
                    fontSize='md'
                    w='full'
                    px={0}
                    py={0}
                    maxLength={2}
                    borderWidth={0}
                    value={atributo}
                    onChangeText={setAtributo}
                />
            </HStack>
        </Box>
    );
}