import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function UserLevelScreen() {
    const [user, onChangeUser] = useState("");
    const [tag, onChangeTag] = useState("");
    const [username, setUsername] = useState("");
    const [usertag, setUsertag] = useState("");
    const [accountlevel, setAccountlevel] = useState("");
    const [userimage, setUserImage] = useState("https://i.pinimg.com/564x/ac/f3/b4/acf3b4ab3d8d249aa1973904516db0c2.jpg");


    const obtener = () => {

        let newname = encodeURIComponent(user.trim())

        let newtag = "/" + tag
            console.log(newname)

        let linkaccount = "https://api.henrikdev.xyz/valorant/v1/account/" + newname + newtag
        console.log(linkaccount)
        fetch(linkaccount)
            .then((response) => response.json()) //2
            .then((user) => {
                setUsername("username: " + user.data.name)
                setAccountlevel("Nivel: " + user.data.account_level)
                setUsertag("Usertag: " + user.data.tag)
                setUserImage(user.data.card.small)
            });


        let link = "https://api.henrikdev.xyz/valorant/v1/mmr/na/" + newname + newtag
        fetch(link)
            .then((response) => response.json()) //2
            .then((user) => {
                let x = 5
                let y = 5
                if (user.data.currenttierpatched == null) {


                } else {

                }


            });






    }
    const searchPlayer = () => {
        obtener();
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Valorant player
            </Text>
            <TextInput
                value={user}
                style={styles.input}
                onChangeText={onChangeUser}
                placeholder='Ingresa tu nickname'
                placeholderTextColor='white'
                keyboardType='numeric' />
            <TextInput
                value={tag}
                style={styles.input}
                onChangeText={onChangeTag}
                placeholder='Ingresa tu nickname'
                placeholderTextColor='white'
                keyboardType='numeric' />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={searchPlayer}
            >
                <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>
            <Image
                style={[styles.tinyLogo, styles.results]}
                source={{ uri: userimage }}
            />
            <Text style={[styles.results, styles.resultsText]}>
                {username}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {usertag}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {accountlevel}
            </Text>

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
        marginTop: 100
    },
    input: {
        color: 'white',
        height: 40,
        margin: 12,
        width: '70%',
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'black'
    },
    searchButton: {
        backgroundColor: 'black',
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        marginVertical:20,
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
    tinyLogo: {
        width: 150,
        height: 150,
        marginTop: 10
    },
    results: {
        marginTop: 20
    },
    resultsText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
