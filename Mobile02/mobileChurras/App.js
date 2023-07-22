import React from 'react';
import { View } from 'react-native';

import Topo from './components/Topo';
import Texto from './components/Texto';
import Cards from './components/Cards';

export default function App () { 
  return (
    <View>
      <Topo />
      <Texto />
      <Cards />
    </View>
  );
}