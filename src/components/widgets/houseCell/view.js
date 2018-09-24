import React, { Component} from 'react'
import { TouchableOpacity, Image } from 'react-native'
import  styles from './styles'

export default class HouseCell extends Component{

    static defaultProps = {
        house: null,
        onHousePress:() => {},

    }
    render(){
        const { house, selected, onHousePress, selectedBackgroundColour} = this.props
        var image = house.image_dir ? { uri: house.image_dir } : require('../../../resources/placeholder_house.jpg')
       
        return(
            <TouchableOpacity 
                style={styles.cellContainer} 
                onPress={ () => onHousePress(house)}
                activeOpacity = {0.4}
            >
                <Image 
                    source = {image}
                    style={ styles.houseImageOnCell }
                    resizeMode = {'cover'}
                />
             
            </TouchableOpacity>
        )
    }

}