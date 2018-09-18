import React, {Component} from 'react' 
import { View ,Text} from 'react-native'



export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            backgroundColor: 'blue',
            height: 300,
            title: "Title's init value"
        }
    }

    componentWillMount(){
        console.log("this.state",this.state)
        this.setState({backgroundColor: 'lime'})
        
    }
    componentDidMount() {
        setTimeout( () => {
            this.setState({
                backgroundColor: 'red',
                title: "Title's changed value"
            })
        },5000)
        
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: this.state.backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 20}}>{this.state.title}</Text>
            </View>

        )    
    }

}