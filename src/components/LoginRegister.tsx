import React from 'react';
import { Button, Heading } from 'native-base';

export function LoginRegister({ title, ...rest }) {
    return (
        <Button
            bg='primary.700'
            borderRadius='sm'
            h={12}
            mt= {4}
            _pressed={{
                bg: 'primary.800'
            }}
            {...rest}
        >
            <Heading color='snow' fontSize='md'>
                {title}
            </Heading>
        </Button>
    );
}