import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const LeagueRankUser = () => {
    const key = "RGAPI-15435f2e-9959-40fc-acab-5c5fef089ebc";
    const images = [""]
    const [user, onChangeUser] = useState("");
    const [userid, setUserid] = useState("");
    const [username, setUsername] = useState("");
    const [userlevel, setUserlevel] = useState("");
    const [usertier, setUsertier] = useState("");
    const [userrank, setUserrank] = useState("");
    const [userlp, setUserlp] = useState("")


    function obtener() {

        let newname = user

        let linkaccount = "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + newname + "?api_key=" + key
        fetch(linkaccount)
            .then((response) => response.json())
            .then((user) => {
                setUserid(user.id)
    
                setUserlevel(user.summonerLevel)
            });


        let rankedaccount = "https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + userid + "?api_key=" + key
        console.log(rankedaccount)
        fetch(rankedaccount)
            .then((response) => response.json())
            .then((rank) => {
                setUsertier(rank[1].tier)
                setUserrank(rank[1].rank)
                setUserlp(rank[1].leaguePoints)
            });


    }
    const searchPlayer = () => {
        obtener();
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.inicio]}>
                League of legends
            </Text>
            <Text style={styles.title}>
                SoloQ Tracker
            </Text>
            <TextInput
                value={user}
                style={styles.input}
                onChangeText={onChangeUser}
                placeholder='Ingresa tu nickname'
                placeholderTextColor='white'
                keyboardType='numeric' />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={searchPlayer}
            >
                <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>

            <Text style={[styles.results, styles.resultsText]}>
                {username}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {userlevel}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {usertier}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {userrank}
            </Text>
            <Text style={[styles.results, styles.resultsText]}>
                {userlp}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD4556',
        alignItems: 'center',
        paddingHorizontal: 1
    },
    title: {
        color: 'white',
        fontSize: 45,
    },
    inicio:{
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


