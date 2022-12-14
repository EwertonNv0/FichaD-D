import { Button, Checkbox, HStack, Text } from 'native-base';
import { useState } from 'react';


export function AbilityBox({ title, atributo }) {

    const [ bonus, setBonus ] = useState(false);
    const modificador = () => {
        const intMod = parseInt(atributo)
        if (isNaN(intMod)) {
            return ''
        }
        else {
            const mod = Math.floor((intMod - 10) / 2) * (bonus ? 2 : 1)
            return mod <= 0 ? mod : `+${mod}`
        }
    }

    return (
        <HStack w='full' alignItems='center' my='1px'>
            <Checkbox
                borderRadius='full'
                value='proficiency'
                colorScheme='red'
                accessibilityLabel='proficiency'
                isChecked={bonus}
                onChange={() => {setBonus(!bonus)}}
            />

            <Text mx={2} fontSize='sm'>
                {modificador()}
            </Text>

            <Button
                px={1}
                py={0}
                bg='transparent'
                borderWidth={1}                                
                borderColor='gray.100'
                _pressed={{
                    backgroundColor: 'gray.100'
                }}
            >
                <Text fontSize='md'>
                    {title}
                </Text>
            </Button>
        </HStack>
    );
}