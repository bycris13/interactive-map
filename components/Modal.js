import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native'

export default function CustomModal({children, visibility, modalStyle}){
    return (
    <View> 
      <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      >
        <View style={styles.centerModal}>
          <View style={[styles.modalView, modalStyle]} >
          {children}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centerModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
    modalView:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset:{
          width: 0,
          height: 4
        },
    }
});