import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../Themes/GlobalStyles';

interface Props extends TextProps {
  pantallafontSize: 'pantalla' | 'pantalla2',
};

export const Pantalla = ({children, pantallafontSize,...rest}:Props) => {
  return (
    <Text numberOfLines={1} adjustsFontSizeToFit style={[pantallafontSize==='pantalla'?GlobalStyles.pantallPrincipal:null,
      pantallafontSize==='pantalla2'?GlobalStyles.pantalla2:null
    ] }  {...rest}>
        {children}
    </Text>
  )
}


