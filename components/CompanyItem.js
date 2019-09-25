import React, {Component} from 'react';
import { View, Text } from "react-native";

class CompanyItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.company.name}</Text>
      </View>
    );
  }
}

export default CompanyItem;