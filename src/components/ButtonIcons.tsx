import React from 'react';
import { Button, Icon, IIconProps } from 'native-base';

type Props = IIconProps;

export function ButtonIcons({ as, ...rest }: Props) {
    return (
        <Button
            bg='transparent'
            alignSelf='center'
            borderRadius='full'
            w={5}
            h={5}
            px={0}
            py={0}
            _pressed={{
                bg: '#EB220E70'
            }}
            {...rest}
        >
            <Icon as={as} />
        </Button>
    );
}