import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native'
import Text from '../components/Text/Text'
import { colors } from '../theme/colors'
import PlanetHeader from '../components/PlanetHeader'
import { spacing } from '../theme/spacing'
import { MercurySvg, EarthSvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from "../svg/index.js";


const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset="small" style={{ textTransform: "uppercase" }}>{title}</Text>
            <Text preset="h3">{value}</Text>
        </View>
    );
}

export default function Details({ navigation, route }) {
    const { planet } = route.params;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet
    const renderImage = (name) => {
        switch (name) {
            case "mercury": return <MercurySvg />;
            case "earth": return <EarthSvg />
            case "jupiter": return <JupiterSvg />
            case "mars": return <MarsSvg />
            case "neptune": return <NeptuneSvg />
            case "saturn": return <SaturnSvg />
            case "uranus": return <UranusSvg />
            case "venus": return <VenusSvg />
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader title={planet.name} backButton={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage(name)}
                </View>

                <View style={styles.detailsView}>
                    <Text preset="h1" style={styles.name}>{name}</Text>
                    <Text preset="small" style={styles.description}>{description}</Text>
                    <Pressable style={styles.source} onPress={() => {
                        Linking.openURL(wikiLink);
                    }}>
                        <Text>Source : </Text>
                        <Text style={styles.sourceText}>Wikipedia</Text>
                    </Pressable>
                </View>

                <PlanetSection title="Rotation Time" value={rotationTime} />
                <PlanetSection title="Revolution Time" value={revolutionTime} />
                <PlanetSection title="Radius" value={radius} />
                <PlanetSection title="Average Temp" value={avgTemp} />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    imageView: {
        marginTop: spacing[8],
        alignItems: "center",
        justifyContent: "center"
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        marginBottom: spacing[6]
    },
    name: {
        textTransform: "uppercase",
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        marginTop: spacing[5],
        lineHeight: 21
    },
    source: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: spacing[5]
    },
    sourceText: {
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    planetSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderColor: colors.grey,
        borderWidth: 1,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4]
    }

});
