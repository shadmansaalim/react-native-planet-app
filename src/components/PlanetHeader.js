import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './Text/Text'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ title = "THE PLANETS", backButton }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {backButton && (
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{ marginRight: spacing[4] }}
                >
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
            )}

            <Text preset="h3">{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: spacing[5],
        borderBottomColor: colors.white,
        borderBottomWidth: 0.2,
    }
});
