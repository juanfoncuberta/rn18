import React, { Component } from 'react'
import { View,Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'


export default class Houses extends Component{

    constructor(props){
        super(props)
        this.navToCharactersView = this.navToCharactersView.bind(this)
    }
    navToCharactersView(){
        Actions.characters()
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color: 'white' }}>Houses</Text>

                <Button 
                    title={'Nav to characters'} 
                    color={'yellow'} 
                    onPress={this.navToCharactersView} />
            </View>
        )
    }

}