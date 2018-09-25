import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import  styles from './styles'
import { HouseCell } from '../../widgets'
import { connect } from 'react-redux'
import * as HousesActions from '../../../redux/houses/actions'


class Houses extends Component{

    constructor(props){
        super(props)
        //Binding the activity indicator to this context
        this._renderActivityIndicator = this._renderActivityIndicator.bind(this)
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

    _renderActivityIndicator() {
        return (
            <View style={{padding:20}}>
                <ActivityIndicator size={'large'} color={"white"}  animating={this.props.isFetching}/>
            </View>
        )
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
                    ListFooterComponent={ this._renderActivityIndicator }
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