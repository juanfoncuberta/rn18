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
       
        return(
            <TouchableOpacity 
                style={styles.cellContainer} 
                onPress={ () => onHousePress(house)}
                activeOpacity = {0.4}
            >
                <Image 
                    source = {{ uri: house.image_dir }}
                    style={ styles.houseImageOnCell }
                    resizeMode = {'cover'}
                />
             
            </TouchableOpacity>
        )
    }

}