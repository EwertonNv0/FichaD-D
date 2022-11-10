import { Center, HStack, Text } from 'native-base';
import { AttributeBox } from './AttributeBox';

export function AttributeContainer({ title, ...rest }) {
    return (
        <Center {...rest}>
            <HStack justifyContent='flex-start'>
                <Text fontSize='sm' color='black' textAlign='left'>
                    {title}
                </Text>
            </HStack>
            <AttributeBox />
        </Center>
    );
}