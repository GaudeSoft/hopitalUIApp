import { StyleSheet } from "react-native";
import { COLORS, PADDIND } from "../../outils/constantes";


const dashbordStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
        backgroundColor: 'white',
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    userName:{
        fontSize: 16,
    },

    //Styler la flatlist

    scrollableList:{
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
    },

    title:{
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
    },

    title_space_between:{
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleBold:{
        fontWeight: 'bold'
    },
    link:{
        color: COLORS.main,
    },
    doctorsContainer:{
        // marginTop: 15,
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
    },
    
    doctorsCard:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'white',
        elevation: 5,
        padding:10, 
        paddingHorizontal: PADDIND.horizontal,
        paddingVertical: PADDIND.vertical,
        marginBottom: 15,
        borderRadius: 5
    },
    doctorImg:{
        width:80,
        height:80,
        borderRadius: 80/2,
        marginRight: 15,
    },
    doctorInfo:{
        flexDirection: 'column'
    },
    doctorName:{
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:15,
    },
    doctorSpec:{
        backgroundColor: COLORS.main,
        padding: 5, 
        paddingHorizontal: PADDIND.horizontal,
        // paddingVertical: PADDIND.vertical,
        borderRadius:15,
        fontSize:14,
        color: 'white'
    }

});

export default dashbordStyles;