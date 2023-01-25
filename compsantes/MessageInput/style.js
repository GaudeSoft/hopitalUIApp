import { StyleSheet } from "react-native";
import { COLORS, PADDIND } from "../../outils/constantes";
const styles = StyleSheet.create({
    container:{
        // padding: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent:'space-between',
    },
    input:{
        flex: 1,
        // padding: 5,
        paddingLeft:10,
        backgroundColor: 'white',
        height: 50,
    },
    send:{
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal:PADDIND.horizontal,
        paddingVertical: 15,
        alignItems:'center',
        color: 'white'
    },
})

export default styles;