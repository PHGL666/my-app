import React, {Component} from 'react';
import FormCompany from "./FormCompany";

class NewCompany extends Component {

  render() {
    return (
      <FormCompany onSave={(data) => this.props.navigation.navigate('Home')}/>
    );
  }

}

export default NewCompany;