import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import CompanyItem from '../components/CompanyItem';

class Home extends Component {

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
    fetch(process.env.API_URL + '/companies?page=' + this.state.page)
      .then(response => response.json())
      .then(companies => this.setState({ companies: [...this.state.companies, ...companies] }))
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
      </View>
    );
  }
}

export default Home;