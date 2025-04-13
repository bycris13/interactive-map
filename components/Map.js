import { View , StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react';

export default function Map({onLongPress}) {
  return (
    <View>
      <MapView style={styles.map} onLongPress={onLongPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    map:{
        /*height: '100%',
        width: '100%' */
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
});