import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native'; // Removi a importação desnecessária de Text
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateProduct';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer);
const Stack = createStackNavigator();

const headerOptions = {
  title: 'MangueWine',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#8B0000',
  },
  headerRight: () => (
    <View style={{ marginRight: 10 }}>
      <Image
        source={require('./assets/manguewine.png')} 
        style={{ width: 80, height: 80 }}
      />
    </View>
  ),
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={headerOptions} />
          <Stack.Screen
            name="Create"
            component={CreateEmployee}
            options={{ ...headerOptions, title: 'Estoque' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ ...headerOptions, title: 'Produtos' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000', 
  },
});
