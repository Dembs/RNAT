import React from "react";
import { StyleSheet,Text,View, Button, TouchableOpacity,ScrollView,FlatList, Pressable } from "react-native";


export default function Header () {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    header : {
        height:80,
        paddingTop : 28,
        backgroundColor : 'coral'
    },
    title : {
        textAlign: 'center',
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});