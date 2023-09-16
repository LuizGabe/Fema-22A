import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { data, render } from '../data/ItensForVending.js'
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

import { SelectList } from 'react-native-dropdown-select-list'
import { ItemList } from "../components/ItemList.jsx";
import { ModalInput } from "../components/ModalInput.jsx";

import {
  addSellRecord,
  deleteSellRecord,
  itensForSale,
  getAllSellRecords
} from '../api/rotes.api.js'

export function Home() {

  const [sellQtd, setSellQtd] = useState(0)
  const [sellValue, setSellValue] = useState(0)
  const [selectedItem, setSelectedItem] = useState('')

  // é a lista em si
  const [soldList, setSoldList] = useState([])

  // é o dropdown
  const [dataForRender, setDataForRender] = useState([])

  // é o modal
  const [modalVisible, setModalVisible] = useState(false)
  const [index, setIndex] = useState(null)

  useEffect(() => {
    getAllSellRecords().then(data => {
      const formatedData = data.map(item => {
        return {
          key: item.id,
          nome: item.name,
          saleCost: item.price
        }
      })

      setSoldList(formatedData)
      setSellQtd(data.length)
      setSellValue(data.reduce((acc, item) => acc + item.price, 0))
    })

    itensForSale().then(data => {
      const formatedData = data.map(item => {
        if (!item.desactive) {
          return {
            key: item.id,
            value: `${item.name} - R$ ${item.price}`,
            disabled: item.desactive,
          }
        }
        return {
          key: item.id,
          value: `${item.name}`,
          disabled: item.desactive
        }
      }
      )
      setDataForRender(formatedData)
    })
  }, [])

  const handleAddItem = () => {
    if (selectedItem === '') return Alert.alert('Selecione um item')

    const selectedItemData = dataForRender.find(item => item.key === selectedItem)

    addSellRecord(selectedItemData.key, 1).then(data => {
      getAllSellRecords().then(data => {
        const formatedData = data.map(item => {
          return {
            key: item.id,
            nome: item.name,
            saleCost: item.price
          }
        })
        setSoldList(formatedData)
        setSellQtd(sellQtd + 1)

        // Calcular o valor total
        const sellValueS = data.map(item => item.price).reduce((acc, item) => acc + item, 0)
        setSellValue(sellValueS)
      })
    })
  }

  const handleRemoveItem = (index) => {
    setIndex(index)
    setModalVisible(true)
  }

  const handleCloseModal = (inputText) => {

    deleteSellRecord(index, inputText)
      .then(data => {
        getAllSellRecords()
          .then(data => {
            const formatedData = data.map(item => {
              return {
                key: item.id,
                nome: item.name,
                saleCost: item.price
              }
            })
            setSoldList(formatedData)
            setSellQtd(sellQtd - 1)
            setSellValue(data.map(item => item.price).reduce((acc, item) => acc + item, 0))

          })
      }).catch(err => {
        console.log(err)
        Alert.alert('Senha inválida')
      })

    console.log(data)


    Alert.alert('Item removido com sucesso')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <ModalInput
        isVisible={modalVisible}
        title="Remover item"
        inputPlaceholder="Digite a senha aqui"
        description="Digite a senha de administrador para remover"
        onClose={(inputText) => handleCloseModal(inputText)}
      />
      <Text style={styles.titleEvent}>Festa Junina</Text>
      <Text style={styles.dateEvent}>Data à definir</Text>

      {/* Dropdown Here  ---------- Button for plus item */}
      <View style={styles.dropdownButtonContainer}>

        <SelectList
          setSelected={(val) => setSelectedItem(val)}
          data={dataForRender}
          save="key"
          maxHeight={500}
          fontFamily="serif"
          arrowicon={<Ionicons name='chevron-down' size={24} color="white" />}
          search={false}
          placeholder="Selecione um item"

          boxStyles={{ width: 245, height: 50, backgroundColor: '#363636', borderColor: `#696969`, }}
          inputStyles={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
          disabledItemStyles={{ backgroundColor: '#404040' }}
          disabledTextStyles={{ color: '#909090' }}
          dropdownStyles={{ backgroundColor: '#606060', borderColor: '#404040' }}
          dropdownItemStyles={{ backgroundColor: '#606060' }}
          dropdownTextStyles={{ color: 'white' }}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonAdd}
          onPress={() => handleAddItem()}
        >
          <Text style={styles.buttonText} >+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total: R$ {sellValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
        <Text style={styles.infoText}>|   # {sellQtd}</Text>
      </View>

      {/* List of items */}
      <Text style={{ color: "#696969", fontSize: 20, fontWeight: "bold", marginTop: 90, }}>Histórico de Vendas</Text>
      <View>
        <View style={styles.listItens}>
          {
            soldList.length === 0 ?
              <Text style={styles.listEmptyText}>Nenhum item adicionado</Text>

              :

              <FlatList
                data={soldList}
                renderItem={({ item, index }) => (
                  <ItemList
                    item={item}
                    index={index}
                    handleRemoveItem={handleRemoveItem}
                  />
                )}
                keyExtractor={(item, index) => index}
              />
          }
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  listItens: {
    width: 312,
    backgroundColor: '#202020',
    height: 420,
    zIndex: 0,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#121214",
    padding: 24,
    width: '100%',
    height: 1
  },
  titleEvent: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  dateEvent: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  dropdownButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    zIndex: 1
  },
  buttonAdd: {
    backgroundColor: '#38b000',
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15,
    borderColor: `#696969`,
    borderWidth: 1
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    zIndex: 0,
    position: 'absolute',
    top: 200,
    right: 24,
    left: 24,

  },
  infoContainer: {
    backgroundColor: '#696969',
    padding: 14,
    borderRadius: 10,
    borderColor: '#404040',
    borderWidth: 2,
    marginTop: 10,
    position: 'absolute',
    top: 200,
    right: 24,
    left: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 0
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
