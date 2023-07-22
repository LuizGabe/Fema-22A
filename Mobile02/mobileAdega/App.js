import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Entypo, MaterialIcons } from '@expo/vector-icons';

import Inicio from './Components/Start/Start'
import Contatos from './Components/Contacts/Contacts'
import Catalogo from './Components/Catalog/Catalog'

const navigationConfig = {
  headerStyle: {
    backgroundColor: '#400303'
  },
  headerTitleStyle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  headerTitleAlign: 'center',

  tabBarStyle: {
    backgroundColor: "#fff"
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: "bold"
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: "#ab887c",
  tabBarActiveBackgroundColor: "#400303",
}

const navigations = [
  {
    name: 'Inicio',
    component: Inicio,
    icon: 'home'
  },
  {
    name: 'Catalogo',
    component: Catalogo,
    icon: 'wine-grass'
  },
  {
    name: 'Contatos',
    component: Contatos,
    icon: 'book'
  }
]

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <NavigationContainer >
        <Tabs.Navigator
          screenOptions={navigationConfig}>
          {
            navigations.map((value, n) => (
              <Tabs.Screen key={n} name={value.name} component={value.component}
                options={{
                  tabBarIcon: ({ color }) => (
                    <Entypo name={value.icon} color={color} size={20} />
                  )
                }} />
            ))
          }
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
