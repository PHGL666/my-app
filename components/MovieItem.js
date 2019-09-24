import React, {Component} from 'react';
import { View, Text } from "react-native";

class MovieItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.movie.title}</Text>
        <Text>{this.props.movie.year}</Text>
      </View>
    );
  }
}

export default MovieItem;