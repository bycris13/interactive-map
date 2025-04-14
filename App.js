import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Map from './components/Map';
import Modal  from './components/Modal';
import Input from './components/Input';
import PressableButton from './components/PressableButton';
import {  Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [points, setPoints] = useState([]);
  const [pointTem, setPointTemp] = useState({});
  const [name, setName] = useState('');
  // Cuando se hace una plsacion larga en el mapa, guarda las coordenadas y las muestra.
  const handleLongPress = ({nativeEvent}) => {
    // las coordenadas geográficas (latitud y longitud) del lugar donde hiciste la pulsación larga.
    setPointTemp(nativeEvent.coordinate);
    console.log(nativeEvent);
    setVisibility(true);
  }
  // Texto que le entra al input
  const handleChangeText = (text) =>{
    setName(text);
  }

  const handleSubmit = () => {
    const newPoint = {coordinate: pointTem, name: name}
    setPointTemp(points.concat(newPoint));
    setVisibility(false);
    setName('');
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Modal 
      visibility={visibility}
      onLongPress={() => setVisibility(false)}
      >
        <Input 
        title='Nombre'
        placeholder= 'Nombre del Punto'
        onChangeText={handleChangeText}/>
       <PressableButton title='Aceptar' onPress={() => handleSubmit()}/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
