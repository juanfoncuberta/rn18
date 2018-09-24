import React, { Component } from 'react'
import { View,Text, FlatList, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'
import * as api from '../../../api/'


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
                    backgroundColor = {'white'}
                />
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.houseslist} 
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={(item,id) => 'cell' + id}
                    extraData = {this.state}
                />
            </View>
        )
    }

}

class HouseCell extends Component{

    static defaultProps = {
        house: null,
        onHousePress:() => {},
        selected: null,
        selectedBackgroundColour: 'red',
        backgroundColor: 'white'
    }
    render(){
        const { house, selected, onHousePress, selectedBackgroundColour} = this.props
        const name = house ? house.nombre : 'House without name'
        const isSelected = selected && selected.id == house.id ? true : false
        const backgroundColor = isSelected ? {backgroundColor: selectedBackgroundColour} : {backgroundColor: this.props.backgroundColor}
        return(
            <TouchableOpacity 
                style={[styles.cellView, backgroundColor]} 
                onPress={ () => onHousePress(house)}
            >
                <Text>{ name }</Text>
            </TouchableOpacity>
        )
    }

}