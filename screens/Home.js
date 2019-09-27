import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import CompanyItem from '../components/CompanyItem';
import {LinearGradient} from "expo-linear-gradient";

class Home extends Component {

  static navigationOptions = {
    drawerLabel: 'Accueil'
  };

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      title: '',
      year: new Date().getFullYear(),
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCompanies();
  }

  fetchCompanies() {
    console.log(process.env.API_URL);
    fetch(process.env.API_URL + '/companies?page=' + this.state.page)
      .then(response => response.json())
      .then(data => this.setState({ companies: [...this.state.companies, ...data.companies] }))
  }

  addMovie() {
    const movie =  { title: this.state.title, year: this.state.year };
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }


  render() {
    console.log('render home')
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <LinearGradient colors={['#4c669f', '#ff0000', '#ff0000']} locations={[0, 10, 20]} start={[0.1, 0.2]} end={[0.5, 0.5]}>
          <Text>Home</Text>
          <View style={{ height: 250 }}>
            <FlatList data={this.state.companies}
                      renderItem={({item}) => <CompanyItem company={item}/>}
                      keyExtractor={(item, index) => index.toString()}
            />
            <Button onPress={() => this.setState({ page: this.state.page + 1 }, () => this.fetchCompanies())} title='Charger plus'/>
          </View>
          <TextInput onChangeText={text => this.setState({ title: text })}
                     value={this.state.title}
                     placeholder='Titre du film'/>
          <TextInput onChangeText={text => this.setState({ year: text })}
                     value={this.state.year.toString()}
                     keyboardType='numeric'/>
           <Switch/>
          <Button onPress={() => this.addMovie()} title='Ajouter un film'/>
        </LinearGradient>
      </View>
    );
  }
}

export default Home;