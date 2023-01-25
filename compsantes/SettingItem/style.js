import { StyleSheet } from "react-native";
import { PADDIND } from '../../outils/constantes'

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        elevation:5,
       justifyContent:'space-between',
       paddingHorizontal: PADDIND.horizontal,
       paddingVertical:PADDIND.vertical,
    }
})
export default styles;