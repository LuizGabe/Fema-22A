import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Pages/Home';
import TabPage from "./Pages/Tabuada";


import CorrectPage from "./Pages/CorrectPage";
import WrongPage from "./Pages/WrongPage";

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer >
    <Navegacao.Navigator screenOptions={{ headerShown: false }}>
      <Navegacao.Screen name="Inicio" component = { HomePage } />

      <Navegacao.Screen name="RespostaCorreta" component = { CorrectPage } />
      <Navegacao.Screen name="RespostaErrada" component = { WrongPage } />

      <Navegacao.Screen name="Tabuada" component = { TabPage } />

    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;