import React, {Component} from 'react';
import { TextInput as DefaultTextInput } from 'react-native';

class TextInput extends Component {
  render() {
    return (
      <DefaultTextInput style={{ backgroundColor: 'white', borderColor: '#ccc', borderWidth: 1, padding: 10 }} {...this.props}/>
    );
  }
}

export default TextInput;