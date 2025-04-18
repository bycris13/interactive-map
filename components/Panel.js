import { View, Text, StyleSheet, BackHandler, Pressable } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';

export default function Panel({onPressLeft, textLefft, togglePointsFilter }) {
  return (
    <View style={styles.panel}>
      <View style={styles.hugeBotton}>
      <PressableButton title={textLefft} onPress={onPressLeft}/>
      </View>
      <View style={styles.hugeBotton}>
      <PressableButton  title='Mostrar/Oculatar' onPress={togglePointsFilter}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  hugeBotton:{
    width: '45%',
  },

  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});