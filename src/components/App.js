import React, {Component} from 'react' 
import { StatusBar} from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import * as api from '../api/'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

export default class App extends Component {

    componentWillMount(){
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="houses" component={Houses} initial={true} hideNavBar={true}/>
                        <Scene key="characters" 
                                component={Characters} 
                                navigationBarStyle={{ backgroundColor: 'black'}}
                                backButtonTintColor = {'white'}
                                backButtonTextStyle= {{color: 'white'}}
                                titleStyle= {{color: 'white'}}
                         />
                    </Stack>
                </Router>
            </Provider>
        )    
    }

}