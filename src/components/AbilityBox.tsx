import { Button, Checkbox, HStack, Text, useTheme } from 'native-base';

export function AbilityBox({ title }) {
    return (
        <HStack w='full' alignItems='center'>
            <Checkbox borderRadius='full' value="proficiency" colorScheme='red' accessibilityLabel='proficiency' />
            <Text mx={2} fontSize='sm'>
                +20
            </Text>
            <Button
                px={1}
                py={0}
                bg='transparent'
                _pressed={{
                    backgroundColor: 'transparent'
                }}
            >
                <Text fontSize='md'>
                    {title}
                </Text>
            </Button>
        </HStack>
    );
}