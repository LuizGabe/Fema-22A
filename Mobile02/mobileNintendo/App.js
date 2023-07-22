import React from 'react';
import { View } from 'react-native';

import Header from './components/Header/Header';
import Conteudo from './components/Conteudo/Conteudo';

export default function App() {
  return (
    <View>
      <Header />
      <Conteudo />
    </View>
  );
}
