import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PressableButton({title, onPress}) {
  return (
    <View>
      {/* Cambia la opacidad a 0.7 cuando se presiona el botón */}
      <Pressable style={({pressed}) => [styles.buttton, {opacity: pressed ? 0.7 : 1} ]} onPress={onPress}>
        <Text style={styles.textColor}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

    buttton:{
        backgroundColor: '#0079fe',
        height: 42,
        width: 200,
        borderRadius: 4,
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4, elevation: 5,
    },

    textColor:{
        color: '#fff',
        fontWeight: 'bold'
    }
    
   

});