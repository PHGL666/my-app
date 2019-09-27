import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Gyroscope as ExpoGyroscope} from 'expo-sensors';
import SensorItem from "../../components/SensorItem";

class Gyroscope extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gyroscopeData: {},
      position: {
        top: 100,
        left: 100
      }
    };
  }

  componentDidMount() {
    ExpoGyroscope.setUpdateInterval(100);
    this._gyroscopeSubscription = ExpoGyroscope.addListener(data => this.setState({ gyroscopeData: data }));
    setInterval(() => {
      const {top, left} = this.state.position;
      const {x, y} = this.state.gyroscopeData;
      this.setState({
        position: {
          top: top + x,
          left: left + y
        }
      })
    }, 100);
  }

  componentWillUnmount() {
    this._gyroscopeSubscription && this._gyroscopeSubscription.remove();
    this._gyroscopeSubscription = null;
  }

  render() {

    const {top, left} = this.state.position;

    return (
      <View>
        <Text>Gyroscope :</Text>
        <SensorItem data={this.state.gyroscopeData}/>
        <View style={{ position: 'absolute', top: top, left: left, height: 50, width: 50, borderRadius: 50, backgroundColor: 'red' }}></View>
      </View>
    );
  }
}

export default Gyroscope;