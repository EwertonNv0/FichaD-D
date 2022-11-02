import { Box, HStack, IconButton, useTheme } from 'native-base';
import { List } from 'phosphor-react-native';
import { PrimaryTemplate } from '../components/template/PrimaryTemplate';

export function Home() {

    const { colors } = useTheme();

    return (
        <PrimaryTemplate>
            <HStack>
                <Box>
                    
                </Box>
            </HStack>
        </PrimaryTemplate>
    );
}