import React, {Component} from 'react' 
import { StatusBar} from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import * as api from '../api/'



export default class App extends Component {

    componentWillMount(){
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} initial={true} hideNavBar={true}/>
                    <Scene key="characters" component={Characters} title="Characters" />
                </Stack>
            </Router>

        )    
    }

}