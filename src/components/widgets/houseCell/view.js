import React, { Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'
import  styles from './styles'

export default class HouseCell extends Component{

    static defaultProps = {
        house: null,
        onHousePress:() => {},
        selected: null,
        selectedBackgroundColour: 'red'
    }
    render(){
        const { house, selected, onHousePress, selectedBackgroundColour} = this.props
        const name = house ? house.nombre : 'House without name'
        const isSelected = selected && selected.id == house.id ? true : false
        const backgroundColor = isSelected ? {backgroundColor: selectedBackgroundColour} : {backgroundColor: styles.cellView.backgroundColor}
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