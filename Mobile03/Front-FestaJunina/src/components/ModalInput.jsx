import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const ModalInput = ({ isVisible, title, description, inputText, inputPlaceholder, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
          <Text style={{ marginBottom: 10 }}>{description}</Text>
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={inputPlaceholder}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => {onClose(null); setInputValue('')}} style={{ backgroundColor: 'red', padding: 10, alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onClose(inputValue); setInputValue('')}} style={{ marginLeft: 10,backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
