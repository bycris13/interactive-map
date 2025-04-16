import { View, Text, StyleSheet, Dimensions, FlatList, Pressable } from 'react-native'
import React from 'react'

export default function List({points, closeModal, pressed}) {
  return (
    <>
    <View>
      <FlatList
      style={styles.listStyle}
        data={points.map(x => x.name)}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={item => item} 
        />
    </View>
    <View style={styles.button}>
    <Pressable  onPress={closeModal}>
        <Text style={styles.colorButto}>Cerrar</Text>
    </Pressable>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    colorButto:{
      color: '#fff',
    },

    button:{
        backgroundColor: '#0079fe',
        width: '20%',
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '22%',
        borderRadius: 5,
        shadowColor:'#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    listStyle: {
      marginTop: '20%'
    },

    item: {
        borderBottomWidth: 1,
        borderBlockEndColor: '#ccc',
        width: Dimensions.get('window').width,
        height: 45,
        padding: 15,
    }
});