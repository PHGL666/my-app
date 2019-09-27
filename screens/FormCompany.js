import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";

class FormCompany extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.company ? this.props.company.name : ''
    };
  }

  saveCompany() {
    const method = this.props.company ? 'PUT' : 'POST';
    let url = process.env.API_URL + '/companies';
    if (this.props.company) {
      url += '/' + this.props.company._id;
    }
    fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name })
    })
      .then(response => response.json())
      .then(data => {
        if (typeof this.props.onSave === 'function') {
          this.props.onSave(data);
        }
      })
      .catch(err => console.log(err))
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

export default FormCompany;