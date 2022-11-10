import { Box, HStack, Input, Text } from 'native-base';

export function AttributeBox() {
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
                    +5
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
                />
            </HStack>
        </Box>
    );
}