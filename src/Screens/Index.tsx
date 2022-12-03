import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props extends StackScreenProps<any, any> { };

export const Index = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Valorant Tracker
            </Text>
            <Text style={styles.subtitle}>
                Selecciona la opción que deseas trackear
            </Text>
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => navigation.navigate('UserLevelScreen')}
            >
                <Text style={styles.searchButtonText}>Cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => navigation.navigate('UserRankScreen')}
            >
                <Text style={styles.searchButtonText}>Ranked</Text>
            </TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD4556',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginTop: 200
    },
    searchButton: {
        backgroundColor: 'black',
        width: '60%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        marginVertical: 20,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    searchButtonText: {
        color: 'white',
        fontSize: 20
    },
    subtitle: {
        fontSize: 20,
        marginTop: 50,
        color: 'white'
    }
})


