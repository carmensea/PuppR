import Header from './src/components/Header';
import ShowDogList from './src/components/ShowDogList';
import CarouselExample from './src/components/ShowCarousel';
import Button from './src/components/ShowButton';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Form from './src/components/Form';
import DogList from './src/components/DogList';
import DogIndex from './src/components/DogIndex';
import ScottShowDogDetail from './src/components/ScottShowDogDetail';

const frontEnd = () => (
  <View>
    <Header headerText="Puppr"/>
    <ScottShowDogDetail />
  </View>  
);


AppRegistry.registerComponent('frontEnd', () => frontEnd);
