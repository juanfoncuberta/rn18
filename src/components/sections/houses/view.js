import React, { Component } from 'react'
import { View,Text, FlatList, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'
import { HouseCell } from '../../widgets'
import { connect } from 'react-redux'
import * as HousesActions from '../../../redux/houses/actions'


class Houses extends Component{

    constructor(props){
        super(props)
        this.state = {
            houseslist: []
        }
    }

    componentDidMount(){
       this.props.fetchHousesList()
    }
  
    _onHouseTapped(house){
        
    }
    _renderItem({ item }){
        return <HouseCell 
                    house={item}
                    onHousePress={(value)=> this._onHouseTapped(value)}   
                />
    }
    render(){
        return(
            <View style={styles.cellContainer}>
                <FlatList 
                    data={this.props.list} 
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={(item,id) => 'cell' + id}
                    extraData = {this.state}
                    numColumns = { 2 }
                    style = {styles.flatList}
                />
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isFetching: state.houses.isFetching,
        list: state.houses.list
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())        
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Houses)