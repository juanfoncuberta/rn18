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
    return  (dispatch,getState) => {
        const house = getState().house.item
        console.log("fetchHouseCharacters house: ", house)
    }
}