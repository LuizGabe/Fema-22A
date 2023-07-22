import React from 'react';
import { View, Text, Image } from 'react-native';

import SmashBrosFile from '../../assets/superSmashBros.png';
import styles from './Conteudo.style';

export default function Conteudo() {
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Os principais jogos estão aqui</Text>
      <Image source={ SmashBrosFile } style={ styles.image } />
      <Text style={ styles.desc }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
    </View>
  )
}
