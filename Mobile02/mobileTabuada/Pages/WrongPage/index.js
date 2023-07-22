import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

import backImgWrong from '../../assets/errou.jpg';
import styles from './WrongPage.styles';

//Ordens para navegação
const TelaRespostaErrada = (props) => {

  return (
    <ImageBackground source={backImgWrong} style={styles.fundo} resizeMode="cover">
      <View style={styles.boxConteudo}>
        <Text style={styles.texto}>
          Ops! A resposta era {props.route.params.resposta}
        </Text>

        <View style={styles.boxBotoes}>
          <View style={styles.boxBotao}>
            <Button title="Ver tabuada" onPress={() => props.navigation.navigate('Tabuada')} color="#1f4f66"/>
          </View>

          <View style={styles.boxBotao}>
            <Button title="Tentar outro" onPress={() => props.navigation.navigate('Inicio')} color="#a0df52"/>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TelaRespostaErrada;