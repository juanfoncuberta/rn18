import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)'
    },
    image: {
        width: '100%',
        height: 200
    },
    dataContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    },
    touchableOpacity: {
        backgroundColor: 'rgb(80,80,80)', 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 14
    },
    edit: {
        fontWeight: '600', 
        color: 'white'
    }
})