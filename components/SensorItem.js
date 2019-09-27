import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SensorItem extends Component {
  render() {

    const {x, y, z} = this.props.data;

return (
      <View>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
      </View>
    );
  }

}

export default SensorItem;