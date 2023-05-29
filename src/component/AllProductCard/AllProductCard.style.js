import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
        flex: 1,
        padding: 10,
        margin: 5

    },
    image: {
        width: 100,
        height: 200,
        resizeMode: 'stretch'


    },
    favIcon: {
        marginLeft: 100
    },
    body_container: {
        padding: 5,
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'center',
    
        textAlign: 'left',
        color: 'orange'

    },
    button_container: {
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 20,
    },



})