import { View, Text, StyleSheet, BackHandler, Pressable } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';

export default function Panel({onPressLeft, textLefft, togglePointsFilter }) {
  return (
    <View style={styles.panel}>
      <PressableButton title={textLefft} onPress={onPressLeft}/>
      <PressableButton title='Mostrar/Oculatar' onPress={togglePointsFilter}/>
    </View>
  )
}

const styles = StyleSheet.create({

  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 40,
  },
});