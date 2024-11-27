import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../Themes/GlobalStyles";
interface Props {
    label: string,
    width?: number,
    type?:string,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width=80, onPress,type}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width},type==='operador'?GlobalStyles.operadores:null,
                    type==='funciones'?GlobalStyles.funciones:null,
                    type==='numeros'?GlobalStyles.numeros:null
                ]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

