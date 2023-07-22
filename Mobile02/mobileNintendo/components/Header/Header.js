import React from 'react';
import { View, Text, Image } from 'react-native';

import ConsoleImgFile from '../../assets/nintendoSwitch.png';
import styles from './Header.style';

export default function Topo() {
  return(
    <View style={ styles.container }>
      <Image source={ ConsoleImgFile } style={ styles.image } />
      <Text style={ styles.title }>Nintendo Switch</Text>
    </View>
  )
}
