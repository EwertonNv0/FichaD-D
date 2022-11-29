import { Button, Text, IButtonProps } from 'native-base';

type Props = IButtonProps & {
    title: string;
    isActive?: Boolean;
    type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
    return (
        <Button
            alignSelf='center'
            borderRadius={0}
            w={isActive ? '50%' : '45%'}
            h={isActive ? '45px' : '40px'}
            bgColor={isActive ? 'primary.700' : 'secondary.700'}
            {...rest}
        >
            <Text
                color={isActive ? 'white' : 'gray.200'}
                fontSize={isActive ? 'md' : 'sm'}
            >
                {title}
            </Text>
        </Button>
    );
}