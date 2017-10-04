import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class TabIcon extends Component {
render(){
  return (
    <View>
      <Text>{this.props.title}</Text>
    </View>
    );
  }
};

export default TabIcon;