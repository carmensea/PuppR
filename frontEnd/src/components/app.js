import Header from './src/components/Header';
import ShowDogList from './src/components/ShowDogList';
import CarouselExample from './src/components/ShowCarousel';
import Button from './src/components/ShowButton';
import { Router, Scene } from 'react-native-router-flux';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Form from './src/components/Form';
import DogList from './src/components/DogList';

const frontEnd = () => (
  <Router>
    <Scene key="root">

    <Scene
      key="form"
      component={Form}
      hideNavBar
      initial
    />

    <Scene
      key="flip"
      component={CarouselExample}
      hideNavBar
    />

    </Scene>
  </Router>
  );


AppRegistry.registerComponent('frontEnd', () => frontEnd);
