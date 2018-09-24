import React, { Component } from 'react'
import { View,Text, FlatList, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'
import * as api from '../../../api/'
import { HouseCell } from '../../widgets'


export default class Houses extends Component{

    constructor(props){
        super(props)
        this.state = {
            houseslist: [],
            selected: null
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
            this.setState({
                houseslist: []
            })
        }

        )
    }
  
    _onHouseTapped(house){
        this.setState({
            selected: house
        })
    }
    _renderItem({ item }){
        return <HouseCell 
                    house={item}
                    onHousePress={(value)=> this._onHouseTapped(value)}   
                    selected={this.state.selected}
                    selectedBackgroundColour={'lime'}
                />
    }
    render(){
        return(
            <View style={styles.cellContainer}>
                <FlatList 
                    data={this.state.houseslist} 
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={(item,id) => 'cell' + id}
                    extraData = {this.state.selected}
                    numColumns = { 2 }
                    style = {styles.flatList}
                />
            </View>
        )
    }

}