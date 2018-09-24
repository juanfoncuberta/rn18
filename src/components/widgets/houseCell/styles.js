import { StyleSheet, Dimensions } from 'react-native'


const {height, width} = Dimensions.get('window')


export default StyleSheet.create({
    cellContainer: {
        width: width/2,
        borderWidth: 1, 
        height: height/2 -10,
        backgroundColor: 'rgb(24,24,24)',
        alignItems: 'center', 
        paddingHorizontal: 4,
        justifyContent: 'center',
        paddingVertical: 2,
        borderColor: 'grey',
        borderWidth: 1
    },
    houseImageOnCell:{
        width: '100%',
        height:'100%'
    }
})