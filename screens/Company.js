import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Stylesheet";

class Company extends Component {

  static navigationOptions = ({ navigation }) => {
    const company = navigation.getParam('company');
    return {
      title: company.name,
      headerRight: (
        <View style={styles.btnHeaderContainer}>
          <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnDanger ]} onPress={() => {
            fetch(process.env.API_URL + '/companies/' + company._id, { method: 'delete' })
              .then(response => response.json())
              .then(data => navigation.navigate('Search'))
              .catch(err => console.log(err))
            ;
          }} >
            <Text style={styles.btnDangerText}>Supprimer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnWarning ]} onPress={() => navigation.navigate('EditCompany', { company: company })}>
            <Text style={styles.btnWarningText}>Modifier</Text>
          </TouchableOpacity>
        </View>
      )
    }
  };

  render() {

    const company = this.props.navigation.getParam('company');

    return (
      <View>
        <Text>{company.name}</Text>
      </View>
    );
  }
}

export default Company;