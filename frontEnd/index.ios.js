import ShowDogList from './src/components/ShowDogList';
import CarouselExample from './src/components/ShowCarousel';
import ShowFavoriteDogDetail from './src/components/ShowFavoriteDogDetail';
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
import DogIndex from './src/components/DogIndex';
import TabIcon from './src/components/TabIcon';

const frontEnd = () => (
  <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
    <Scene key="root" hideNavBar={true}>
    {/* this is the tabs*/}
      <Scene
      key="tabbar"
      tabs={true}
      tabBarStyle={{ backgroundColor: '#FFFFFF'}}
      >
    {/* this the bar*/}
      <Scene key="favs" title="Favs" icon={TabIcon}>
        <Scene
          key="favorites"
          component={DogIndex}
          title="PuppR"
          initial
        />
        <Scene
          key="show"
          component={ShowFavoriteDogDetail}
          title="PuppR"
        />
    {/* this closes bar*/}
      </Scene>
    <Scene key="fillform" title="Fill Form" icon={TabIcon}>
        <Scene
          key="form"
          component={Form}
          title="PuppR"
          initial
        />
        <Scene
          key="flip"
          component={CarouselExample}
          title="PuppR"
        />
      {/* this closes bar*/}
      </Scene>
      {/* this closes tabs*/}
      </Scene>
    </Scene>
  </Router>
  );

const styles = {
  navBar: {
    height: 90
  },
  navBarTitle: {
    color: '#598ED3',
    fontSize: 45,
    fontFamily: 'Helvetica',
    fontWeight: '500'
  }

};

AppRegistry.registerComponent('frontEnd', () => frontEnd);
