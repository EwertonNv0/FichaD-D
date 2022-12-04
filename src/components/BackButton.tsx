import { Box, Button } from 'native-base';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export function BackButton({ ...rest }) {
    
    const navigation = useNavigation();

    return (
        <Box alignSelf='center' mx={2}>
            <Button
                bg='transparent'
                borderRadius='full'
                p={2}
                _pressed={{
                    backgroundColor: 'gray.300'
                }}
                onPress={() => navigation.goBack()}
                {...rest}
            >
                <ArrowLeft color='white' />
            </Button>
        </Box>
    );
}