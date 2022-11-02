import { Box, HStack, VStack } from 'native-base';

export function PrimaryTemplate(props) {
    return (
        <VStack bg='gray.600' flex={1}>
            <VStack w='full' flex={1} pt={9} px={2}>
                {props.children}
            </VStack>
        </VStack>
    );
}