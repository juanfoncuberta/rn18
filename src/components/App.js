import React, {Component} from 'react' 
import { View ,Text} from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'



export default class App extends Component {

    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} title="Houses" />
                    <Scene key="characters" component={Characters} title="Characters" initial={true}/>
                </Stack>
            </Router>

        )    
    }

}