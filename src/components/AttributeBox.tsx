import { Box, HStack, Text } from 'native-base';

export function AttributeBox() {
    return (
        <Box mb={4}>
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
                <Text
                    color='black'
                    fontSize='md'
                    alignSelf='center'
                >
                    20
                </Text>
            </HStack>
        </Box>
    );
}