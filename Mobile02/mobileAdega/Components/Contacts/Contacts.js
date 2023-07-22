import { Text, View } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Contatos() {
  return (
   <View style={ GlobalStyles.contato }>
        <Text style={ GlobalStyles.titleContato }>Entre em contato conosco para comprar nossos produtos</Text>
      
        <View style={ GlobalStyles.contatoLista }>
          <View style={ GlobalStyles.contatoBox }>
            <FontAwesome name="phone" size={ 50 } color="#400303" />
            <Text style={ GlobalStyles.titleBoxContato}>Telefone:</Text>
            <Text style={ GlobalStyles.textBoxContato}>+55 21 000000000</Text>
          </View>
          
          <View style={ GlobalStyles.contatoBox }>
            <Entypo name="location-pin" size={ 50 } color="#400303" />
            <Text style={ GlobalStyles.titleBoxContato}>Endereço:</Text>
            <Text style={ GlobalStyles.textBoxContato}>Av. 123, 222 - Rio de Janeiro RJ</Text>
          </View>

          <View style={ GlobalStyles.contatoBox }>
            <MaterialIcons name="email" size={ 50 } color="#400303" />
            <Text style={ GlobalStyles.titleBoxContato}>Email:</Text>
            <Text style={ GlobalStyles.textBoxContato}>preferida@adega.com.br</Text>
          </View>

          <View style={GlobalStyles.contatoBox }>
            <FontAwesome name="instagram" size={ 50 } color="#400303" />
            <Text style={GlobalStyles.titleBoxContato}>Instagram:</Text>
            <Text style={ GlobalStyles.textBoxContato}>@adegapreferida</Text>
          </View>
        </View>
      </View>
  );
}