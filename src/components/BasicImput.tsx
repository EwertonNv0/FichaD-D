import React from 'react';
import { IInputProps, Input } from 'native-base';

export function BasicImput({ ...rest }: IInputProps) {
    return (
        <Input
            borderWidth={0}
            borderBottomWidth={1}
            borderRadius={0}
            w='full'
            borderColor='gray.300'
            bg='transparent'
            color='snow'
            fontSize='md'
            _focus={{
                backgroundColor: 'transparent',
                borderBottomColor: '#EEEEEE',
                color: '#EEEEEE'
            }}
            {...rest}
        />
    );
}
