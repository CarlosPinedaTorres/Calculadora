import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './hooks/useCalculadora';
import { GlobalStyles } from './Themes/GlobalStyles';
import * as Haptics from 'expo-haptics';
export default function App() {
  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
    operacion,resultado  } = useCalculadora();

  return (
    <View style={GlobalStyles.container}>    
    <Pantalla pantallafontSize='pantalla' >{formula}</Pantalla>
 
      {formula === numeroAnterior ? (
      <Pantalla pantallafontSize='pantalla2'> </Pantalla>
    ) : (
      <Pantalla pantallafontSize='pantalla2'>{numeroAnterior}</Pantalla>
    )}   
    
    <StatusBar style="auto" />

  <View style={GlobalStyles.fila}>
    <BotonOperacion type="funciones"label='C' onPress={()=>[clean(),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="funciones" label='+/-' onPress={()=>[cambiarSigno(),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="funciones" label='del' onPress={()=>[borrarDigito(),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="operador"label='/' onPress={()=>()=>[operacion('/'),Haptics.selectionAsync()]}></BotonOperacion>
  </View>
  <View style={GlobalStyles.fila}>
    <BotonOperacion type="numeros"label='7'  onPress={() =>[construirNumero('7'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='8' onPress={() =>[construirNumero('8'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='9' onPress={() =>[construirNumero('9'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="operador" label='x' onPress={()=>[operacion('*'),Haptics.selectionAsync()]}></BotonOperacion>
  </View>
  <View style={GlobalStyles.fila}>
    <BotonOperacion type="numeros"label='4' onPress={() =>[construirNumero('4'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='5' onPress={() =>[construirNumero('5'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='6' onPress={() =>[construirNumero('6'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="operador" label='-' onPress={()=>[operacion('-'),Haptics.selectionAsync()]}></BotonOperacion>
  </View>
  <View style={GlobalStyles.fila}>
    <BotonOperacion type="numeros"label='1' onPress={() =>[construirNumero('1'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='2' onPress={() =>[construirNumero('2'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros"label='3' onPress={() =>[construirNumero('3'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="operador" label='+' onPress={()=>[operacion('+'),Haptics.selectionAsync()]}></BotonOperacion>
  </View>
  <View style={GlobalStyles.fila}>
    <BotonOperacion type="numeros"label='0' width={180} onPress={() =>[construirNumero('0'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="numeros" label='.' onPress={() =>[construirNumero('.'),Haptics.selectionAsync()]}></BotonOperacion>
    <BotonOperacion type="operador" label='='onPress={()=>[resultado(),Haptics.selectionAsync()]} ></BotonOperacion>
  </View>
  </View>

  );
}


