import React from 'react';
import { Text, ImageBackground, View, Button } from 'react-native';

import backImgCorrect from '../../assets/trofeu.jpg';
import styles from './CorrectPage.style';

const CorrectPage = (props) => {
  const voltar = () => {
    props.navigation.navigate('Inicio');
  }

  return (
    <ImageBackground source={backImgCorrect} style={styles.fundo} resizeMode="contain">
      <Text style={styles.texto}>Parabéns, você acertou!</Text>

      <View style={styles.boxBotaoTabuada}>
        <Button title="Responder outro" onPress={voltar} color="#a0df52"/>
      </View>
    </ImageBackground>
  )
}

export default CorrectPage;