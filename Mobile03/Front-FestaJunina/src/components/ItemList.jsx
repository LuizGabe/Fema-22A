import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function ItemList({item, index, handleRemoveItem}) {

  return (
    <View style={styles.oneIten}>
      <View style={{ padding: 10 }}>
        <Text style={styles.listItensText}># {index}</Text>
      </View>
      <Text style={styles.listItensText}>{item.nome}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleRemoveItem(item.key)}
        style={styles.buttonItem}
      >
        <Text style={styles.buttonItemText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonItem: {
    backgroundColor: '#ff0000',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonItemText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  oneIten: {
    backgroundColor: '#404040',
    width: 312,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  listItensText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
