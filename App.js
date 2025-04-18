import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Map from './components/Map';
import Modal  from './components/Modal';
import Input from './components/Input';
import PressableButton from './components/PressableButton';
import List from './components/List';
import {  Pressable, StyleSheet, Text, View } from 'react-native';
import Panel from './components/Panel';

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [points, setPoints] = useState([]);
  const [pointTem, setPointTemp] = useState({});
  const [name, setName] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_points');
  const [pointsFilter, setPointsFilter] = useState(true);

  
  const tooglePointsFilter = () => setPointsFilter(!pointsFilter)

  // Cuando se hace una pulsacion larga en el mapa, guarda las coordenadas y las muestra.
  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_points');
    // las coordenadas geográficas (latitud y longitud) del lugar donde hiciste la pulsación larga.
    setPointTemp(nativeEvent.coordinate);
    /* console.log(nativeEvent); */
    setVisibility(true);
  }
  // Texto que le entra al input
  const handleChangeText = (text) =>{
    setName(text);
  }

  const handleSubmit = () => {
    const newPoint = {coordinate: pointTem, name: name}
    setPoints(points.concat(newPoint)); 
    setVisibility(false);
    setName('');
  }

  const handleList = () => {
    setVisibilityFilter('all_points');
    setVisibility(true);
  }

 console.log(points);
 
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleList} textLefft='Lista' togglePointsFilter={tooglePointsFilter}/>
      <Modal 
      visibility={visibility}
      modalStyle={visibilityFilter === 'new_points' 
      ? { width: '62%', height: '35%', justifyContent: 'center' } 
      : { width: '90%', height: '80%' }
    }
      onLongPress={() => setVisibility(false)}>
    
    {
    visibilityFilter === 'new_points'
    ? (
      <View style={styles.form}>
        <Input 
          title='Nombre:'
          placeholder='Nombre del Punto'
          onChangeText={handleChangeText}
        />
       <View style={styles.modalButton}>
        <PressableButton  title='Aceptar' onPress={() => handleSubmit()}/>
       </View>
      </View>
    )
    : <List points={points} closeModal={() => setVisibility(false)}/>
  }
</Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding: 15,
  },

  modalButton:{
    marginTop: '10%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
