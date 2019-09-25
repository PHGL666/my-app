import React, {Component} from 'react';
import {View, TextInput, Button} from "react-native";

class NewCompany extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  saveCompany() {
    fetch(process.env.API_URL + '/companies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name })
    })
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.name} onChangeText={text => this.setState({ name: text })} placeholder={'Nom de l\'entreprise'}/>
        <Button onPress={() => this.saveCompany()} title='Enregistrer'/>
      </View>
    );
  }
}

export default NewCompany;