import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import { styles } from "./styles/styles"
import { styles1 } from "./styles/styles1"

const App = () => {
  if (true) {
    return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.logo}/>
            <Text style={styles.h1} >Sistema de Login</Text>
            <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo</Text>
            
            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
              style={styles.inputField}
              placeholder="Digite seu email"
              />
            </View>
            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput 
              style={styles.inputField}
              placeholder="*******"
              secureTextEntry
              />
            </View>
            <View style={styles.aditionals}>
              <TouchableOpacity style={styles.forgotBtnArea}>
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
  
            </View>
  
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
  
            <View style={styles.signUpArea}>
              <Text style={styles.signUpText}>Não tem uma conta?  <Text style={styles.signUpBtnText}>Cadastre-se</Text> </Text>
            </View>
            <View  style={styles.footerArea}>
              <Text style={styles.footerText}>Feito por Luiz Gabriel</Text>
            </View>
          </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles1.container}>
        <Text style={styles1.title}>Minha jornada no React Native </Text> <br/>
        <Text style={styles1.buttonGreen}> Fundamentos do React Native</Text> <br/>
        <Text style={styles1.buttonGreen}> Expo e Expo CLI</Text> <br/>
        <Text style={styles1.buttonGreen}> Estilização com StyleSheet</Text> <br/>
        <Text style={styles1.buttonRed}> Navegação</Text> <br/>
        <Text style={styles1.buttonRed}> ScrollView e FlatList</Text> <br/>
        <Text style={styles1.buttonRed}> Periféricos</Text> <br/>
        <Text style={styles1.buttonRed}> Styled Components</Text> <br/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App