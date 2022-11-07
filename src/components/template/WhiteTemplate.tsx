import React from 'react';
import { VStack } from 'native-base';

export function WhiteTemplate( props ) {
    return (
        <VStack flex={1} px={2}>
            <VStack
                bg='snow'
                w='full'
                borderTopRadius='sm'
                flex={1}
                px={2}
            >
                {props.children}
            </VStack>
        </VStack>
    );
}