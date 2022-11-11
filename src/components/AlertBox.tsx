import React from 'react';
import { Alert, Box, Text, VStack } from 'native-base';

export function AlertBox({type, title, content, ...rest}) {
    return (
        <Alert
        w="100%"
        status={type}
        {...rest}
        >
            <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <Alert.Icon size="md" />
                <Text fontSize="md" fontWeight="medium" _dark={{color: "coolGray.800"}}>
                    {title}
                </Text>

                <Box _text={{textAlign: "center"}} _dark={{_text: {color: "coolGray.600"}}}>
                    {content}
                </Box>
            </VStack>
        </Alert>
    );
}