
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
        marginTop: StatusBar.currentHeight
    },
    button: {
        width:100,
        height:30,
        
        backgroundColor:"pink"
    },
    buttons: {
        gap:10,
        flexDirection:"row",
        marginVertical: 30
    },
    flat: {
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        backgroundColor:"yellow"
    },
    separador: {
        height: 100
    },
    img: {
        width:300,
        height:300
    }
})

export default styles;