import { StyleSheet } from "react-native";
import { PADDIND } from "../../outils/constantes";

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        // elevation: 5,
        marginTop: 15,
        paddingVertical: PADDIND.vertical,
        paddingHorizontal: PADDIND.horizontal

    },
    messageImg:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 15
    },
    messageInfo:{
        flexDirection:'column',
        flex: 1,
        paddingHorizontal: PADDIND.horizontal
    },
    date_name:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 5,
    },
    name:{
        fontWeight:'bold',
        marginRight: 5,
    }
});

export default styles;