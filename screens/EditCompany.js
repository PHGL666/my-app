import React, {Component} from 'react';
import { View } from "react-native";
import {StackActions, NavigationActions} from 'react-navigation';
import FormCompany from "./FormCompany";

class EditCompany extends Component {

  static navigationOptions = ({ navigation }) => {
    const company = navigation.getParam('company');
    return {
      title: company.name
    }
  };

  render() {

    const company = this.props.navigation.getParam('company');

    return (
      <View>
        <FormCompany company={company} onSave={() => {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Search' })]
          });
          this.props.navigation.dispatch(resetAction);
        }}/>
      </View>
    );
  }
}

export default EditCompany;