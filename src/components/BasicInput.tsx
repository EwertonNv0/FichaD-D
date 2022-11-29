import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function BasicInput({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            w='full'
            size='md'
            bg='transparent'
            fontSize='md'
            color='snow'
            borderRadius={0}
            borderWidth={0}
            borderBottomWidth={1}
            borderColor='gray.300'
            placeholderTextColor='gray.700'
            _focus={{
                backgroundColor: 'transparent',
                borderBottomColor: '#EEEEEE',
                color: '#EEEEEE'
            }}
            {...rest}
        />
    );
}
