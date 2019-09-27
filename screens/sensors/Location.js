import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as ExpoLocation from 'expo-location';
import * as Permissions from 'expo-permissions';

class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({status}) => {
        ExpoLocation.getCurrentPositionAsync({
          accuracy: ExpoLocation.Accuracy.BestForNavigation
        })
          .then(location => this.setState({ location: location   }))
      })
  }

  render() {

    let location = <Text>Waiting...</Text>;
    if (this.state.location) {
      const {latitude, longitude, accuracy} = this.state.location.coords;
      location = (
        <View>
          <Text>Latitude : {latitude}</Text>
          <Text>Longitude : {longitude}</Text>
          <Text>Accuracy : {accuracy}</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Location :</Text>
        {location}
      </View>
    );
  }
}

export default Location;