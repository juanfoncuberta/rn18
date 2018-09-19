import React, { Component } from 'react'
import { View,Text } from 'react-native'


export default class Houses extends Component{

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center',  justifyContent: 'center' }}>
            <Text style={{color: 'white' }}>Houses</Text>
            </View>
        )
    }

}