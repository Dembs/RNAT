import React, {useState} from "react";
import { StyleSheet,Text,View, TouchableOpacity,ScrollView,FlatList,TextInput,Button } from "react-native";

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState ('');

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
            style = {styles.input}
                placeholder ='new to...'
                placeholderTextColor='gray'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title ='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create( {
    input : {
        paddingHorizontal: 8,
        marginBottom : 10,
        paddingVertical : 6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
});