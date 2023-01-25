import { StyleSheet } from "react-native";
import { PADDIND } from "../../outils/constantes";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical
    },
    header:{
        // backgroundColor:'white',
        // elevation:5,
        flexDirection:'row',
        padding:10,
        marginTop:15,
        alignItems:'center'
    },
    image:{
        width:80,
        height:80,
        borderRadius:80/2
    },
    userInfo:{
        marginLeft: 15 ,
    },
    userName:{
       fontWeight: 'bold',
       marginBottom:5
    },
    userEmail:{
        marginBottom:5
    }
})
export default styles