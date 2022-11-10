import { Box, HStack, Input, Text } from 'native-base';

export function AttributeBox() {
    return (
        <Box>
            <HStack
                borderWidth={2}
                borderColor='black'
                borderRadius='md'
                bg='white'
                justifyContent='center'
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
                borderWidth={2}
                borderColor='black'
                borderRadius='lg'
                bg='white'
                justifyContent='center'
                position='absolute'
                bottom='-12px'
                left='15px'
                w={8}
                h={6}
            >
                {/* <Text
                    color='black'
                    fontSize='md'
                    alignSelf='center'
                >
                    20
                </Text> */}
                <Input
                    fontSize='md'
                    px={0}
                    py={0}
                    w='full'
                    textAlign='center'
                    keyboardType='numeric'
                    maxLength={2}
                    borderWidth={0}
                />
            </HStack>
        </Box>
    );
}