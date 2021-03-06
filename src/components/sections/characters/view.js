import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets/'
import { Actions } from 'react-native-router-flux'
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

const mapDispatchToProps = (dispatch, props) => {
   
    return {
        fetchHouseCharacters: () => {
            dispatch(CharactersActions.fetchHouseCharacters())
        },
        onCharacterTapped: (character) => {
            console.log(character)
            dispatch(CharactersActions.setItem(character))
             Actions.characterDetail({title: character.nombre})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters)