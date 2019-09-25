import React, {Component} from 'react';
import { View, Text } from "react-native";

class Company extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name
    }
  };

  render() {

    const company = this.props.navigation.getParam('company');

    return (
      <View>
        <Text>{company.name}</Text>
        <Text>{company.founded_year}</Text>
        <Text>{company.founded_month}</Text>
        <Text>{company.homepage_url}</Text>
      </View>
    );
  }
}

export default Company;