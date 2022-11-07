import React from 'react';
import { ScrollView } from 'native-base';

export function ScrollTemplate(props, {...rest}) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
            {...rest}
        >
            {props.children}
        </ScrollView>
    );
}