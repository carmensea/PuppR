import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Axios';
import DogList from './src/components/DogList';

const App = () => (
  <View>
    <Header />
    <DogList />
  </View>
);

AppRegistry.registerComponent('frontEnd', () => App);
