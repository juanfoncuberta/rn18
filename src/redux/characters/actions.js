import * as types from './types'
import {setItem} from '../houses/actions';



function setFetching(value){
    return {
        type: types.CHARACTER_SET_FETCHING,
        value: value,
    }
}


export function setList(value){
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}


export function setItem(value){
    return {
        type: types.CHARACTERS_SET_ITEM,
        value
    }
}


export function fetchHouseCharacters(){
    return  ( dispatch, getState, api) => {
        const house = getState().house

        if(!house) return

        dispatch(setFetching(true))
        api
            .fetchHouseCharacters(houseId)
            .then( 
                res => {
                    dispatch(setFetching(false))
                    dispatch(setList(res.data.records))
            })
            .catch( 
                err => {
                    dispatch(setFetching(false))
                   console.log("Error fetching houseCharacters: ", err);
            })

    }
}