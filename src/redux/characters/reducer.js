import * as types from './types'

const initialState = {
    list: [],
    isFetching: false,
    item: null
}

export default function reducer( state = initialState, action = {} ){

    switch(action.type){
        case types.CHARACTER_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case types.CHARACTERS_SET_ITEM:
            return {
                ...state,
                item: action.value
            }
        case types.CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            }
        default:
            return state
    }
} 