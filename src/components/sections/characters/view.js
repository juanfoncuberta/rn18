import React, { Component } from 'react'
import { View, Text } from 'react-native'


export default class Characters extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'lime', alignItems: 'center',  justifyContent: 'center' }}>
                <Text style={{color: 'white' }}>Characters</Text>
            </View>
        )
    }
}