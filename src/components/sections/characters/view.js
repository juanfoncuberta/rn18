import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets/'

class Characters extends Component {

    componentDidMount(){
        this.props.fetchHouseCharacters()
    }

    _renderItem( item, index){
        return <CharacterCell character={item} onCharacterPress={this.props.onCharacterTapped} />

    }
    
    render(){
        const { list , ifFetching } = this.props 
        return(
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({ item, index}) => this._renderItem(item, index) }
                    keyExtractor={(item, id) => 'character' + id}
                />
            </View>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
       list: state.characters.list,
       isFetching: state.characters.isFetching
    }
}

const mapDispatchTopProps = (dispatch, props) => {
   
    return {
        fetchHouseCharacters: () => {
            dispatch(CharactersActions.fetchHouseCharacters())
        },
        onCharacterTapped: (character) => {
            dispatch(CharactersActions.setItem(character))
        }
    }
}

export default connect(mapStateToProps,mapDispatchTopProps)(Characters)