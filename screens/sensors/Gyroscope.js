import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Gyroscope as ExpoGyroscope} from 'expo-sensors';
import SensorItem from "../../components/SensorItem";

class Gyroscope extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gyroscopeData: {}
    };
  }

  componentDidMount() {
    ExpoGyroscope.setUpdateInterval(100);
    this._gyroscopeSubscription = ExpoGyroscope.addListener(data => this.setState({ gyroscopeData: data }))
  }

  componentWillUnmount() {
    this._gyroscopeSubscription && this._gyroscopeSubscription.remove();
    this._gyroscopeSubscription = null;
  }

  render() {
    return (
      <View>
        <Text>Gyroscope :</Text>
        <SensorItem data={this.state.gyroscopeData}/>
      </View>
    );
  }
}

export default Gyroscope;