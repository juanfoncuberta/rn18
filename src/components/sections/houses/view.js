import React, { Component } from 'react'
import { View,Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'
import * as api from '../../../api/'


export default class Houses extends Component{

    constructor(props){
        super(props)
        this.state = {
            houseslist: []
        }
    }

    componentDidMount(){
       this._fecthHouseslist()
    }

    _fecthHouseslist(){
        api.fecthHouses().then(
            response => {
                if(response && response.data && response.data.records)
                    this.setState( {houseslist: response.data.records} )
            }
        ).catch( error => {
            this.setState( {houseslist: []} )
        }

        )
    }
    navToCharactersView(){
        Actions.characters()
    }
    _onHouseTapped(house){

        Alert.alert(house.nombre)
    }
    _renderItem({ item }){
        return <HouseCell 
                    house={item}
                    onHousePress={(value)=> this._onHouseTapped(value)}    
                />
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.houseslist} 
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={(item,id) => 'cell' + id}
                />
            </View>
        )
    }

}

class HouseCell extends Component{

    static defaultProps = {
        house: null,
        onHousePress:() => {},
    }
    render(){
        const { house } = this.props
        const name = house ? house.nombre : 'House without name'
        return(
            <TouchableOpacity style={styles.cellView} onPress={ () => this.props.onHousePress(house) }>
                <Text>{ name }</Text>
            </TouchableOpacity>
        )
    }

}