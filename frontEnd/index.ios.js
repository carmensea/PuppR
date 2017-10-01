/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Form from './src/components/Form';

const frontEnd = () => (
  <View>
    <Form />
  </View>
  );

AppRegistry.registerComponent('frontEnd', () => frontEnd);
