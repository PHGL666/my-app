import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import MovieItem from '../components/MovieItem';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: '',
      year: new Date().getFullYear()
    };
  }

  componentDidMount() {
    this.setState({
      movies: [
        { title: 'Titanic', year: 1998 },
        { title: 'Intouchables', year: 2015 }
      ]
    });
  }

  addMovie() {
    const movie =  { title: this.state.title, year: this.state.year };
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text>Home</Text>
        <View style={{ height: 250 }}>
          <FlatList data={this.state.movies}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                    keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <TextInput onChangeText={text => this.setState({ title: text })}
                   value={this.state.title}
                   placeholder='Titre du film'/>
        <TextInput onChangeText={text => this.setState({ year: text })}
                   value={this.state.year.toString()}
                   keyboardType='numeric'/>
         <Switch/>
        <Button onPress={() => this.addMovie()} title='Ajouter un film'/>
      </View>
    );
  }
}

export default Home;