import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default Input = ({title, ...rest}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput style={styles.inputBorder} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40
  },

  inputBorder:{
    height: '70%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }

})
