import { StyleSheet } from "react-native"
import { Colors } from "./Colors"
export const GlobalStyles=StyleSheet.create({
   
    pantallPrincipal:{
        fontSize:70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color:Colors.white
    },
    pantalla2:{
        fontSize:40,
        textAlign: 'right',
        width: '90%',
        color:Colors.white
    },
    boton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Colors.black,
        borderWidth: 2,
        borderRadius: 10, 
       
        
    },
    numeros:{
        backgroundColor:Colors.buttonNum,
        color:Colors.white,
        fontFamily:'monospace'
    },
    operadores:{
        width:90,
        backgroundColor:Colors.brown,
        color:Colors.white,
        fontFamily:'serif'
    },
    funciones:{
        width:70,
        backgroundColor:Colors.buttonFuctions,
        color:Colors.white,
        fontFamily:'Georgia'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.blueContainer,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      },

      fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
})

