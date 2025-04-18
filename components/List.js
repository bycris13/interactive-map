import { View, Text, StyleSheet, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'

export default function List({points, closeModal}) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={points.map(x => x.name)}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={item => item}
      />
      <View style={styles.buttonWrapper}>
        <Pressable onPress={closeModal} style={styles.button}>
          <Text style={styles.colorButto}>Cerrar</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },

  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },

  colorButto:{
    color: '#fff',
  },

  button:{
    backgroundColor: '#0079fe',
    width: '25%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor:'#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
    
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: Dimensions.get('window').width,
    padding: 10,
  }
});
