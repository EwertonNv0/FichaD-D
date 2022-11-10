import { HStack, Text } from 'native-base';

export function Label({ title }) {
    return (
        <HStack justifyContent='flex-start'>
            <Text fontSize='sm' color='black' textAlign='left'>
                {title}
            </Text>
        </HStack>
    );
}