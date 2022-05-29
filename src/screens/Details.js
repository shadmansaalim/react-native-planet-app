import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Text from '../components/Text/Text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/PlanetHeader'

export default function Details({ planet }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader title={planet.name} backButton={true} />
            <Text>Details</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },

});
