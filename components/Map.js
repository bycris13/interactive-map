import { View , StyleSheet, Dimensions} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React from 'react';

export default function Map({onLongPress, points, pointsFilter}) {
  return (
    <View>
      <MapView style={styles.map} onLongPress={onLongPress}>
        {pointsFilter && points.map(x =>
        <Marker
          key={x.name}
          coordinate={x.coordinate}
          title={x.name}
        />)}
      </MapView>
 
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