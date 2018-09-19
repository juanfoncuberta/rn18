import React, { Component } from 'react'
import { View,Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class Houses extends Component{

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center',  justifyContent: 'center' }}>
                <Text style={{color: 'white' }}>Houses</Text>
                <Button title={'Nav to characters'} color={'yellow'} onPress={()=> Actions.characters()} />
            </View>
        )
    }

}