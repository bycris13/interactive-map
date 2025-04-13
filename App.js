import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Map from './components/Map';
import Modal  from './components/Modal';
import Input from './components/Input';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [points, setPoints] = useState([]);
  const handleLongPress = ({nativeEvent}) => {
    console.log(nativeEvent);
    const  newPoints = points.concat({coordinate: nativeEvent.coordinate});
    setPoints(newPoints);
    setVisibility(true);
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Modal 
      visibility={visibility}
      onLongPress={() => setVisibility(false)}
      >
        <Input 
        tietle='Nombre'
        />
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
