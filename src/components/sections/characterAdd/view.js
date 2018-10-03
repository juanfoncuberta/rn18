import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput } from '../../widgets'
import styles from './styles'

export default class extends Component{

    constructor(props){
        super(props)
        this.state={
            name: '',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{padding:20}}>
                    <TextInput
                        onchangeText={ name => this.state({ name })}
                        value={this.state.name}
                        label={'Character name:'}
                    />
                </View>

            </View>
        )
    }
}