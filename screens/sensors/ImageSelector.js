import React, {Component} from 'react';
import {View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class ImageSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
      .then(({status}) => console.log(status))
    ;
  }

  pickImage() {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })
      .then(result => {
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      })
    ;
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.pickImage()} title='Chercher une image'/>
        <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }}/>
      </View>
    );
  }
}

export default ImageSelector;