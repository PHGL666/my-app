import React, {Component} from 'react';
import {Text, View} from "react-native";
import {Accelerometer as ExpoAccelerometer} from "expo-sensors";
import SensorItem from "../../components/SensorItem";

class Accelerometer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accelerometerData: {}
    };
  }

  componentDidMount() {
    ExpoAccelerometer.setUpdateInterval(100);
    this._accelerometerSubscription = ExpoAccelerometer.addListener(data => this.setState({ accelerometerData: data }))
  }

  componentWillUnmount() {
    this._accelerometerSubscription && this._accelerometerSubscription.remove();
    this._accelerometerSubscription = null;
  }

  render() {
    return (
      <View>
        <Text>Accelerometer :</Text>
        <SensorItem data={this.state.accelerometerData}/>
      </View>
    );
  }
}

export default Accelerometer;