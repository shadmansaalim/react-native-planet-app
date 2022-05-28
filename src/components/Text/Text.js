import React from 'react'
import { View, Text as RNText } from 'react-native'
import { presets } from './Presets'
import { StyleSheet } from 'react-native';

export default function Text({ children, preset = "default", style }) {
    const textStyles = StyleSheet.compose(presets[preset], style);
    return (
        <View>
            <RNText style={textStyles}>
                {children}
            </RNText>
        </View>
    )
}
