import { Text, View, Image } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import Wines from './Data'

export default function Catalog() {
  console.log('tes')
  return (
    <View style={GlobalStyles.catalogo}>
      <Text style={GlobalStyles.titleCatalogo}>Nossos Vinhos</Text>
      <Text style={GlobalStyles.textCatalogo}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho Branco, Vinho rosé, Vinho tinto e Vinho seco.</Text>

      <View style={GlobalStyles.vinhoLista}>

        {
          
          Wines.map((value, n) => (
            <View style={GlobalStyles.boxVinho} key={n}>
              <Image resizeMode="contain" style={GlobalStyles.vinhoImg} source={value.image} />
              <View style={GlobalStyles.vinhoBoxTextos}>
                <Text style={GlobalStyles.titleBoxVinho}>{value.name}</Text>
                <Text style={GlobalStyles.textBoxVinho}>{value.description}</Text>
              </View>
            </View>
          ))
        }

      </View>

    </View>
  );
}