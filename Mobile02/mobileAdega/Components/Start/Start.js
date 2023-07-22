import { Text,ImageBackground } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
const backgroundImage = require('../../assets/backgroundInicio.jpg')

const App = () => {
  return (
    <ImageBackground 
      blurRadius={ 10 } 
      style={ GlobalStyles.inicio } 
      source={backgroundImage}>
    <Text style={GlobalStyles.subTitleInicio}>Adega Preferida</Text> 
    <Text style={GlobalStyles.textInicio}>Aqui você encontra os melhores e mias saborosos vinhos.</Text>   
    </ImageBackground>
  );
}

export default App