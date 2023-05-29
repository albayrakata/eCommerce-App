import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get('window')
const style = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    img: {

        width: deviceSize.width,
        height: deviceSize.height / 1,
        resizeMode: 'contain',
        backgroundColor: 'white'


    },
    body_container: {

    },
    title: {
        fontSize: 23,
        color: '#000',
        fontWeight: '600',
        marginLeft: 20,
        marginTop: 20
    },
    desc: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },

    price: {
        color: 'green',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800'
    },
    icon:{
        width:24,
        height:24
    },
    wishList:{
        position:'absolute',
        right:20,
        top:100,
        backgroundColor:'#E2DFDF',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25
       }
})
export default style