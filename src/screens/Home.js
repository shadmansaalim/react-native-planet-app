import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import PlanetHeader from '../components/PlanetHeader'
import { PLANET_LIST } from '../data/PlanetList'
import { colors } from '../theme/colors'
import Text from '../components/Text/Text'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const PlanetItem = ({ item }) => {
    const { name, color } = item;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details', { planet: item })
            }}
            style={styles.item}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text preset="h3" style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
        </TouchableOpacity>
    );
};



export default function Home() {
    const [list, setList] = useState(PLANET_LIST);
    const renderItem = ({ item }) => {
        return (
            <PlanetItem
                item={item}
            />
        );
    };

    const searchFilter = text => {
        const filteredList = PLANET_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })

        setList(filteredList);
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <TextInput
                placeholder="Type the planet name"
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    },
    list: {
        padding: spacing[4]
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    itemName: {
        textTransform: "uppercase",
        marginLeft: spacing[4]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5
    }

});
